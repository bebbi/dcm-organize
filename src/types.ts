import { TCsvMappings } from './csvMapping'

export interface OrganizeOptions {
  inputDirectory: FileSystemDirectoryHandle
  // identical to inputPathPattern.
  filePathPattern: string
  fieldMapping: FileSystemFileHandle
  mappingFunctions: FileSystemFileHandle
  outputDirectory: FileSystemDirectoryHandle
}

export type TMappingOptions = {
  fieldMappings: TCsvMappings
  mappingFunctions: string
  inputPathPattern: string
  outputDirectory: FileSystemDirectoryHandle
}

export type TFileInfo = {
  path: string
  name: string
  size: number
  fileHandle: FileSystemFileHandle
}

export type TMapResults = {
  sourceInstanceUID: string
  filePath: string
  mappings: {
    [lodashPath: string]:
      | [string, 'replace', string]
      | [string, 'delete', undefined]
  }
  anomalies: string[]
}
