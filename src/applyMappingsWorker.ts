import * as dcmjs from 'dcmjs'
import createNestedDirectories from './createNestedDirectories'
import dcmOrganize from './dcmOrganize'
import type { TFileInfo, TMappingOptions, TMapResults } from './types'

declare var self: Window & typeof globalThis

self.addEventListener('message', (event) => {
  switch (event.data.request) {
    case 'apply':
      try {
        // Send start message with total files
        self.postMessage({
          response: 'start',
          totalFiles: 1,
        })

        applyMappings(
          event.data.fileInfo,
          event.data.outputDirectory,
          event.data.mappingOptions,
        ).then((mapResults) => {
          // Send progress message
          self.postMessage({
            response: 'progress',
            mapResults: mapResults,
            processedFiles: 1,
          })

          // Send finished message for completion
          self.postMessage({
            response: 'finished',
            mapResults: mapResults,
          })
        })
      } catch (error) {
        self.postMessage({ response: 'error', error })
        throw new Error('ERROR')
      }
      break
    default:
      console.error(`Unknown request ${event.data.request}`)
  }
})

async function applyMappings(
  fileInfo: TFileInfo,
  outputDirectory: FileSystemDirectoryHandle,
  mappingOptions: TMappingOptions,
): Promise<
  // anomalies is minimally present.
  Omit<Partial<TMapResults>, 'anomalies'> & {
    anomalies: TMapResults['anomalies']
  }
> {
  //
  // First, read the dicom instance data from the file handle
  //
  const file = await fileInfo.fileHandle.getFile()
  const fileArrayBuffer = await file.arrayBuffer()
  // TODO: capture validation data in object and save as part of results object
  dcmjs.log.setLevel(dcmjs.log.levels.ERROR)
  dcmjs.log.getLogger('validation.dcmjs').setLevel(dcmjs.log.levels.SILENT)
  let dicomData
  try {
    dicomData = dcmjs.data.DicomMessage.readFile(fileArrayBuffer)
  } catch (error) {
    const mapResults = {
      anomalies: [`Could not parse ${fileInfo.name} as dicom data`],
    }
    return mapResults
  }

  const { dicomData: mappedDicomData, mapResults: clonedMapResults } =
    dcmOrganize(fileInfo.path, dicomData, mappingOptions)

  // Finally, write the results
  const dirPath = clonedMapResults.outputFilePath
    .split('/')
    .slice(0, -1)
    .join('/')
  const fileName = clonedMapResults.outputFilePath.split('/').slice(-1)[0]

  // note that dcmjs creates a 128 preamble of all zeros, so any PHI in previous preamble is gone
  const modifiedArrayBuffer = mappedDicomData.write()
  const subDirectoryHandle = await createNestedDirectories(
    outputDirectory,
    dirPath,
  )
  if (subDirectoryHandle === false) {
    console.error(`Cannot create directory for ${dirPath}`)
  } else {
    const fileHandle = await subDirectoryHandle.getFileHandle(fileName, {
      create: true,
    })
    const writable = await fileHandle.createWritable()
    await writable.write(modifiedArrayBuffer)
    await writable.close()
  }

  return clonedMapResults
}
