import { extractCsvMappings } from './csvMapping'
import { clearReplaceUidCache } from './replaceUid'
import type {
  TMappingOptions,
  TMapResults,
  TFileInfo,
  OrganizeOptions,
  TWorkerMessage,
} from './types'

type TMappingWorkerOptions = TMappingOptions & {
  outputDirectory: FileSystemDirectoryHandle
}

export type { OrganizeOptions } from './types'

const mappingWorkerCount = navigator.hardwareConcurrency

let filesToProcess: TFileInfo[] = []
let directoryScanFinished = false

/*
 * Directory scanner web worker management
 *
 * worker accepts these messages:
 *   command: 'scan', directoryHandle
 *   command: 'stop'
 * worker sends these messages:
 *   response: 'file', file info (TFileInfo)
 *   response: 'done'
 */
// TODO: implement a buffering stream to request fileHandles in batches
function initializeFileListWorker() {
  filesToProcess = []
  directoryScanFinished = false

  const fileListWorker = new Worker(
    new URL('./scanDirectoryWorker.js', import.meta.url),
    { type: 'module' },
  )

  fileListWorker.addEventListener('message', (event) => {
    switch (event.data.response) {
      case 'file':
        filesToProcess.push(event.data.fileInfo)
        // Could do some throttling:
        // if (filesToProcess.length > 10) {
        //   fileListWorker.postMessage({ request: 'stop' })
        // }
        dispatchMappingJobs()
        break
      case 'done':
        console.log('directoryScanFinished')
        directoryScanFinished = true
        break
      default:
        console.error(`Unknown response from worker ${event.data.response}`)
    }
    dispatchMappingJobs()
  })

  return fileListWorker
}

//
// Apply mappings web worker management
//
// worker accepts these messages:
//   request: 'apply', fileInfo, outDirectoryHandle, mappingOptions
// worker sends these messages:
//   response: 'finished', mapResults
//
let mappingWorkerOptions: Partial<TMappingWorkerOptions> = {} // TODO: only send to worker once
const availableMappingWorkers: Worker[] = []
let workersActive = 0
let mapResultsList: TMapResults[] = []

function initializeMappingWorkers() {
  mappingWorkerOptions = {}
  workersActive = 0
  mapResultsList = []

  for (let workerIndex = 0; workerIndex < mappingWorkerCount; workerIndex++) {
    let mappingWorker = new Worker(
      new URL('./applyMappingsWorker.js', import.meta.url),
      { type: 'module' },
    )
    mappingWorker.onerror = console.error

    mappingWorker.addEventListener('message', (event) => {
      switch (event.data.response) {
        case 'finished':
          availableMappingWorkers.push(mappingWorker)
          mapResultsList.push(event.data.mapResults)
          workersActive -= 1

          // Add progress callback
          if (progressCallback) {
            progressCallback({
              response: 'progress',
              mapResults: event.data.mapResults,
              processedFiles: mapResultsList.length,
              totalFiles:
                filesToProcess.length + mapResultsList.length + workersActive,
            })
          }

          dispatchMappingJobs()
          if ((mapResultsList.length - 1) % 100 === 0) {
            console.log(`Finished mapping ${mapResultsList.length} files`)
          }
          break
      }
    })

    availableMappingWorkers.push(mappingWorker)
  }
}

function dispatchMappingJobs() {
  while (filesToProcess.length > 0 && availableMappingWorkers.length > 0) {
    const fileInfo = filesToProcess.pop()!
    const mappingWorker = availableMappingWorkers.pop()!
    const { outputDirectory, ...mappingOptions } = mappingWorkerOptions
    mappingWorker.postMessage({
      request: 'apply',
      fileInfo,
      outputDirectory,
      mappingOptions,
    })
    workersActive += 1
  }
  if (
    workersActive === 0 &&
    directoryScanFinished &&
    filesToProcess.length === 0
  ) {
    // End and remove all workers
    while (availableMappingWorkers.length) {
      availableMappingWorkers.pop()!.terminate()
    }
    clearReplaceUidCache()
    console.log(`Finished mapping ${mapResultsList.length} files`)
    console.log('job is finished')
    console.log(mapResultsList)
  }
}

async function collectMappingOptions(
  organizeOptions: OrganizeOptions,
): Promise<TMappingWorkerOptions> {
  //
  // first, get the folder mappings and set output directory
  //
  const inputPathPattern = organizeOptions.inputPathPattern
  const outputDirectory = organizeOptions.outputDirectory

  //
  // then, get the field mappings from the csv file
  //
  // assumes all fields are not repeated across rows
  const csvFile = await organizeOptions.columnMapping.getFile()
  const columnMappings = await extractCsvMappings(csvFile)

  //
  // then, get the mapping functions
  //
  const mappingScriptFile = await organizeOptions.mappingScript.getFile()
  const mappingScript = await mappingScriptFile.text()

  const ps315Options = organizeOptions.ps315Options

  return {
    inputPathPattern,
    outputDirectory,
    columnMappings,
    mappingScript,
    ps315Options,
  }
}

export type ProgressCallback = (message: TWorkerMessage) => void

let progressCallback: ProgressCallback | undefined

export async function apply(
  options: OrganizeOptions,
  onProgress?: ProgressCallback,
): Promise<TMapResults[]> {
  progressCallback = onProgress

  // Initialize workers
  const fileListWorker = initializeFileListWorker()
  initializeMappingWorkers()

  // Get mapping options
  mappingWorkerOptions = await collectMappingOptions(options)

  // Start scanning
  fileListWorker.postMessage({
    request: 'scan',
    directoryHandle: options.inputDirectory,
  })

  // Wait for completion
  return new Promise((resolve) => {
    const checkComplete = setInterval(() => {
      if (
        workersActive === 0 &&
        directoryScanFinished &&
        filesToProcess.length === 0
      ) {
        clearInterval(checkComplete)
        resolve(mapResultsList)
      }
    }, 100)
  })
}
