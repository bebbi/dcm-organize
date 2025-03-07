const dummyTestValues: Record<string, any> = {
  AE: 'TEST_AE_TITLE', // Application Entity
  AS: '018Y', // Age String
  AT: '(0010,0010)', // Attribute Tag
  CS: 'TEST_CODE', // Code String
  DA: '20250101', // Date
  DS: '123.45', // Decimal String
  DT: '20250101123000.000000', // Date Time
  FL: '123.45', // Floating Point Single
  FD: '123.456789', // Floating Point Double
  IS: '123', // Integer String
  LO: 'Test Long String', // Long String
  LT: 'Test Long Text', // Long Text
  OB: '01', // Other Byte
  OD: '123.456', // Other Double
  OF: '123.45', // Other Float
  OW: '01', // Other Word
  PN: 'Doe^John', // Person Name
  SH: 'Test Short String', // Short String
  SL: '-123', // Signed Long
  SQ: [
    {
      '3010001e': {
        vr: 'LO',
        Value: ['Test Long String'],
      },
      '00400294': {
        vr: 'DS',
        Value: ['123.45'],
      },
    },
    {
      '00510014': {
        vr: 'ST',
        Value: ['Test Private Tag'],
      },
      '00400280': {
        vr: 'ST',
        Value: ['Test Short Text'],
      },
    },
  ], // Sequence of Items
  SS: '-123', // Signed Short
  ST: 'Test Short Text', // Short Text
  TM: '123000.000000', // Time
  UI: '1.2.941.12368.1.2.4.09', // Unique Identifier
  UL: '123', // Unlimited Length
  UN: 'Unknown', // Unknown
  US: '123', // Unsigned Short
  UT: 'Test Unlimited Text', // Unlimited Text
  OL: '00000000', // Other Long
  OV: '123', // Other 64-bit Very Long
  SV: '123', // Signed Value
  UC: 'Unlimited Characters Test', // Unlimited Characters
  UR: 'https://sample.com', // Universal Resource
  UV: '123', // Unsigned 64-bit Very Long
}

export default dummyTestValues
