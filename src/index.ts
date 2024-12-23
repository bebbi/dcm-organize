import * as dcmjs from "dcmjs"

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

async function applyMappings(dicomData, mappingOptions) {

    const mapResults = {
        dicomData: dicomData,
        filePath: "",
    };

    console.log(dicomData, mappingOptions);
    console.log(mapResults);

    const parser = {
        getFilePathComp: (component) => {
            const pathComponents = mappingOptions.folderMappings.split("/");
            const componentIndex = pathComponents.indexOf(component);
            const filePathComponents = mappingOptions.fileEntry.path.split("/");
            return(filePathComponents[componentIndex]);
        },
        getMapping: (value, fromColumn, toColumn) => {
            console.log(value, fromColumn, toColumn);
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
            const time = date.getTime();
            const millisecondsPerDay = 1000 * 60 * 60 * 24;
            time += offsetDays * millisecondsPerDay;
            date.setTime(time);
            const yearString = date.getFullYear();
            const monthString = (date.getMonth()+1).toString().padStart(2,'0');
            const dayString = date.getDay().toString().padStart(2,'0');
            return yearString + monthString + dayString;
        },
    }

    let dicom = {};
    let filePath = [];
    eval(mappingOptions.mappingFunctions);
    console.log(dicom);
    console.log(filePath);

    for (let key in dicom) {
        mapResults.dicomData[key] = dicom[key]();
    }

    mapResults.filePath = filePath.join("/");

    return mapResults;
}

async function apply(organizeOptions) {

    const mappingOptions = {};

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
    dcmjs.log.level = dcmjs.log.levels.ERROR;
    const fileEntryList = await scanDirectory(organizeOptions.inputDirectory);
    fileEntryList.slice(0,1).forEach(async (fileEntry, index) => {

        mappingOptions.fileEntry = fileEntry;

        const file = await fileEntry.fileHandle.getFile();
        const fileArrayBuffer = await file.arrayBuffer();
        const dicomData = dcmjs.data.DicomMessage.readFile(fileArrayBuffer);
        const naturalData = dcmjs.data.DicomMetaDictionary.naturalizeDataset(dicomData.dict);

        // do the actually header mapping
        const mapResults = applyMappings(naturalData, mappingOptions);

        dicomData.dict = dcmjs.data.DicomMetaDictionary.denaturalizeDataset(mapResults.dicomData);
        const modifiedArrayBuffer = dicomData.write();
        const fileHandle = await organizeOptions.outputDirectory.getFileHandle(mapResults.filePath, { create: true });
        const writable = await fileHandle.createWritable();
        await writable.write(modifiedArrayBuffer);
        await writable.close();
    });

}


export { getLog, apply };
