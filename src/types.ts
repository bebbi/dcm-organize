import { TColumnMappings } from './csvMapping'
import { TNaturalData } from 'dcmjs'

export type TPs315Options = {
  cleanDescriptorsOption: boolean
  cleanDescriptorsExceptions: string[]
  retainLongitudinalTemporalInformationOptions:
    | 'Full'
    | 'Off'
    | [
        'dicom' | 'filePath',
        identifier: string,
        fromHeader: string,
        toHeader: string,
      ]
  retainPatientCharacteristicsOption: false | string[]
  retainDeviceIdentityOption: boolean
  retainUIDsOption: 'On' | 'Off' | 'Hashed'
  retainSafePrivateOption: boolean
  retainInstitutionIdentityOption: boolean
}

export interface OrganizeOptions {
  inputDirectory: FileSystemDirectoryHandle
  inputPathPattern?: string
  columnMapping: FileSystemFileHandle
  mappingScript: FileSystemFileHandle
  outputDirectory: FileSystemDirectoryHandle
  ps315Options?: TPs315Options
}

export type TMappingOptions = {
  columnMappings: TColumnMappings
  mappingScript: string
  inputPathPattern?: string
  ps315Options?: TPs315Options
}

export type TFileInfo = {
  path: string
  name: string
  size: number
  fileHandle: FileSystemFileHandle
}

// Includes deep sequences
type TAttr = { [name: string]: string | TAttr[] }

export type TMapResults = {
  sourceInstanceUID: string
  outputFilePath: string
  mappings: {
    // TAttr[]: exclude individual { key: value } objects
    [objectPath: string]:
      | [string, 'replace', string, string | TAttr[]]
      | [string, 'delete', string, undefined]
  }
  anomalies: string[]
  errors: string[]
}

export type TPs315EElement = {
  name: string
  keyword: string
  tag: string
  stdCompIOD: 'Y' | 'N'
  id: string
  basicProfile: string
  cleanDescOpt?: string
  cleanStructContOpt?: string
  rtnLongFullDatesOpt?: string
  rtnLongModifDatesOpt?: string
  rtnUIDsOpt?: string
  rtnPatCharsOpt?: string
  rtnDevIdOpt?: string
  rtnInstIdOpt?: string
  cleanGraphOpt?: string
  rtnSafePrivOpt?: string
  // introduced by us
  exceptCondition?: (attrs: TNaturalData) => boolean
}

export type TWorkerMessage = {
  response: 'start' | 'progress' | 'finished' | 'error'
  totalFiles?: number
  processedFiles?: number
  mapResults?: TMapResults
  error?: Error
}

export type ProgressCallback = (message: TWorkerMessage) => void
