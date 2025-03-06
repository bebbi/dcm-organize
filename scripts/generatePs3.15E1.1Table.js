import { writeFile, mkdir } from 'fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const srcDir = join(__dirname, '..', 'src')
const configDir = join(srcDir, 'config', 'dicom')
const assetsDir = join(__dirname, '..', 'assets', 'standard')

/**
 * Fetches a DICOM standard file from the innolitics/dicom-standard repository.
 *
 * @param {string} filename - The name of the file to fetch.
 * @returns {Promise<object>} A promise resolving to the JSON contents of the file.
 */
async function fetchDicomStandard(filename) {
  const url = `https://raw.githubusercontent.com/innolitics/dicom-standard/master/standard/${filename}`
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to fetch ${filename}: ${response.statusText}`)
  }
  return response.json()
}

/**
 * Generates the DICOM elements profile.
 */
async function main() {
  try {
    // Ensure the configuration directory exists
    await mkdir(configDir, { recursive: true })

    // Generate standard header for all files
    const generatedComment = `// File autogenerated on ${new Date().toISOString()}\n\n`

    // Fetch all DICOM elements
    let allElements = await fetchDicomStandard('attributes.json')

    // Fix name mistake in PS3.6
    allElements = allElements.map((el) => {
      if (el.name.includes('GenerationMode')) {
        return {
          ...el,
          name: el.name.replace('GenerationMode', 'Generation Mode'),
        }
      }
      return el
    })

    // Some tags that *could* occur in DICOM headers even though they
    // should be file meta header.
    // Workaround: We add Affected SOP Instance UID because we need it
    // for the name mapping. It occurs in PS3.15E. It is PS3.07, not PS3.06
    allElements.push(
      ...[
        {
          tag: '(0000,1000)',
          name: 'Affected SOP Instance UID',
          keyword: 'AffectedSOPInstanceUID',
          valueRepresentation: 'UI',
          valueMultiplicity: '1',
          retired: 'N',
          id: '00001000',
        },
        {
          tag: '(0000,1001)',
          name: 'Requested SOP Instance UID',
          keyword: 'RequestedSOPInstanceUID',
          valueRepresentation: 'UI',
          valueMultiplicity: '1',
          retired: 'N',
          id: '00001001',
        },
      ],
    )

    // Fetch the DICOM elements to anonymize
    let ps315EElements = await fetchDicomStandard(
      'confidentiality_profile_attributes.json',
    )

    // Standardize on keywords as names.
    ps315EElements = ps315EElements
      .filter((el) => el.name !== 'Private Attributes')
      .map(({ name, rtnDevIdOpt, ...rest }) => {
        // Fix an error in PS3.15E1.1 where some "of" are written "Of"
        name = name.replaceAll(' Of ', ' of ').replace(/\n.*/s, '')

        const elDef = allElements.find((el) => el.name === name)

        const updatedEl = { name, keyword: elDef.keyword, ...rest }

        // Fix that BeamHoldTransitionDateTime erroneously features rtnDevIdOpt
        return name === 'Beam Hold Transition DateTime'
          ? updatedEl
          : { ...updatedEl, rtnDevIdOpt }
      })

    const protectSet = new Set(ps315EElements.map((element) => element.tag))

    // Save the elements to anonymize to a JSON file
    await writeFile(
      join(configDir, 'ps315EElements.ts'),
      `import type { TPs315EElement } from '../../types'

export const ps315EElements: TPs315EElement[] = ` +
        JSON.stringify(ps315EElements, null, 2),
    )

    const preserveSet = new Set()

    // Create a set of elements to preserve (using keywords)
    for (const element of allElements) {
      if (!protectSet.has(element.tag) && element.keyword) {
        preserveSet.add(element.keyword)
      }
    }

    // Create the JavaScript content for the element names to always keep
    const tsContent = `// Auto-generated file containing DICOM elements to always keep
// Generated on: ${new Date().toISOString()}

export const elementNamesToAlwaysKeep = [
    ${[...preserveSet].map((e) => `'${e}'`).join(',\n    ')}
];
`

    // Write the JavaScript file
    await writeFile(join(configDir, 'elementNamesToAlwaysKeep.ts'), tsContent)

    // Save the processed allElements to a TypeScript file
    await writeFile(
      join(assetsDir, 'allElements.ts'),
      generatedComment +
        `type dicomElement = {
  tag: string
  name: string
  keyword: string
  valueRepresentation: string
  valueMultiplicity: string
  retired: string
  id: string
}

export const allElements: dicomElement[] = ${JSON.stringify(allElements, null, 2)}`,
    )

    console.log('Successfully generated:')
    console.log('- elementNamesToAlwaysKeep.ts')
    console.log('- ps315EElements.ts')
    console.log('- allElements.ts')
  } catch (error) {
    console.error('Error:', error.message)
    process.exit(1)
  }
}

main()
