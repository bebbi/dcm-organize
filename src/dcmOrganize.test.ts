import dcmOrganize from './dcmOrganize'
import { sample } from './fixtures/dicom/sample'
import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'
import type { TMappingOptions } from './types'

describe('dcmOrganize basic functionality', () => {
  const TEST_OUTPUT_DIR = join(__dirname, 'fixtures', 'test-output')

  // Create output directory if it doesn't exist
  beforeAll(() => {
    try {
      mkdirSync(TEST_OUTPUT_DIR, { recursive: true })
    } catch (err) {
      console.error('Could not create test output directory:', err)
    }
  })

  const defaultOptions: TMappingOptions = {
    columnMappings: {
      headers: [],
      rowValues: {},
      rowIndexByFieldValue: {},
    },

    mappingScript: `
      modifications = () => ({
        dicomHeader: {},
        outputFilePathComponents: ['output', 'test.dcm']
      })
    `,
    ps315Options: {
      cleanDescriptorsOption: true,
      cleanDescriptorsExceptions: [
        'SeriesDescription',
        'ClinicalTrialSeriesDescription',
      ],
      retainLongitudinalTemporalInformationOptions: 'Full',
      retainPatientCharacteristicsOption: [
        'PatientsWeight',
        'PatientsSize',
        'PatientsAge',
        'SelectorASValue',
      ],
      retainDeviceIdentityOption: true,
      retainUIDsOption: 'Off',
      retainSafePrivateOption: true,
      retainInstitutionIdentityOption: true,
    },
  } as const

  it('processes DICOM data without errors', () => {
    const result = dcmOrganize('test.dcm', sample, defaultOptions)

    // Save the output for inspection
    const outputPath = join(TEST_OUTPUT_DIR, 'dcmOrganize-output.json')
    writeFileSync(outputPath, JSON.stringify(result, null, 2))

    expect(result.mapResults.errors).toHaveLength(0)
    expect(result.mapResults.outputFilePath).toBe('output/test.dcm')
    console.log(`Test output saved to: ${outputPath}`)
  })

  // Add more test cases here for different configurations
  // For example:
  // - Test with different ps315Options
  // - Test with custom mapping scripts
  // - Test error cases
  // - Test specific DICOM tag modifications
})
