const dummyVRs: Record<string, any> = {
  AE: 'TEST_AE_TITLE', // Application Entity
  AS: '050Y', // Age String
  AT: '(0008,0005)', // Attribute Tag
  CS: 'Test String', // Code String
  DA: '20240101', // Date
  DS: '123.45', // Decimal String
  DT: '20240101235959.999999', // Date Time
  FL: '123.45', // Floating Point Single
  FD: '123.45', // Floating Point Double
  IS: '123', // Integer String
  LO: 'Test Long String', // Long String
  LT: 'Test Long Text', // Long Text
  OB: '00', // Other Byte
  OD: '00', // Other Double
  OF: '00', // Other Float
  OW: '00', // Other Word
  PN: 'John^Doe', // Person Name
  SH: 'Test Short String', // Short String
  SL: '10', // Signed Long
  SQ: [
    {
      '00081150': {
        vr: 'UI',
        Value: ['1.2.840.10008.1.2.4.123'],
      },
      '00081155': {
        vr: 'UI',
        Value: ['1.2.345.10008.1.2.4.111'],
      },
    },
  ], // Sequence of Items
  SS: '123', // Signed Short
  ST: 'Test String', // Short Text
  TM: '235959.999999', // Time
  UI: '1.2.123.10008.1.2.4.123', // Unique Identifier
  UL: '123', // Unlimited Length
  UN: 'Unknown', // Unknown
  US: '123', // Unsigned Short
  UT: 'Test Unlimited Text', // Unlimited Text

  // Additional VR types
  OL: '00', // Other Long
  OV: '00', // Other 64-bit Very Long
  SV: '123', // Signed Value
  UC: 'Unlimited Characters Test', // Unlimited Characters
  UR: 'https://invalid.invalid', // Universal Resource
  UV: '00', // Unsigned 64-bit Very Long
}

export default dummyVRs
