import * as dcmjs from "dcmjs"
import * as mapdefaults from "./mapdefaults.js"

function getLog() {
    return dcmjs.log.currentLevel;
}

// TODO: this should be a stream so that large directory
// trees are not scanned all at once at the beginning
async function scanDirectory(dir) {
  const files = [];

  async function traverse(dir, prefix) {
    for await (const entry of dir.values()) {
      if (entry.kind === 'file') {
        const file = await entry.getFile();
        files.push({
          path: prefix,
          name: entry.name,
          size: file.size,
          fileHandle: entry,
        });
      } else if (entry.kind === 'directory') {
        await traverse(entry, prefix + "/" + entry.name);
      }
    }
  }

  await traverse(dir, dir.name);
  return files;
}

async function createNestedDirectories(topLevelDirectoryHandle, path) {
  const pathSegments = path.split('/').filter(segment => segment !== '');

  let currentDirectoryHandle = topLevelDirectoryHandle;

  for (const segment of pathSegments) {
    try {
      // Attempt to get the directory handle without creating it
      const entry = await currentDirectoryHandle.getDirectoryHandle(segment, { create: false });
      currentDirectoryHandle = entry;
    } catch (error) {
      // If the error is specifically about the directory not existing, create it
      if (error.name === 'NotFoundError') {
        const entry = await currentDirectoryHandle.getDirectoryHandle(segment, { create: true });
        currentDirectoryHandle = entry;
      } else {
        // Handle other potential errors (e.g., name conflicts)
        return false; // Indicate failure
      }
    }
  }

  // Return the last directory handle
  return currentDirectoryHandle;
}

function applyMappings(dicomData, mappingOptions) {

    const mapResults = {
        sourceInstanceUID: dicomData.SOPInstanceUID,
        dicomData: dicomData,
        filePath: "",
        tagMappings: {},
    };

    const parser = {
        getFilePathComp: (component) => {
            const pathComponents = mappingOptions.folderMappings.split("/");
            const componentIndex = pathComponents.indexOf(component);
            const filePathComponents = mappingOptions.fileEntry.path.split("/");
            return(filePathComponents[componentIndex]);
        },
        getMapping: (value, fromColumn, toColumn) => {
            const rowIndex = mappingOptions.fieldMappings.rowIndexByFieldValue[fromColumn][value];
            const columnIndex = mappingOptions.fieldMappings.headers.indexOf(toColumn);
            return mappingOptions.fieldMappings.rowValues[rowIndex][columnIndex];
        },
        getDicom: (tagName) => {
            return(dicomData[tagName]);
        },
        addDays: (dicomDateString, offsetDays) => {
            const year = Number(dicomDateString.slice(0,4));
            const monthIndex = Number(dicomDateString.slice(4,6)) - 1;
            const day = Number(dicomDateString.slice(6,8));
            const date = new Date(year, monthIndex, day);
            let time = date.getTime();
            const millisecondsPerDay = 1000 * 60 * 60 * 24;
            time += offsetDays * millisecondsPerDay;
            date.setTime(time);
            const yearString = date.getFullYear();
            const monthString = (date.getMonth()+1).toString().padStart(2,'0');
            const dayString = date.getDate().toString().padStart(2,'0');
            return yearString + monthString + dayString;
        },
    }

    let dicom = {};
    let filePath = [];
    eval(mappingOptions.mappingFunctions);

    // collect the tag mappings before assigning them into dicomData
    for (let tag in dicom) {
        mapResults.tagMappings[tag] = dicom[tag]();
    }
    for (let tag in mapResults.tagMappings) {
        mapResults.dicomData[tag] = mapResults.tagMappings[tag];
    }

    // use filePath populated by mappingFunctions
    mapResults.filePath = filePath.join("/");

    // TODO: track the mappings done here for the log
    const nameMap = dcmjs.data.DicomMetaDictionary.nameMap;
    for (let tag in mapResults.dicomData) {
        if (/_.*/.test(tag)) {
        if (/_.*/.test(tag) {
            continue; // ignore tags marked internal with leading underscore
        }
        if (tag in nameMap) {
            let vr = nameMap[tag].vr;
            if (vr == "UI") {
                // apply previously collected uid mappings or create new ones
                // - only map uid tags that are instance-specific
                //   (i.e. not SOPClassUID or TransferSyntaxUID)
                if (tag in mapdefaults.instanceUIDs) {
                    const uid = mapResults.dicomData[tag];
                    if ( ! (uid in mappingOptions.uidMappings) ) {
                       mappingOptions.uidMappings[uid] = {
                          tag: tag,
                          mappedUID: dcmjsModule.data.DicomMetaDictionary.uid(),
                       };
                    }
                    mapResults.dicomData[tag] = mappingOptions.uidMappings[uid].mappedUID;
                }
            } else {
                // other tags are handled according to mapdefaults rules
                if (tag in mapdefaults.tagNamesToEmpty) {
                    delete mapResults.dicomData[tag];
                } else {
                    if (! tag in mapdefaults.tagNamesToAlwaysKeep) {
                        console.error(`instance contains tag ${tag} that is not defined in mapdefaults.  Deleting it.`);
                        delete mapResults.dicomData[tag];
                    }
                }
            }
        } else {
            // TODO: this should go in the validation log
            console.error(`instance contains tag ${tag} that is not in dictionary.  Deleting it.`);
            delete mapResults.dicomData[tag];
        }

    }

    return mapResults;
}

async function apply(organizeOptions) {

    const mappingResults = {
      uidMappings : {},
      instanceTagMappings : {},
    };
    const mappingOptions = {
      uidMappings : mappingResults.uidMappings, // build up object as it is used
    };

    //
    // first, get the folder mappings
    //
    mappingOptions.folderMappings = organizeOptions.filePathPattern;

    //
    // then, get the field mappings from the csv file
    //
    // assumes all fields are not repeated across rows
    const csvFile = await organizeOptions.fieldMapping.getFile();
    const csvText = await csvFile.text();
    const rows = csvText.trim().split("\n");
    const headers = rows.slice(0,1)[0].split(",");
    const fieldMappings = {
        headers: headers,
        rowValues : {},
        rowIndexByFieldValue : {},
    };
    headers.forEach((header) => {
        fieldMappings.rowIndexByFieldValue[header] = {};
    });
    rows.slice(1).forEach( (row, rowIndex) => {
        fieldMappings.rowValues[rowIndex] = row.split(",");
        fieldMappings.rowValues[rowIndex].forEach( (fieldValue, columnIndex) => {
            fieldMappings.rowIndexByFieldValue[headers[columnIndex]][fieldValue] = rowIndex;
        });
    });
    mappingOptions.fieldMappings = fieldMappings;

    //
    // then, get the mapping functions
    //
    const functionsFile = await organizeOptions.mappingFunctions.getFile();
    mappingOptions.mappingFunctions = await functionsFile.text();

    //
    // finally, scan through the files from the input directory and save them to the output
    //
    //dcmjs.log.level = dcmjs.log.levels.ERROR; // for the npm packaged version
    dcmjs.log.setLevel(dcmjs.log.levels.ERROR); // for the locally built version
    dcmjs.log.getLogger("validation.dcmjs").setLevel(dcmjs.log.levels.SILENT); // TODO: can't be done from npm version

    const fileEntryList = await scanDirectory(organizeOptions.inputDirectory);
    let entryCount = 0;
    for (let fileEntry of fileEntryList) {
        entryCount++;
        if (entryCount % 100 == 0) {
            console.log(`Processing file ${entryCount} of ${fileEntryList.length}`);
        }

        mappingOptions.fileEntry = fileEntry;

        const file = await fileEntry.fileHandle.getFile();
        const fileArrayBuffer = await file.arrayBuffer();
        // TODO: capture validation data in object and save as part of results object
        const dicomData = dcmjs.data.DicomMessage.readFile(fileArrayBuffer);

        // Remove private tags
        // TODO: add option for `allowlist` of private tags
        for (let hexTag in dicomData.dict) {
            if (Number(hexTag[3] % 2) == 1) {
                delete dicomData.dict[hexTag];
            }
        }

        // do the actually header mapping
        const naturalData = dcmjs.data.DicomMetaDictionary.naturalizeDataset(dicomData.dict);
        const mapResults = applyMappings(naturalData, mappingOptions);

        // process the results and save the modified dataset
        const dirPath = mapResults.filePath.split("/").slice(0,-1).join("/");
        const fileName = mapResults.filePath.split("/").slice(-1);
        dicomData.dict = dcmjs.data.DicomMetaDictionary.denaturalizeDataset(mapResults.dicomData);
        const modifiedArrayBuffer = dicomData.write();

        const subDirctoryHandle = await createNestedDirectories(organizeOptions.outputDirectory, dirPath);
        if (subDirctoryHandle == false) {
            console.error(`Cannot create directory for ${dirPath}`);
        } else {
            const fileHandle = await subDirctoryHandle.getFileHandle(fileName, { create: true });
            const writable = await fileHandle.createWritable();
            await writable.write(modifiedArrayBuffer);
            await writable.close();
        }
    }
}


export { dcmjs, getLog, apply };
