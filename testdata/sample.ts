import type { TDicomData } from 'dcmjs'
export const sample: TDicomData = {
  meta: {
    '00020000': {
      vr: 'UL',
      Value: ['123'],
    },
    '00020001': {
      vr: 'OB',
      Value: ['01'],
    },
    '00020002': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00020003': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00020010': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00020012': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00020013': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00020016': {
      vr: 'AE',
      Value: ['TEST_AE_TITLE'],
    },
    '00020017': {
      vr: 'AE',
      Value: ['TEST_AE_TITLE'],
    },
    '00020018': {
      vr: 'AE',
      Value: ['TEST_AE_TITLE'],
    },
    '00020026': {
      vr: 'UR',
      Value: ['https://sample.com'],
    },
    '00020027': {
      vr: 'UR',
      Value: ['https://sample.com'],
    },
    '00020028': {
      vr: 'UR',
      Value: ['https://sample.com'],
    },
    '00020031': {
      vr: 'OB',
      Value: ['01'],
    },
    '00020032': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00020033': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00020035': {
      vr: 'OB',
      Value: ['01'],
    },
    '00020036': {
      vr: 'OB',
      Value: ['01'],
    },
    '00020037': {
      vr: 'UL',
      Value: ['123'],
    },
    '00020038': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00020100': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00020102': {
      vr: 'OB',
      Value: ['01'],
    },
  },
  dict: {
    '20000010': {
      vr: 'IS',
      Value: ['123'],
    },
    '20000020': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20000030': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20000040': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20000050': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '20000060': {
      vr: 'IS',
      Value: ['123'],
    },
    '20000061': {
      vr: 'IS',
      Value: ['123'],
    },
    '20000062': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20000063': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20000065': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20000067': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20000069': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20000500': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '20000510': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '20100010': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '20100030': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20100040': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20100050': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20100052': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20100054': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20100060': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20100080': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20100100': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20100110': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20100120': {
      vr: 'US',
      Value: ['123'],
    },
    '20100130': {
      vr: 'US',
      Value: ['123'],
    },
    '20100140': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20100150': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '20100152': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '20100154': {
      vr: 'IS',
      Value: ['123'],
    },
    '20100160': {
      vr: 'US',
      Value: ['123'],
    },
    '20100376': {
      vr: 'DS',
      Value: ['123.45', '123.45'],
    },
    '20100500': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '20100510': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '20100520': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '20200010': {
      vr: 'US',
      Value: ['123'],
    },
    '20200020': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20200030': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '20200040': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20200050': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20200110': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '20200111': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '20200130': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '20200140': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '20300010': {
      vr: 'US',
      Value: ['123'],
    },
    '20300020': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '20400010': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '20400011': {
      vr: 'US',
      Value: ['123'],
    },
    '20400020': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '20400060': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20400070': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20400072': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20400074': {
      vr: 'US',
      Value: ['123'],
    },
    '20400080': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20400082': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20400090': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20400100': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20400500': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '20500010': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '20500020': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '20500500': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '21000010': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '21000020': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '21000030': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '21000040': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '21000050': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '21000070': {
      vr: 'AE',
      Value: ['TEST_AE_TITLE'],
    },
    '21000140': {
      vr: 'AE',
      Value: ['TEST_AE_TITLE'],
    },
    '21000160': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '21000170': {
      vr: 'IS',
      Value: ['123'],
    },
    '21000500': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '21100010': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '21100020': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '21100030': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '21100099': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '21200010': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '21200050': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '21200070': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '21300010': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '21300015': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '21300030': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '21300040': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '21300050': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '21300060': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '21300080': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '22000001': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '22000002': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '22000003': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '22000004': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '22000005': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '22000006': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '22000007': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '22000008': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '22000009': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '22000020': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30020002': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '30020003': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '30020004': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '30020010': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45', '123.45', '123.45', '123.45'],
    },
    '30020011': {
      vr: 'DS',
      Value: ['123.45', '123.45'],
    },
    '30020012': {
      vr: 'DS',
      Value: ['123.45', '123.45'],
    },
    '30020020': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '30020022': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '30020024': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '30020026': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '30020028': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '30020029': {
      vr: 'IS',
      Value: ['123'],
    },
    '30020030': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30020032': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '30020034': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45', '123.45'],
    },
    '30020040': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30020041': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30020042': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '30020050': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30020051': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30020052': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '30020100': {
      vr: 'IS',
      Value: ['123'],
    },
    '30020101': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30020102': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30020103': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30020104': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30020105': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30020106': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '30020107': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '30020108': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30020109': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30020110': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30020111': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30020112': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30020113': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30020114': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30020115': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30020116': {
      vr: 'US',
      Value: ['123'],
    },
    '30020117': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30020118': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30020119': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30020120': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '30020121': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '30020122': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30020123': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '30020124': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30020125': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30020126': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30020127': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30020128': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30020129': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30020130': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30020131': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30020132': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30020133': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30020134': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '30020135': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30040001': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30040002': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30040004': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30040005': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30040006': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '30040008': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45'],
    },
    '30040010': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30040012': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '30040014': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30040040': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45'],
    },
    '30040042': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '30040050': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30040052': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '30040054': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30040056': {
      vr: 'IS',
      Value: ['123'],
    },
    '30040058': {
      vr: 'DS',
      Value: ['123.45', '123.45'],
    },
    '30040060': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30040062': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30040070': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '30040072': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '30040074': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '30060002': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '30060004': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '30060006': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '30060008': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '30060009': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '30060010': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30060012': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30060014': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30060016': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30060018': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30060020': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30060022': {
      vr: 'IS',
      Value: ['123'],
    },
    '30060024': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '30060026': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '30060028': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '30060030': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30060033': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30060036': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30060037': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30060038': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '30060039': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30060040': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30060042': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30060044': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '30060045': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45'],
    },
    '30060046': {
      vr: 'IS',
      Value: ['123'],
    },
    '30060048': {
      vr: 'IS',
      Value: ['123'],
    },
    '30060049': {
      vr: 'IS',
      Value: ['123'],
    },
    '30060050': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45'],
    },
    '30060080': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30060082': {
      vr: 'IS',
      Value: ['123'],
    },
    '30060084': {
      vr: 'IS',
      Value: ['123'],
    },
    '30060085': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '30060086': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30060088': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '30080010': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30080012': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '30080014': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30080016': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '30080020': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30080021': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30080022': {
      vr: 'IS',
      Value: ['123'],
    },
    '30080024': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '30080025': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '30080030': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30080032': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '30080033': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '30080036': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '30080037': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '30080040': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30080041': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30080042': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '30080044': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '30080045': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '30080046': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '30080047': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '30080048': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '30080050': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30080052': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '30080054': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '30080056': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '30080060': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30080061': {
      vr: 'AT',
      Value: ['(0010,0010)'],
    },
    '30080062': {
      vr: 'AT',
      Value: ['(0010,0010)'],
    },
    '30080063': {
      vr: 'IS',
      Value: ['123'],
    },
    '30080064': {
      vr: 'IS',
      Value: ['123'],
    },
    '30080065': {
      vr: 'AT',
      Value: ['(0010,0010)'],
    },
    '30080066': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '30080067': {
      vr: 'US',
      Value: ['123'],
    },
    '30080068': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30080070': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30080072': {
      vr: 'IS',
      Value: ['123'],
    },
    '30080074': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '30080076': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '30080078': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '30080080': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30080082': {
      vr: 'IS',
      Value: ['123'],
    },
    '30080090': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30080092': {
      vr: 'IS',
      Value: ['123'],
    },
    '30080100': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30080105': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '30080110': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30080116': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30080120': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30080122': {
      vr: 'IS',
      Value: ['123'],
    },
    '30080130': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30080132': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '30080134': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '30080136': {
      vr: 'IS',
      Value: ['123'],
    },
    '30080138': {
      vr: 'IS',
      Value: ['123'],
    },
    '30080140': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30080142': {
      vr: 'IS',
      Value: ['123'],
    },
    '30080150': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30080152': {
      vr: 'IS',
      Value: ['123'],
    },
    '30080160': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30080162': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '30080164': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '30080166': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '30080168': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '30080171': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30080172': {
      vr: 'US',
      Value: ['123'],
    },
    '30080173': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30080200': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30080202': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '30080220': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30080223': {
      vr: 'IS',
      Value: ['123'],
    },
    '30080224': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30080230': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30080240': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30080250': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '30080251': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '30100001': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100002': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30100003': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100004': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100005': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '30100006': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '30100007': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100008': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100009': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100010': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30100011': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100012': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100013': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '30100014': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100015': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '30100016': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100017': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '30100018': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100019': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100020': {
      vr: 'US',
      Value: ['123'],
    },
    '30100021': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100022': {
      vr: 'US',
      Value: ['123'],
    },
    '30100023': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100024': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100025': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100026': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100027': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100028': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100029': {
      vr: 'US',
      Value: ['123'],
    },
    '30100030': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100031': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '30100032': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100033': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '30100034': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '30100035': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '30100036': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '30100037': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '30100038': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '30100039': {
      vr: 'US',
      Value: ['123'],
    },
    '30100040': {
      vr: 'US',
      Value: ['123'],
    },
    '30100041': {
      vr: 'US',
      Value: ['123'],
    },
    '30100042': {
      vr: 'US',
      Value: ['123'],
    },
    '30100043': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '30100044': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100045': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30100046': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30100047': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30100048': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30100049': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100050': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '30100051': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '30100052': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '30100053': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '30100054': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '30100055': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100056': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '30100057': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100058': {
      vr: 'US',
      Value: ['123'],
    },
    '30100059': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30100060': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100061': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '30100062': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100063': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30100064': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100065': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100066': {
      vr: 'US',
      Value: ['123'],
    },
    '30100067': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100068': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30100069': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100070': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100071': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100073': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30100074': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '30100075': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30100076': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100077': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '30100078': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100079': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100080': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100081': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100082': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100083': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30100084': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '30100085': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '30100086': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '30100087': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100088': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100089': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100090': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '30100091': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100092': {
      vr: 'UL',
      Value: ['123'],
    },
    '30100093': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '30100094': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '30100095': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '30100096': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '30100097': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100098': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '30100099': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '40000010': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '40004000': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '40080040': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '40080042': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '40080050': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '40080100': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '40080101': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '40080102': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '40080103': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '40080108': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '40080109': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '40080111': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '40080112': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '40080113': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '40080114': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '40080115': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '40080117': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '40080118': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '40080119': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '40080200': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '40080202': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '40080210': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '40080212': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '40080300': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '40084000': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '40100001': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '40100002': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '40100004': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '40101001': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '40101004': {
      vr: 'FL',
      Value: ['123.45', '123.45', '123.45'],
    },
    '40101005': {
      vr: 'FL',
      Value: ['123.45', '123.45', '123.45'],
    },
    '40101006': {
      vr: 'OB',
      Value: ['01'],
    },
    '40101007': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '40101008': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '40101009': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '40101010': {
      vr: 'US',
      Value: ['123'],
    },
    '40101011': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '40101012': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '40101013': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '40101014': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '40101015': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '40101016': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '40101017': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '40101018': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '40101019': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '40101020': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '40101021': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '40101023': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '40101024': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '40101025': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '40101026': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '40101027': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '40101028': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '40101029': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '40101031': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '40101033': {
      vr: 'US',
      Value: ['123'],
    },
    '40101034': {
      vr: 'US',
      Value: ['123'],
    },
    '40101037': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '40101038': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '40101039': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '40101041': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '40101042': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '40101043': {
      vr: 'FL',
      Value: ['123.45', '123.45', '123.45'],
    },
    '40101044': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '40101045': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '40101046': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '40101047': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '40101048': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '40101051': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '40101052': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '40101053': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '40101054': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '40101055': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '40101056': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '40101058': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '40101059': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '40101060': {
      vr: 'FL',
      Value: ['123.45', '123.45', '123.45'],
    },
    '40101061': {
      vr: 'FL',
      Value: ['123.45', '123.45', '123.45'],
    },
    '40101062': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '40101064': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '40101067': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '40101068': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '40101069': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '40101070': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '40101071': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '40101072': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '40101073': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '40101075': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '40101076': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '40101077': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '40101078': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '40101079': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '52009229': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '52009230': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '54000100': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '54000110': {
      vr: 'OB',
      Value: ['01'],
    },
    '54000112': {
      vr: 'OB',
      Value: ['01'],
    },
    '54001004': {
      vr: 'US',
      Value: ['123'],
    },
    '54001006': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '54001010': {
      vr: 'OB',
      Value: ['01'],
    },
    '56000010': {
      vr: 'OF',
      Value: ['123.45'],
    },
    '56000020': {
      vr: 'OF',
      Value: ['123.45'],
    },
    '00051100': {
      vr: 'SH',
      Value: ['Test Private Tag'],
    },
    '00080001': {
      vr: 'UL',
      Value: ['123'],
    },
    '00080005': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00080006': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00080008': {
      vr: 'CS',
      Value: ['TEST_CODE', 'TEST_CODE'],
    },
    '00080010': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00080012': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00080013': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00080014': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00080015': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00080016': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00080017': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00080018': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00080019': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '0008001a': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '0008001b': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '0008001c': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00080020': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00080021': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00080022': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00080023': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00080024': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00080025': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '0008002a': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00080030': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00080031': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00080032': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00080033': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00080034': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00080035': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00080040': {
      vr: 'US',
      Value: ['123'],
    },
    '00080041': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00080042': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00080050': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00080051': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00080052': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00080053': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00080054': {
      vr: 'AE',
      Value: ['TEST_AE_TITLE'],
    },
    '00080055': {
      vr: 'AE',
      Value: ['TEST_AE_TITLE'],
    },
    '00080056': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00080058': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00080060': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00080061': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00080062': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00080063': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00080064': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00080068': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00080070': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00080080': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00080081': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00080082': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00080090': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '00080092': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00080094': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00080096': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0008009c': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '0008009d': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00080100': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00080101': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00080102': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00080103': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00080104': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00080105': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00080106': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00080107': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00080108': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00080109': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0008010a': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0008010b': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0008010c': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '0008010d': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '0008010e': {
      vr: 'UR',
      Value: ['https://sample.com'],
    },
    '0008010f': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00080110': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00080112': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00080114': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00080115': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00080116': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00080117': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00080118': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00080119': {
      vr: 'UC',
      Value: ['Unlimited Characters Test'],
    },
    '00080120': {
      vr: 'UR',
      Value: ['https://sample.com'],
    },
    '00080121': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00080122': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00080123': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00080124': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00080201': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00080220': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00080221': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00080222': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00080300': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00080301': {
      vr: 'US',
      Value: ['123'],
    },
    '00080302': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00080303': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00080304': {
      vr: 'US',
      Value: ['123'],
    },
    '00080306': {
      vr: 'US',
      Value: ['123'],
    },
    '00080305': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00080307': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00080308': {
      vr: 'US',
      Value: ['123'],
    },
    '00080309': {
      vr: 'UL',
      Value: ['123'],
    },
    '0008030a': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0008030b': {
      vr: 'UL',
      Value: ['123'],
    },
    '0008030c': {
      vr: 'UC',
      Value: ['Unlimited Characters Test'],
    },
    '0008030d': {
      vr: 'UC',
      Value: ['Unlimited Characters Test'],
    },
    '0008030e': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '0008030f': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00080310': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00080400': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00080401': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00080402': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00080403': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00080404': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00080405': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00080406': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00080407': {
      vr: 'UR',
      Value: ['https://sample.com'],
    },
    '00080408': {
      vr: 'UR',
      Value: ['https://sample.com'],
    },
    '00080409': {
      vr: 'UR',
      Value: ['https://sample.com'],
    },
    '0008040a': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0008040b': {
      vr: 'UR',
      Value: ['https://sample.com'],
    },
    '0008040c': {
      vr: 'UV',
      Value: ['123'],
    },
    '0008040d': {
      vr: 'UV',
      Value: ['123'],
    },
    '0008040e': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '0008040f': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00080410': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00080411': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00080412': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00080413': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00080414': {
      vr: 'US',
      Value: ['123'],
    },
    '00080415': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00080416': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00080417': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00080418': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00080419': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0008041a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0008041b': {
      vr: 'OB',
      Value: ['01'],
    },
    '0008041c': {
      vr: 'OB',
      Value: ['01'],
    },
    '0008041d': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0008041e': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0008041f': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00080420': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00080421': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00080422': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00080423': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00080424': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00080425': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00080426': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00080427': {
      vr: 'UL',
      Value: ['123'],
    },
    '00080428': {
      vr: 'UV',
      Value: ['123'],
    },
    '00080429': {
      vr: 'UV',
      Value: ['123'],
    },
    '00081000': {
      vr: 'AE',
      Value: ['TEST_AE_TITLE'],
    },
    '00081010': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00081030': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00081032': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0008103e': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '0008103f': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00081040': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00081041': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00081048': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '00081049': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00081050': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '00081052': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00081060': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '00081062': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00081070': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '00081072': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00081080': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00081084': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00081088': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00081090': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00081100': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00081110': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00081111': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00081112': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00081115': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00081120': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00081125': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00081130': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00081134': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0008113a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00081140': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00081145': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0008114a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0008114b': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00081150': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00081155': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00081156': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0008115a': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00081160': {
      vr: 'IS',
      Value: ['123'],
    },
    '00081161': {
      vr: 'UL',
      Value: ['123'],
    },
    '00081162': {
      vr: 'UL',
      Value: ['123', '123', '123'],
    },
    '00081163': {
      vr: 'FD',
      Value: ['123.456789', '123.456789'],
    },
    '00081164': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00081167': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00081190': {
      vr: 'UR',
      Value: ['https://sample.com'],
    },
    '00081195': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00081196': {
      vr: 'US',
      Value: ['123'],
    },
    '00081197': {
      vr: 'US',
      Value: ['123'],
    },
    '00081198': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00081199': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0008119a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0008119b': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00081200': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00081250': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00082110': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00082111': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00082112': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00082120': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00082122': {
      vr: 'IS',
      Value: ['123'],
    },
    '00082124': {
      vr: 'IS',
      Value: ['123'],
    },
    '00082127': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00082128': {
      vr: 'IS',
      Value: ['123'],
    },
    '00082129': {
      vr: 'IS',
      Value: ['123'],
    },
    '0008212a': {
      vr: 'IS',
      Value: ['123'],
    },
    '00082130': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00082132': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00082133': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00082134': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00082135': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00082142': {
      vr: 'IS',
      Value: ['123'],
    },
    '00082143': {
      vr: 'IS',
      Value: ['123'],
    },
    '00082144': {
      vr: 'IS',
      Value: ['123'],
    },
    '00082200': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00082204': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00082208': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00082218': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00082220': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00082228': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00082229': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00082230': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00082240': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00082242': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00082244': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00082246': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00082251': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00082253': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00082255': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00082256': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00082257': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00082258': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00082259': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0008225a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0008225c': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00083001': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00083002': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00083010': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00083011': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00083012': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00084000': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00089007': {
      vr: 'CS',
      Value: ['TEST_CODE', 'TEST_CODE', 'TEST_CODE', 'TEST_CODE'],
    },
    '00089092': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00089121': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00089123': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00089124': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00089154': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00089205': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00089206': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00089207': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00089208': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00089209': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00089215': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00089237': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00089410': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00089458': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00089459': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00089460': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00100010': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '00100020': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00100021': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00100022': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00100024': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00100026': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00100027': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00100028': {
      vr: 'US',
      Value: ['123', '123', '123'],
    },
    '00100030': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00100032': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00100033': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00100034': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00100035': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00100040': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00100050': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00100101': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00100102': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00100200': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00100201': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00100212': {
      vr: 'UC',
      Value: ['Unlimited Characters Test'],
    },
    '00100213': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00100214': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00100215': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00100216': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00100217': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00100218': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00100219': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00100221': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00100222': {
      vr: 'UC',
      Value: ['Unlimited Characters Test'],
    },
    '00100223': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00100229': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00101000': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00101001': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '00101002': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00101005': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '00101010': {
      vr: 'AS',
      Value: ['018Y'],
    },
    '00101020': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00101021': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00101022': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00101023': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00101024': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00101030': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00101040': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00101050': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00101060': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '00101080': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00101081': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00101090': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00101100': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00102000': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00102110': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00102150': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00102152': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00102154': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00102155': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00102160': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00102180': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '001021a0': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '001021b0': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '001021c0': {
      vr: 'US',
      Value: ['123'],
    },
    '001021d0': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '001021f0': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00102201': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00102202': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00102203': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00102210': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00102292': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00102293': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00102294': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00102295': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00102296': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00102297': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '00102298': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00102299': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00104000': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00109431': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00120010': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00120020': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00120021': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00120022': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00120023': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00120030': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00120031': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00120032': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00120040': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00120041': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00120042': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00120043': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00120050': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00120051': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00120052': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00120053': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00120054': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00120055': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00120060': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00120062': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00120063': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00120064': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00120071': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00120072': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00120073': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00120081': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00120082': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00120083': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00120084': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00120085': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00120086': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00120087': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00140023': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00140024': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00140025': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00140028': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00140030': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00140032': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00140034': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00140042': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00140044': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00140045': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00140046': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00140050': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00140052': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00140054': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00140056': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00140100': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00140101': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00140102': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00140103': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00140104': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '00140105': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00140106': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00140107': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00140108': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00140200': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00140201': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00140202': {
      vr: 'AT',
      Value: ['(0010,0010)'],
    },
    '00140203': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00140204': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00140205': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00140206': {
      vr: 'IS',
      Value: ['123'],
    },
    '00140207': {
      vr: 'IS',
      Value: ['123'],
    },
    '00141010': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00141020': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00141040': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00142002': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00142004': {
      vr: 'IS',
      Value: ['123'],
    },
    '00142006': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '00142008': {
      vr: 'IS',
      Value: ['123'],
    },
    '00142012': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00142014': {
      vr: 'IS',
      Value: ['123'],
    },
    '00142016': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00142018': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '0014201a': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0014201c': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0014201e': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00142030': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00142032': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00142202': {
      vr: 'IS',
      Value: ['123'],
    },
    '00142204': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00142206': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00142208': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0014220a': {
      vr: 'IS',
      Value: ['123'],
    },
    '0014220c': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0014220e': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00142210': {
      vr: 'OB',
      Value: ['01'],
    },
    '00142220': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00142222': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00142224': {
      vr: 'IS',
      Value: ['123'],
    },
    '00142226': {
      vr: 'IS',
      Value: ['123'],
    },
    '00142228': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0014222a': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0014222c': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00143011': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00143012': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00143020': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00143022': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00143024': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00143026': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00143028': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00143040': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00143050': {
      vr: 'OB',
      Value: ['01'],
    },
    '00143060': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00143070': {
      vr: 'OB',
      Value: ['01'],
    },
    '00143071': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00143072': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00143073': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00143074': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00143075': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00143076': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00143077': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00143080': {
      vr: 'OB',
      Value: ['01'],
    },
    '00143099': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00143100': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00143101': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00144002': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00144004': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00144006': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00144008': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0014400a': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0014400c': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '0014400e': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0014400f': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00144010': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00144011': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00144012': {
      vr: 'US',
      Value: ['123'],
    },
    '00144013': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00144014': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00144015': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00144016': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00144017': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00144018': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00144019': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0014401a': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0014401b': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0014401c': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0014401d': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00144020': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00144022': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00144024': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00144026': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00144028': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00144030': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00144031': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00144032': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00144033': {
      vr: 'IS',
      Value: ['123'],
    },
    '00144034': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00144035': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00144036': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00144038': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0014403a': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0014403c': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00144040': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00144050': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00144051': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00144052': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00144054': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00144056': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00144057': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00144058': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00144059': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0014405a': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0014405c': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00144060': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00144062': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00144064': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00144070': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00144072': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00144074': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00144076': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00144078': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '0014407a': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '0014407c': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '0014407e': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00144080': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00144081': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00144082': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00144083': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00144084': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00144085': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00144086': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00144087': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00144088': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00144089': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0014408b': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0014408c': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0014408d': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0014408e': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00144091': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00144092': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0014409a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0014409b': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '0014409c': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0014409d': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0014409f': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '001440a0': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '001440a1': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '001440a2': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00145002': {
      vr: 'IS',
      Value: ['123'],
    },
    '00145004': {
      vr: 'IS',
      Value: ['123'],
    },
    '00145100': {
      vr: 'US',
      Value: ['123'],
    },
    '00145101': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00145102': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00145103': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00145104': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00145105': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00145106': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00145107': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00145108': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00145109': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0014510a': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0014510b': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '0014510c': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0014510d': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0014510e': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0014510f': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00145110': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00145111': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00145112': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00145113': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00145114': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00145115': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00145116': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00145117': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00145118': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00145119': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0014511a': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0014511b': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0014511c': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0014511d': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0014511e': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0014511f': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00160001': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00160002': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45'],
    },
    '00160003': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00160004': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00160005': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00160006': {
      vr: 'IS',
      Value: ['123'],
    },
    '00160007': {
      vr: 'IS',
      Value: ['123'],
    },
    '00160008': {
      vr: 'UC',
      Value: ['Unlimited Characters Test'],
    },
    '00160009': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0016000a': {
      vr: 'IS',
      Value: ['123'],
    },
    '0016000b': {
      vr: 'IS',
      Value: ['123'],
    },
    '0016000c': {
      vr: 'UC',
      Value: ['Unlimited Characters Test'],
    },
    '0016000d': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0016000e': {
      vr: 'IS',
      Value: ['123'],
    },
    '0016000f': {
      vr: 'IS',
      Value: ['123'],
    },
    '00160010': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00160011': {
      vr: 'US',
      Value: ['123'],
    },
    '00160012': {
      vr: 'US',
      Value: ['123'],
    },
    '00160013': {
      vr: 'US',
      Value: ['123'],
    },
    '00160014': {
      vr: 'US',
      Value: ['123'],
    },
    '00160015': {
      vr: 'US',
      Value: ['123'],
    },
    '00160016': {
      vr: 'US',
      Value: ['123'],
    },
    '00160017': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00160018': {
      vr: 'IS',
      Value: ['123'],
    },
    '00160019': {
      vr: 'IS',
      Value: ['123'],
    },
    '0016001a': {
      vr: 'US',
      Value: ['123'],
    },
    '0016001b': {
      vr: 'IS',
      Value: ['123'],
    },
    '0016001c': {
      vr: 'IS',
      Value: ['123'],
    },
    '0016001d': {
      vr: 'IS',
      Value: ['123'],
    },
    '0016001e': {
      vr: 'IS',
      Value: ['123'],
    },
    '0016001f': {
      vr: 'IS',
      Value: ['123'],
    },
    '00160020': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00160021': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00160022': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00160023': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00160024': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00160025': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00160026': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00160027': {
      vr: 'US',
      Value: ['123'],
    },
    '00160028': {
      vr: 'US',
      Value: ['123'],
    },
    '00160029': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0016002a': {
      vr: 'IS',
      Value: ['123', '123'],
    },
    '0016002b': {
      vr: 'OB',
      Value: ['01'],
    },
    '00160030': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00160031': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00160032': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00160033': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00160034': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00160035': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00160036': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00160037': {
      vr: 'IS',
      Value: ['123', '123'],
    },
    '00160038': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00160039': {
      vr: 'US',
      Value: ['123'],
    },
    '0016003a': {
      vr: 'US',
      Value: ['123'],
    },
    '0016003b': {
      vr: 'US',
      Value: ['123'],
    },
    '00160041': {
      vr: 'US',
      Value: ['123'],
    },
    '00160042': {
      vr: 'US',
      Value: ['123'],
    },
    '00160043': {
      vr: 'US',
      Value: ['123'],
    },
    '00160044': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00160045': {
      vr: 'IS',
      Value: ['123'],
    },
    '00160046': {
      vr: 'US',
      Value: ['123'],
    },
    '00160047': {
      vr: 'US',
      Value: ['123'],
    },
    '00160048': {
      vr: 'US',
      Value: ['123'],
    },
    '00160049': {
      vr: 'US',
      Value: ['123'],
    },
    '0016004a': {
      vr: 'US',
      Value: ['123'],
    },
    '0016004b': {
      vr: 'OB',
      Value: ['01'],
    },
    '0016004c': {
      vr: 'US',
      Value: ['123'],
    },
    '0016004d': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '0016004e': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45', '123.45'],
    },
    '0016004f': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00160050': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00160051': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00160061': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00160062': {
      vr: 'OB',
      Value: ['01'],
    },
    '00160070': {
      vr: 'OB',
      Value: ['01'],
    },
    '00160071': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00160072': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45'],
    },
    '00160073': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00160074': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45'],
    },
    '00160075': {
      vr: 'US',
      Value: ['123'],
    },
    '00160076': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00160077': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00160078': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00160079': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0016007a': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0016007b': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0016007c': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0016007d': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0016007e': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0016007f': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00160080': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00160081': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00160082': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00160083': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00160084': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45'],
    },
    '00160085': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00160086': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45'],
    },
    '00160087': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00160088': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00160089': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0016008a': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0016008b': {
      vr: 'OB',
      Value: ['01'],
    },
    '0016008c': {
      vr: 'OB',
      Value: ['01'],
    },
    '0016008d': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '0016008e': {
      vr: 'IS',
      Value: ['123'],
    },
    '00161001': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00161002': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00161003': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00161004': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00161005': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00180010': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00180012': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00180013': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00180014': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00180015': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00180020': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00180021': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00180022': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00180023': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00180024': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00180025': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00180026': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00180027': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00180028': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00180029': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0018002a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00180030': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00180031': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00180032': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00180033': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00180034': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00180035': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00180036': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00180037': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00180038': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00180039': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0018003a': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00180040': {
      vr: 'IS',
      Value: ['123'],
    },
    '00180042': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00180050': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00180060': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00180061': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00180070': {
      vr: 'IS',
      Value: ['123'],
    },
    '00180071': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00180072': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00180073': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00180074': {
      vr: 'IS',
      Value: ['123'],
    },
    '00180075': {
      vr: 'IS',
      Value: ['123'],
    },
    '00180080': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00180081': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00180082': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00180083': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00180084': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00180085': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00180086': {
      vr: 'IS',
      Value: ['123'],
    },
    '00180087': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00180088': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00180089': {
      vr: 'IS',
      Value: ['123'],
    },
    '00180090': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00180091': {
      vr: 'IS',
      Value: ['123'],
    },
    '00180093': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00180094': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00180095': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181000': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00181002': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00181003': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00181004': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00181005': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00181006': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00181007': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00181008': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00181009': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '0018100a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0018100b': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00181010': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00181011': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00181012': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00181014': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00181016': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00181017': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00181018': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00181019': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '0018101a': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '0018101b': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00181020': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00181022': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00181023': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00181030': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00181040': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00181041': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181042': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00181043': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00181044': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181045': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181046': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181047': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181048': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00181049': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181050': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181060': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181061': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00181062': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181063': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181064': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00181065': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181066': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181067': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181068': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181069': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0018106a': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0018106c': {
      vr: 'US',
      Value: ['123', '123'],
    },
    '0018106e': {
      vr: 'UL',
      Value: ['123'],
    },
    '00181070': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00181071': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181072': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00181073': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00181074': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181075': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181076': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181077': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181078': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00181079': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00181080': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00181081': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181082': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181083': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181084': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181085': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00181086': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181088': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181090': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181094': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181100': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181110': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181111': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181114': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181120': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181121': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181130': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181131': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181134': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00181135': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181136': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181137': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181138': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0018113a': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00181140': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00181141': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181142': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181143': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181144': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181145': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181146': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181147': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00181149': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181150': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181151': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181152': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181153': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181154': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181155': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00181156': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0018115a': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0018115e': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181160': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00181161': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00181162': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181164': {
      vr: 'DS',
      Value: ['123.45', '123.45'],
    },
    '00181166': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00181170': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181180': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00181181': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00181182': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181183': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181184': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181190': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181191': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '001811a0': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '001811a2': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '001811a3': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '001811a4': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '001811a5': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '001811b0': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '001811b1': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '001811b2': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '001811b3': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '001811b4': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '001811b5': {
      vr: 'IS',
      Value: ['123'],
    },
    '001811b6': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '001811b7': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '001811b8': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '001811b9': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '001811ba': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '001811bb': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '001811bc': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '001811bd': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '001811be': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '001811bf': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '001811c0': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '001811c1': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00181200': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00181201': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00181202': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00181203': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00181204': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00181205': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00181210': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00181240': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181242': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181243': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181244': {
      vr: 'US',
      Value: ['123'],
    },
    '00181250': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00181251': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00181260': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00181261': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00181271': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00181272': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00181300': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181301': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00181302': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181310': {
      vr: 'US',
      Value: ['123', '123', '123', '123'],
    },
    '00181312': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00181314': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181315': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00181316': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181318': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181320': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00181400': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00181401': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00181402': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00181403': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00181404': {
      vr: 'US',
      Value: ['123'],
    },
    '00181405': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181411': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181412': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181413': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181450': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181460': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181470': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181480': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181490': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00181491': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00181495': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181500': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00181508': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00181510': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181511': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181520': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181521': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181530': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181531': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00181600': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00181602': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181604': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181606': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181608': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181610': {
      vr: 'IS',
      Value: ['123', '123'],
    },
    '00181612': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181620': {
      vr: 'IS',
      Value: ['123', '123'],
    },
    '00181622': {
      vr: 'US',
      Value: ['123'],
    },
    '00181623': {
      vr: 'US',
      Value: ['123'],
    },
    '00181624': {
      vr: 'US',
      Value: ['123', '123', '123'],
    },
    '00181630': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00181631': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00181632': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00181633': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00181634': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00181635': {
      vr: 'FD',
      Value: ['123.456789', '123.456789'],
    },
    '00181636': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00181637': {
      vr: 'UL',
      Value: ['123'],
    },
    '00181638': {
      vr: 'OF',
      Value: ['123.45'],
    },
    '00181700': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00181702': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181704': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181706': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181708': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181710': {
      vr: 'IS',
      Value: ['123', '123'],
    },
    '00181712': {
      vr: 'IS',
      Value: ['123'],
    },
    '00181720': {
      vr: 'IS',
      Value: ['123', '123'],
    },
    '00181800': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00181801': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00181802': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00181803': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00182001': {
      vr: 'IS',
      Value: ['123'],
    },
    '00182002': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00182003': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00182004': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00182005': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00182006': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00182010': {
      vr: 'DS',
      Value: ['123.45', '123.45'],
    },
    '00182020': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00182030': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00182041': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00182042': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00182043': {
      vr: 'FL',
      Value: ['123.45', '123.45'],
    },
    '00182044': {
      vr: 'FL',
      Value: ['123.45', '123.45', '123.45'],
    },
    '00182045': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00182046': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00183100': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00183101': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00183102': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00183103': {
      vr: 'IS',
      Value: ['123'],
    },
    '00183104': {
      vr: 'IS',
      Value: ['123'],
    },
    '00183105': {
      vr: 'IS',
      Value: ['123'],
    },
    '00184000': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00185000': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00185010': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00185011': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00185012': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00185020': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00185021': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00185022': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00185024': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00185026': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00185027': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00185028': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00185029': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00185030': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00185040': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00185050': {
      vr: 'IS',
      Value: ['123'],
    },
    '00185100': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00185101': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00185104': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00185210': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45', '123.45', '123.45', '123.45'],
    },
    '00185212': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45'],
    },
    '00186000': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00186011': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00186012': {
      vr: 'US',
      Value: ['123'],
    },
    '00186014': {
      vr: 'US',
      Value: ['123'],
    },
    '00186016': {
      vr: 'UL',
      Value: ['123'],
    },
    '00186018': {
      vr: 'UL',
      Value: ['123'],
    },
    '0018601a': {
      vr: 'UL',
      Value: ['123'],
    },
    '0018601c': {
      vr: 'UL',
      Value: ['123'],
    },
    '0018601e': {
      vr: 'UL',
      Value: ['123'],
    },
    '00186020': {
      vr: 'SL',
      Value: ['-123'],
    },
    '00186022': {
      vr: 'SL',
      Value: ['-123'],
    },
    '00186024': {
      vr: 'US',
      Value: ['123'],
    },
    '00186026': {
      vr: 'US',
      Value: ['123'],
    },
    '00186028': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '0018602a': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '0018602c': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '0018602e': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00186030': {
      vr: 'UL',
      Value: ['123'],
    },
    '00186031': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00186032': {
      vr: 'UL',
      Value: ['123'],
    },
    '00186034': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00186036': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00186038': {
      vr: 'UL',
      Value: ['123'],
    },
    '00186039': {
      vr: 'SL',
      Value: ['-123'],
    },
    '0018603a': {
      vr: 'UL',
      Value: ['123'],
    },
    '0018603b': {
      vr: 'SL',
      Value: ['-123'],
    },
    '0018603c': {
      vr: 'UL',
      Value: ['123'],
    },
    '0018603d': {
      vr: 'SL',
      Value: ['-123'],
    },
    '0018603e': {
      vr: 'UL',
      Value: ['123'],
    },
    '0018603f': {
      vr: 'SL',
      Value: ['-123'],
    },
    '00186040': {
      vr: 'UL',
      Value: ['123'],
    },
    '00186041': {
      vr: 'SL',
      Value: ['-123'],
    },
    '00186042': {
      vr: 'UL',
      Value: ['123'],
    },
    '00186043': {
      vr: 'SL',
      Value: ['-123'],
    },
    '00186044': {
      vr: 'US',
      Value: ['123'],
    },
    '00186046': {
      vr: 'UL',
      Value: ['123'],
    },
    '00186048': {
      vr: 'UL',
      Value: ['123'],
    },
    '0018604a': {
      vr: 'UL',
      Value: ['123'],
    },
    '0018604c': {
      vr: 'US',
      Value: ['123'],
    },
    '0018604e': {
      vr: 'US',
      Value: ['123'],
    },
    '00186050': {
      vr: 'UL',
      Value: ['123'],
    },
    '00186052': {
      vr: 'UL',
      Value: ['123'],
    },
    '00186054': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00186056': {
      vr: 'UL',
      Value: ['123'],
    },
    '00186058': {
      vr: 'UL',
      Value: ['123'],
    },
    '0018605a': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00186060': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00186070': {
      vr: 'US',
      Value: ['123'],
    },
    '00187000': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00187001': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00187004': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00187005': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00187006': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00187008': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '0018700a': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '0018700c': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '0018700e': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00187010': {
      vr: 'IS',
      Value: ['123'],
    },
    '00187011': {
      vr: 'IS',
      Value: ['123'],
    },
    '00187012': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00187014': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00187016': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0018701a': {
      vr: 'DS',
      Value: ['123.45', '123.45'],
    },
    '00187020': {
      vr: 'DS',
      Value: ['123.45', '123.45'],
    },
    '00187022': {
      vr: 'DS',
      Value: ['123.45', '123.45'],
    },
    '00187024': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00187026': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00187028': {
      vr: 'DS',
      Value: ['123.45', '123.45'],
    },
    '0018702a': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '0018702b': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00187030': {
      vr: 'DS',
      Value: ['123.45', '123.45'],
    },
    '00187032': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00187034': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00187036': {
      vr: 'FL',
      Value: ['123.45', '123.45'],
    },
    '00187038': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00187040': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00187041': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00187042': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00187044': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00187046': {
      vr: 'IS',
      Value: ['123', '123'],
    },
    '00187048': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0018704c': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00187050': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00187052': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00187054': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00187056': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00187058': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00187060': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00187062': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00187064': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00187065': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00188150': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00188151': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00189004': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189005': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00189006': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189008': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189009': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189010': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189011': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189012': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189014': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189015': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189016': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189017': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189018': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189019': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189020': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189021': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189022': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189024': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189025': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189026': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189027': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189028': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189029': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189030': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189032': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189033': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189034': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189035': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189036': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189037': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189041': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00189042': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189043': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189044': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189045': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189046': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00189047': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00189048': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189049': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189050': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00189051': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189052': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189053': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189054': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189058': {
      vr: 'US',
      Value: ['123'],
    },
    '00189059': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189060': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189061': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189062': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189063': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189064': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189065': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189066': {
      vr: 'US',
      Value: ['123'],
    },
    '00189067': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189069': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189070': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189073': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189074': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00189075': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189076': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189077': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189078': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189079': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189080': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00189081': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189082': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189083': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189084': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189085': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189087': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189089': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '00189090': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '00189091': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189092': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189093': {
      vr: 'US',
      Value: ['123'],
    },
    '00189094': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189095': {
      vr: 'UL',
      Value: ['123'],
    },
    '00189096': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189098': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189100': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189101': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189103': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189104': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189105': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '00189106': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '00189107': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189112': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189114': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189115': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189117': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189118': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189119': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189125': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189126': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189127': {
      vr: 'UL',
      Value: ['123'],
    },
    '00189147': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189151': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00189152': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189155': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189159': {
      vr: 'UL',
      Value: ['123'],
    },
    '00189166': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189168': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189169': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189170': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189171': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189172': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189173': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189174': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189175': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00189176': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189177': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189178': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189179': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189180': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189181': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189182': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189183': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189184': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189185': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00189186': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00189195': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189196': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189197': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189198': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189199': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189200': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189214': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189217': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189218': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189219': {
      vr: 'SS',
      Value: ['-123'],
    },
    '00189220': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189226': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189227': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189231': {
      vr: 'US',
      Value: ['123'],
    },
    '00189232': {
      vr: 'US',
      Value: ['123'],
    },
    '00189234': {
      vr: 'UL',
      Value: ['123'],
    },
    '00189236': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189239': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189240': {
      vr: 'US',
      Value: ['123'],
    },
    '00189241': {
      vr: 'US',
      Value: ['123'],
    },
    '00189250': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189251': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189252': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00189253': {
      vr: 'US',
      Value: ['123'],
    },
    '00189254': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189255': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '00189256': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '00189257': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189258': {
      vr: 'UL',
      Value: ['123'],
    },
    '00189259': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0018925a': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '0018925b': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '0018925c': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0018925d': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0018925e': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '0018925f': {
      vr: 'UL',
      Value: ['123'],
    },
    '00189260': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189295': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189296': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189297': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189298': {
      vr: 'IS',
      Value: ['123'],
    },
    '00189301': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189302': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189303': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189304': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189305': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189306': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189307': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189308': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189309': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189310': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189311': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189312': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189313': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '00189314': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189315': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189316': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189317': {
      vr: 'FD',
      Value: ['123.456789', '123.456789'],
    },
    '00189318': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '00189319': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189320': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00189321': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189322': {
      vr: 'FD',
      Value: ['123.456789', '123.456789'],
    },
    '00189323': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189324': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189325': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189326': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189327': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189328': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189329': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189330': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189332': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189333': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189334': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189335': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189337': {
      vr: 'US',
      Value: ['123'],
    },
    '00189338': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189340': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189341': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189342': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189343': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189344': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189345': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189346': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189351': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00189352': {
      vr: 'FL',
      Value: ['123.45', '123.45', '123.45'],
    },
    '00189353': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00189360': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189361': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189362': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189363': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189364': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189365': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189366': {
      vr: 'US',
      Value: ['123'],
    },
    '00189367': {
      vr: 'UC',
      Value: ['Unlimited Characters Test'],
    },
    '00189368': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189369': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '0018936a': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '0018936b': {
      vr: 'US',
      Value: ['123'],
    },
    '0018936c': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0018936d': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0018936e': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0018936f': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189370': {
      vr: 'US',
      Value: ['123'],
    },
    '00189371': {
      vr: 'UC',
      Value: ['Unlimited Characters Test'],
    },
    '00189372': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189373': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00189374': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00189375': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00189376': {
      vr: 'US',
      Value: ['123'],
    },
    '00189377': {
      vr: 'US',
      Value: ['123'],
    },
    '00189378': {
      vr: 'US',
      Value: ['123'],
    },
    '00189379': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0018937a': {
      vr: 'US',
      Value: ['123'],
    },
    '0018937b': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '0018937c': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '0018937d': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0018937e': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0018937f': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00189380': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189381': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189382': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189383': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00189384': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00189401': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189402': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00189403': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00189404': {
      vr: 'FL',
      Value: ['123.45', '123.45'],
    },
    '00189405': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189406': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189407': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189410': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189412': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189417': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189420': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189423': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00189424': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00189425': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189426': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00189427': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189428': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00189429': {
      vr: 'FL',
      Value: ['123.45', '123.45'],
    },
    '00189430': {
      vr: 'FL',
      Value: ['123.45', '123.45'],
    },
    '00189432': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189433': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00189434': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189435': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189436': {
      vr: 'SS',
      Value: ['-123'],
    },
    '00189437': {
      vr: 'SS',
      Value: ['-123'],
    },
    '00189438': {
      vr: 'SS',
      Value: ['-123'],
    },
    '00189439': {
      vr: 'SS',
      Value: ['-123'],
    },
    '00189440': {
      vr: 'SS',
      Value: ['-123', '-123'],
    },
    '00189441': {
      vr: 'US',
      Value: ['123'],
    },
    '00189442': {
      vr: 'SS',
      Value: ['-123', '-123'],
    },
    '00189447': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00189449': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00189451': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189452': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00189455': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189456': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189457': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189461': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00189462': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189463': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00189464': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00189465': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00189466': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00189467': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00189468': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00189469': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00189470': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00189471': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00189472': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189473': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00189474': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189476': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189477': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189504': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189506': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189507': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189508': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00189509': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00189510': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00189511': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00189514': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00189515': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00189516': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00189517': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00189518': {
      vr: 'SS',
      Value: ['-123'],
    },
    '00189519': {
      vr: 'SS',
      Value: ['-123'],
    },
    '00189524': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00189525': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00189526': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00189527': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189528': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00189530': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189531': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00189538': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189541': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189542': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189543': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189544': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189545': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189546': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189547': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189548': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189549': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189550': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189551': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189552': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189553': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189554': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189555': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189556': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189557': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '00189558': {
      vr: 'FD',
      Value: [
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
      ],
    },
    '00189559': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189601': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189602': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189603': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189604': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189605': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189606': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189607': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189621': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189622': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189623': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00189624': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189701': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00189715': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189716': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189717': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189718': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189719': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189720': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189721': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189722': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189723': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189724': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189725': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189726': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189727': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189729': {
      vr: 'US',
      Value: ['123'],
    },
    '00189732': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189733': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189734': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189735': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189736': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189737': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189738': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189739': {
      vr: 'US',
      Value: ['123'],
    },
    '00189740': {
      vr: 'US',
      Value: ['123'],
    },
    '00189749': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189751': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189755': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189756': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189758': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189759': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189760': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189761': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189762': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189763': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189764': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189765': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189766': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189767': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189768': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189769': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189770': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189771': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189772': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189801': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189803': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189804': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00189805': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189806': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189807': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189808': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189809': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0018980b': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0018980c': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0018980d': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0018980e': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0018980f': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189810': {
      vr: 'US',
      Value: ['123'],
    },
    '00189821': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189822': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189823': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189824': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189825': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189826': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189828': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189829': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0018982a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0018982b': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '0018982c': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0018982d': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '0018982e': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '0018982f': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189830': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189831': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189832': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189833': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189834': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189835': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189836': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189900': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00189901': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00189902': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189903': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189904': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00189905': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189906': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189907': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189908': {
      vr: 'UC',
      Value: ['Unlimited Characters Test'],
    },
    '00189909': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0018990a': {
      vr: 'UC',
      Value: ['Unlimited Characters Test'],
    },
    '0018990b': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0018990c': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0018990d': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0018990e': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0018990f': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00189910': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00189911': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189912': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189913': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189914': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189915': {
      vr: 'US',
      Value: ['123'],
    },
    '00189916': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00189917': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00189918': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189919': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '0018991a': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '0018991b': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0018991c': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0018991d': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0018991e': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '0018991f': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189920': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189921': {
      vr: 'US',
      Value: ['123'],
    },
    '00189922': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00189923': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00189924': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00189930': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189931': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189932': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189933': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189934': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189935': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189936': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189937': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00189938': {
      vr: 'US',
      Value: ['123'],
    },
    '00189939': {
      vr: 'US',
      Value: ['123'],
    },
    '0018993a': {
      vr: 'US',
      Value: ['123'],
    },
    '0018993b': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0018993c': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0018993d': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0018993e': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00189941': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00189942': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189943': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189944': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00189945': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189946': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00189947': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0018a001': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0018a002': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '0018a003': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '0020000d': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '0020000e': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00200010': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00200011': {
      vr: 'IS',
      Value: ['123'],
    },
    '00200012': {
      vr: 'IS',
      Value: ['123'],
    },
    '00200013': {
      vr: 'IS',
      Value: ['123'],
    },
    '00200014': {
      vr: 'IS',
      Value: ['123'],
    },
    '00200015': {
      vr: 'IS',
      Value: ['123'],
    },
    '00200016': {
      vr: 'IS',
      Value: ['123'],
    },
    '00200017': {
      vr: 'IS',
      Value: ['123'],
    },
    '00200018': {
      vr: 'IS',
      Value: ['123'],
    },
    '00200019': {
      vr: 'IS',
      Value: ['123'],
    },
    '00200020': {
      vr: 'CS',
      Value: ['TEST_CODE', 'TEST_CODE'],
    },
    '00200022': {
      vr: 'IS',
      Value: ['123'],
    },
    '00200024': {
      vr: 'IS',
      Value: ['123'],
    },
    '00200026': {
      vr: 'IS',
      Value: ['123'],
    },
    '00200027': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00200030': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45'],
    },
    '00200032': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45'],
    },
    '00200035': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45', '123.45', '123.45', '123.45'],
    },
    '00200037': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45', '123.45', '123.45', '123.45'],
    },
    '00200050': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00200052': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00200060': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00200062': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00200070': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00200080': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '002000aa': {
      vr: 'IS',
      Value: ['123'],
    },
    '00200100': {
      vr: 'IS',
      Value: ['123'],
    },
    '00200105': {
      vr: 'IS',
      Value: ['123'],
    },
    '00200110': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00200200': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00200242': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00201000': {
      vr: 'IS',
      Value: ['123'],
    },
    '00201001': {
      vr: 'IS',
      Value: ['123'],
    },
    '00201002': {
      vr: 'IS',
      Value: ['123'],
    },
    '00201003': {
      vr: 'IS',
      Value: ['123'],
    },
    '00201004': {
      vr: 'IS',
      Value: ['123'],
    },
    '00201005': {
      vr: 'IS',
      Value: ['123'],
    },
    '00201020': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '0020103f': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00201040': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00201041': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00201070': {
      vr: 'IS',
      Value: ['123'],
    },
    '00201200': {
      vr: 'IS',
      Value: ['123'],
    },
    '00201202': {
      vr: 'IS',
      Value: ['123'],
    },
    '00201204': {
      vr: 'IS',
      Value: ['123'],
    },
    '00201206': {
      vr: 'IS',
      Value: ['123'],
    },
    '00201208': {
      vr: 'IS',
      Value: ['123'],
    },
    '00201209': {
      vr: 'IS',
      Value: ['123'],
    },
    '002031xx': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00203401': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00203402': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00203403': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00203404': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00203405': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00203406': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00204000': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00205000': {
      vr: 'AT',
      Value: ['(0010,0010)'],
    },
    '00205002': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00209056': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00209057': {
      vr: 'UL',
      Value: ['123'],
    },
    '00209071': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00209072': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00209111': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00209113': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00209116': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00209128': {
      vr: 'UL',
      Value: ['123'],
    },
    '00209153': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00209154': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00209155': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00209156': {
      vr: 'US',
      Value: ['123'],
    },
    '00209157': {
      vr: 'UL',
      Value: ['123'],
    },
    '00209158': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00209161': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00209162': {
      vr: 'US',
      Value: ['123'],
    },
    '00209163': {
      vr: 'US',
      Value: ['123'],
    },
    '00209164': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00209165': {
      vr: 'AT',
      Value: ['(0010,0010)'],
    },
    '00209167': {
      vr: 'AT',
      Value: ['(0010,0010)'],
    },
    '00209170': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00209171': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00209172': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00209213': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00209221': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00209222': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00209228': {
      vr: 'UL',
      Value: ['123'],
    },
    '00209238': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00209241': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00209245': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00209246': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00209247': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00209248': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00209249': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00209250': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00209251': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00209252': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00209253': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00209254': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00209255': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00209256': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00209257': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00209301': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '00209302': {
      vr: 'FD',
      Value: [
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
      ],
    },
    '00209307': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00209308': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '00209309': {
      vr: 'FD',
      Value: [
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
      ],
    },
    '0020930a': {
      vr: 'FD',
      Value: [
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
      ],
    },
    '0020930b': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0020930c': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0020930d': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '0020930e': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0020930f': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00209310': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00209311': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00209312': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00209313': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00209421': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00209450': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00209453': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00209518': {
      vr: 'US',
      Value: ['123'],
    },
    '00209529': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00209536': {
      vr: 'US',
      Value: ['123'],
    },
    '00220001': {
      vr: 'US',
      Value: ['123'],
    },
    '00220002': {
      vr: 'US',
      Value: ['123', '123'],
    },
    '00220003': {
      vr: 'US',
      Value: ['123'],
    },
    '00220004': {
      vr: 'US',
      Value: ['123', '123'],
    },
    '00220005': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00220006': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00220007': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00220008': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00220009': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '0022000a': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '0022000b': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '0022000c': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '0022000d': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0022000e': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '0022000f': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00220010': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00220011': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00220012': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00220013': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00220014': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00220015': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00220016': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00220017': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00220018': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00220019': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0022001a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0022001b': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0022001c': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0022001d': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0022001e': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00220020': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00220021': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00220022': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00220028': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00220030': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00220031': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00220032': {
      vr: 'FL',
      Value: ['123.45', '123.45'],
    },
    '00220035': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00220036': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00220037': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00220038': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00220039': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00220041': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00220042': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00220048': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00220049': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '0022004e': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00220055': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00220056': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00220057': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00220058': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221007': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221008': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221009': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00221010': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00221012': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221019': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00221024': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221025': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221028': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221029': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00221033': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00221035': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221036': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221037': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00221039': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00221040': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221044': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221045': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221046': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00221047': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221048': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221049': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0022104a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0022104b': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221050': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221053': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00221054': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00221059': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00221065': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00221066': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00221090': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221092': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221093': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00221094': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00221095': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00221096': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221097': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00221100': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221101': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221103': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221121': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00221122': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00221125': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221127': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221128': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0022112a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0022112b': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0022112c': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00221130': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00221131': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00221132': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221133': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221134': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221135': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221140': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00221150': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221153': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221155': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00221159': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00221210': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221211': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221212': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221220': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221225': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221230': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221250': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221255': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221257': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221260': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221262': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221265': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221273': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00221300': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221310': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221330': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221415': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00221420': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221423': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221436': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221443': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221445': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221450': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221452': {
      vr: 'US',
      Value: ['123'],
    },
    '00221454': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00221458': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221460': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00221463': {
      vr: 'FL',
      Value: ['123.45', '123.45'],
    },
    '00221465': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221466': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00221467': {
      vr: 'FL',
      Value: ['123.45', '123.45'],
    },
    '00221468': {
      vr: 'FL',
      Value: ['123.45', '123.45'],
    },
    '00221470': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221472': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221512': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221513': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221515': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00221517': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00221518': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221525': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221526': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221527': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00221528': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00221529': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00221530': {
      vr: 'UL',
      Value: ['123'],
    },
    '00221531': {
      vr: 'OF',
      Value: ['123.45'],
    },
    '00221612': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221615': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221616': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00221618': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221620': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221622': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00221624': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00221626': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00221628': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221630': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00221640': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00221642': {
      vr: 'UL',
      Value: ['123'],
    },
    '00221643': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00221644': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00221645': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00221646': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00221649': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00221650': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00221658': {
      vr: 'UL',
      Value: ['123'],
    },
    '00240010': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240011': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240012': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240016': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00240018': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240020': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240021': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00240024': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00240025': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240028': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240032': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00240033': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00240034': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00240035': {
      vr: 'US',
      Value: ['123'],
    },
    '00240036': {
      vr: 'US',
      Value: ['123'],
    },
    '00240037': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240038': {
      vr: 'US',
      Value: ['123'],
    },
    '00240039': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240040': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240042': {
      vr: 'US',
      Value: ['123'],
    },
    '00240044': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00240045': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240046': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240048': {
      vr: 'US',
      Value: ['123'],
    },
    '00240050': {
      vr: 'US',
      Value: ['123'],
    },
    '00240051': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240052': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240053': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240054': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240055': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240056': {
      vr: 'US',
      Value: ['123'],
    },
    '00240057': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240058': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00240059': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240060': {
      vr: 'US',
      Value: ['123'],
    },
    '00240061': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240062': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240063': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240064': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00240065': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00240066': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240067': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00240068': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240069': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00240070': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240071': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240072': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240073': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240074': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240075': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240076': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240077': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240078': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240079': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240080': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240081': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240083': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00240085': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00240086': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240087': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240088': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240089': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00240090': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240091': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240092': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240093': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240094': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240095': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240096': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240097': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00240098': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240100': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240102': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240103': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240104': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240105': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240106': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240107': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240108': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240110': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00240112': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00240113': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240114': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00240115': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00240117': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240118': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240120': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240122': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00240124': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240126': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240202': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00240306': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00240307': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00240308': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00240309': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00240317': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00240320': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00240325': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00240338': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00240341': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00240344': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00280002': {
      vr: 'US',
      Value: ['123'],
    },
    '00280003': {
      vr: 'US',
      Value: ['123'],
    },
    '00280004': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00280005': {
      vr: 'US',
      Value: ['123'],
    },
    '00280006': {
      vr: 'US',
      Value: ['123'],
    },
    '00280008': {
      vr: 'IS',
      Value: ['123'],
    },
    '00280009': {
      vr: 'AT',
      Value: ['(0010,0010)'],
    },
    '0028000a': {
      vr: 'AT',
      Value: ['(0010,0010)'],
    },
    '00280010': {
      vr: 'US',
      Value: ['123'],
    },
    '00280011': {
      vr: 'US',
      Value: ['123'],
    },
    '00280012': {
      vr: 'US',
      Value: ['123'],
    },
    '00280014': {
      vr: 'US',
      Value: ['123'],
    },
    '00280030': {
      vr: 'DS',
      Value: ['123.45', '123.45'],
    },
    '00280031': {
      vr: 'DS',
      Value: ['123.45', '123.45'],
    },
    '00280032': {
      vr: 'DS',
      Value: ['123.45', '123.45'],
    },
    '00280034': {
      vr: 'IS',
      Value: ['123', '123'],
    },
    '00280040': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00280050': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00280051': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0028005f': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00280060': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00280061': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00280062': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00280063': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00280065': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00280066': {
      vr: 'AT',
      Value: ['(0010,0010)'],
    },
    '00280068': {
      vr: 'US',
      Value: ['123'],
    },
    '00280069': {
      vr: 'US',
      Value: ['123'],
    },
    '00280070': {
      vr: 'US',
      Value: ['123'],
    },
    '00280071': {
      vr: 'US',
      Value: ['123'],
    },
    '00280080': {
      vr: 'US',
      Value: ['123'],
    },
    '00280081': {
      vr: 'US',
      Value: ['123'],
    },
    '00280082': {
      vr: 'US',
      Value: ['123'],
    },
    '00280090': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00280091': {
      vr: 'US',
      Value: ['123'],
    },
    '00280092': {
      vr: 'US',
      Value: ['123'],
    },
    '00280093': {
      vr: 'US',
      Value: ['123'],
    },
    '00280094': {
      vr: 'US',
      Value: ['123'],
    },
    '00280100': {
      vr: 'US',
      Value: ['123'],
    },
    '00280101': {
      vr: 'US',
      Value: ['123'],
    },
    '00280102': {
      vr: 'US',
      Value: ['123'],
    },
    '00280103': {
      vr: 'US',
      Value: ['123'],
    },
    '00280104': {
      vr: 'US',
      Value: ['123'],
    },
    '00280105': {
      vr: 'US',
      Value: ['123'],
    },
    '00280106': {
      vr: 'US',
      Value: ['123'],
    },
    '00280107': {
      vr: 'US',
      Value: ['123'],
    },
    '00280108': {
      vr: 'US',
      Value: ['123'],
    },
    '00280109': {
      vr: 'US',
      Value: ['123'],
    },
    '00280110': {
      vr: 'US',
      Value: ['123'],
    },
    '00280111': {
      vr: 'US',
      Value: ['123'],
    },
    '00280120': {
      vr: 'US',
      Value: ['123'],
    },
    '00280121': {
      vr: 'US',
      Value: ['123'],
    },
    '00280122': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00280123': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00280124': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00280125': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00280200': {
      vr: 'US',
      Value: ['123'],
    },
    '00280300': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00280301': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00280302': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00280303': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00280304': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00280400': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00280401': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00280402': {
      vr: 'US',
      Value: ['123'],
    },
    '00280403': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00280404': {
      vr: 'AT',
      Value: ['(0010,0010)'],
    },
    '002804x0': {
      vr: 'US',
      Value: ['123'],
    },
    '002804x1': {
      vr: 'US',
      Value: ['123'],
    },
    '002804x2': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '002804x3': {
      vr: 'AT',
      Value: ['(0010,0010)'],
    },
    '00280700': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00280701': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00280702': {
      vr: 'AT',
      Value: ['(0010,0010)'],
    },
    '00280710': {
      vr: 'US',
      Value: ['123'],
    },
    '00280720': {
      vr: 'US',
      Value: ['123'],
    },
    '00280721': {
      vr: 'AT',
      Value: ['(0010,0010)'],
    },
    '00280722': {
      vr: 'US',
      Value: ['123'],
    },
    '00280730': {
      vr: 'US',
      Value: ['123'],
    },
    '00280740': {
      vr: 'US',
      Value: ['123'],
    },
    '002808x0': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '002808x2': {
      vr: 'US',
      Value: ['123'],
    },
    '002808x3': {
      vr: 'AT',
      Value: ['(0010,0010)'],
    },
    '002808x4': {
      vr: 'US',
      Value: ['123'],
    },
    '002808x8': {
      vr: 'AT',
      Value: ['(0010,0010)'],
    },
    '00280a02': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00280a04': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00281040': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00281041': {
      vr: 'SS',
      Value: ['-123'],
    },
    '00281050': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00281051': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00281052': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00281053': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00281054': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00281055': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00281056': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00281080': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00281090': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00281100': {
      vr: 'US',
      Value: ['123', '123', '123'],
    },
    '00281101': {
      vr: 'US',
      Value: ['123', '123', '123'],
    },
    '00281102': {
      vr: 'US',
      Value: ['123', '123', '123'],
    },
    '00281103': {
      vr: 'US',
      Value: ['123', '123', '123'],
    },
    '00281104': {
      vr: 'US',
      Value: ['123', '123', '123'],
    },
    '00281111': {
      vr: 'US',
      Value: ['123', '123', '123', '123'],
    },
    '00281112': {
      vr: 'US',
      Value: ['123', '123', '123', '123'],
    },
    '00281113': {
      vr: 'US',
      Value: ['123', '123', '123', '123'],
    },
    '00281199': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00281200': {
      vr: 'US',
      Value: ['123'],
    },
    '00281201': {
      vr: 'OW',
      Value: ['01'],
    },
    '00281202': {
      vr: 'OW',
      Value: ['01'],
    },
    '00281203': {
      vr: 'OW',
      Value: ['01'],
    },
    '00281204': {
      vr: 'OW',
      Value: ['01'],
    },
    '00281211': {
      vr: 'OW',
      Value: ['01'],
    },
    '00281212': {
      vr: 'OW',
      Value: ['01'],
    },
    '00281213': {
      vr: 'OW',
      Value: ['01'],
    },
    '00281214': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00281221': {
      vr: 'OW',
      Value: ['01'],
    },
    '00281222': {
      vr: 'OW',
      Value: ['01'],
    },
    '00281223': {
      vr: 'OW',
      Value: ['01'],
    },
    '00281224': {
      vr: 'OW',
      Value: ['01'],
    },
    '00281230': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00281231': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00281232': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00281300': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00281350': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00281351': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00281352': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0028135a': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00281401': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00281402': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00281403': {
      vr: 'US',
      Value: ['123'],
    },
    '00281404': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00281405': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00281406': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00281407': {
      vr: 'US',
      Value: ['123', '123', '123'],
    },
    '00281408': {
      vr: 'OW',
      Value: ['01'],
    },
    '0028140b': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0028140c': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0028140d': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0028140e': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0028140f': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00281410': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00282000': {
      vr: 'OB',
      Value: ['01'],
    },
    '00282002': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00282110': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00282112': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00282114': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00283000': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00283001': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00283002': {
      vr: 'US',
      Value: ['123', '123', '123'],
    },
    '00283003': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00283004': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00283006': {
      vr: 'US',
      Value: ['123'],
    },
    '00283010': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00283110': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00284000': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00285000': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00286010': {
      vr: 'US',
      Value: ['123'],
    },
    '00286020': {
      vr: 'US',
      Value: ['123'],
    },
    '00286022': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00286023': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00286030': {
      vr: 'US',
      Value: ['123'],
    },
    '00286040': {
      vr: 'US',
      Value: ['123'],
    },
    '00286100': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00286101': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00286102': {
      vr: 'US',
      Value: ['123', '123'],
    },
    '00286110': {
      vr: 'US',
      Value: ['123'],
    },
    '00286112': {
      vr: 'US',
      Value: ['123'],
    },
    '00286114': {
      vr: 'FL',
      Value: ['123.45', '123.45'],
    },
    '00286120': {
      vr: 'SS',
      Value: ['-123'],
    },
    '00286190': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00287000': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00287001': {
      vr: 'US',
      Value: ['123'],
    },
    '00287002': {
      vr: 'US',
      Value: ['123'],
    },
    '00287003': {
      vr: 'US',
      Value: ['123'],
    },
    '00287004': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00287005': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00287006': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00287007': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00287008': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00287009': {
      vr: 'US',
      Value: ['123'],
    },
    '0028700a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0028700b': {
      vr: 'US',
      Value: ['123'],
    },
    '0028700c': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '0028700d': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '0028700e': {
      vr: 'US',
      Value: ['123'],
    },
    '0028700f': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00287010': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00287011': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00287012': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00287013': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00287014': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00287015': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00287016': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00287017': {
      vr: 'US',
      Value: ['123'],
    },
    '00287018': {
      vr: 'FL',
      Value: ['123.45', '123.45'],
    },
    '00287019': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0028701a': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '0028701b': {
      vr: 'US',
      Value: ['123'],
    },
    '0028701c': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0028701d': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '0028701e': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '0028701f': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00287020': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00287021': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00287022': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00287023': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00287024': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00287025': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00287026': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00287027': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00287028': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00287029': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0028702a': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '0028702b': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0028702c': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0028702d': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0028702e': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00287fe0': {
      vr: 'UR',
      Value: ['https://sample.com'],
    },
    '00289001': {
      vr: 'UL',
      Value: ['123'],
    },
    '00289002': {
      vr: 'UL',
      Value: ['123'],
    },
    '00289003': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00289099': {
      vr: 'US',
      Value: ['123'],
    },
    '00289108': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00289110': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00289132': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00289145': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00289235': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00289411': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00289415': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00289416': {
      vr: 'US',
      Value: ['123'],
    },
    '00289422': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00289443': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00289444': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00289445': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00289446': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00289454': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00289474': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00289478': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00289501': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00289502': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00289503': {
      vr: 'SS',
      Value: ['-123', '-123'],
    },
    '00289505': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00289506': {
      vr: 'US',
      Value: ['123', '123'],
    },
    '00289507': {
      vr: 'US',
      Value: ['123', '123'],
    },
    '00289520': {
      vr: 'DS',
      Value: [
        '123.45',
        '123.45',
        '123.45',
        '123.45',
        '123.45',
        '123.45',
        '123.45',
        '123.45',
        '123.45',
        '123.45',
        '123.45',
        '123.45',
        '123.45',
        '123.45',
        '123.45',
        '123.45',
      ],
    },
    '00289537': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0032000a': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0032000c': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00320012': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00320032': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00320033': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00320034': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00320035': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00321000': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00321001': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00321010': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00321011': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00321020': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00321021': {
      vr: 'AE',
      Value: ['TEST_AE_TITLE'],
    },
    '00321030': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00321031': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00321032': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '00321033': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00321034': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00321040': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00321041': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00321050': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00321051': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00321055': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00321060': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00321064': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00321065': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00321066': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00321067': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00321070': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00324000': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00340001': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00340002': {
      vr: 'OB',
      Value: ['01'],
    },
    '00340003': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00340004': {
      vr: 'UL',
      Value: ['123'],
    },
    '00340005': {
      vr: 'OB',
      Value: ['01'],
    },
    '00340007': {
      vr: 'OB',
      Value: ['01'],
    },
    '00340008': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00340009': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0034000a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0034000b': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0034000c': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0034000d': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00380004': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00380008': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00380010': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00380011': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00380014': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00380016': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '0038001a': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '0038001b': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '0038001c': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '0038001d': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '0038001e': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00380020': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00380021': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00380030': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00380032': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00380040': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00380044': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00380050': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00380060': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00380061': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00380062': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00380064': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00380100': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00380101': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00380102': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00380300': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00380400': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00380500': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00380502': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00384000': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '003a0004': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '003a0005': {
      vr: 'US',
      Value: ['123'],
    },
    '003a0010': {
      vr: 'UL',
      Value: ['123'],
    },
    '003a001a': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '003a0020': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '003a0200': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '003a0202': {
      vr: 'IS',
      Value: ['123'],
    },
    '003a0203': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '003a0205': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '003a0208': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '003a0209': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '003a020a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '003a020c': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '003a0210': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '003a0211': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '003a0212': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '003a0213': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '003a0214': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '003a0215': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '003a0218': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '003a021a': {
      vr: 'US',
      Value: ['123'],
    },
    '003a0220': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '003a0221': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '003a0222': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '003a0223': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '003a0230': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '003a0231': {
      vr: 'US',
      Value: ['123', '123', '123'],
    },
    '003a0240': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '003a0241': {
      vr: 'US',
      Value: ['123'],
    },
    '003a0242': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '003a0244': {
      vr: 'US',
      Value: ['123', '123', '123'],
    },
    '003a0245': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '003a0246': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '003a0247': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '003a0248': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '003a0300': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '003a0301': {
      vr: 'IS',
      Value: ['123'],
    },
    '003a0302': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '003a0310': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '003a0311': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '003a0312': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '003a0313': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '003a0314': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '003a0315': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '003a0316': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '003a0317': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '003a0318': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '003a0319': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '003a0320': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '003a0321': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '003a0322': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '003a0323': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '003a0324': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '003a0325': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '003a0326': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '003a0327': {
      vr: 'IS',
      Value: ['123'],
    },
    '003a0328': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '003a0329': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '003a032a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '003a032b': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '003a032c': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '003a032d': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '003a032e': {
      vr: 'OD',
      Value: ['123.456'],
    },
    '00400001': {
      vr: 'AE',
      Value: ['TEST_AE_TITLE'],
    },
    '00400002': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00400003': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00400004': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00400005': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00400006': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '00400007': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00400008': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400009': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '0040000a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040000b': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400010': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00400011': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00400012': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00400020': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00400026': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400027': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400031': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00400032': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00400033': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00400035': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00400036': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400039': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040003a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400100': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400220': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400241': {
      vr: 'AE',
      Value: ['TEST_AE_TITLE'],
    },
    '00400242': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00400243': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00400244': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00400245': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00400250': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00400251': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00400252': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00400253': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00400254': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00400255': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00400260': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400261': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00400270': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400275': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400280': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00400281': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400293': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400294': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00400295': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400296': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400300': {
      vr: 'US',
      Value: ['123'],
    },
    '00400301': {
      vr: 'US',
      Value: ['123'],
    },
    '00400302': {
      vr: 'US',
      Value: ['123'],
    },
    '00400303': {
      vr: 'US',
      Value: ['123'],
    },
    '00400306': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00400307': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0040030e': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400310': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00400312': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00400314': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00400316': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00400318': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00400320': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400321': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400324': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400330': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400340': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400400': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00400440': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400441': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400500': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040050a': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00400512': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00400513': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400515': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400518': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040051a': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00400520': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400550': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400551': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00400552': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400553': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00400554': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00400555': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400556': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '0040059a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400560': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400562': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400600': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00400602': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00400610': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400612': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00400620': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '004006fa': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00400710': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040071a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040072a': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0040073a': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0040074a': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '004008d8': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '004008da': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '004008ea': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '004009f8': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00401001': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00401002': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00401003': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00401004': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00401005': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00401006': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00401007': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00401008': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00401009': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '0040100a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00401010': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '00401011': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00401012': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00401060': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00401101': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00401102': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00401103': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00401104': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00401400': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00402001': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00402004': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00402005': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00402006': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00402007': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00402008': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '00402009': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00402010': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00402011': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00402016': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00402017': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00402400': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00403001': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00404001': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00404002': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00404003': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00404004': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00404005': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00404006': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00404007': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00404008': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00404009': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00404010': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00404011': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00404015': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00404016': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00404018': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00404019': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00404020': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00404021': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00404022': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00404023': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00404025': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00404026': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00404027': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00404028': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00404029': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00404030': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00404031': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00404032': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00404033': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00404034': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00404035': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00404036': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00404037': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '00404040': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00404041': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00404050': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00404051': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00404052': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00404070': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00404071': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00404072': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00404073': {
      vr: 'UR',
      Value: ['https://sample.com'],
    },
    '00404074': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00408302': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00408303': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00409092': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00409094': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00409096': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00409098': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00409210': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00409211': {
      vr: 'US',
      Value: ['123'],
    },
    '00409212': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00409213': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00409214': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00409216': {
      vr: 'US',
      Value: ['123'],
    },
    '00409220': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00409224': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00409225': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '0040a007': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0040a010': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0040a020': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a021': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '0040a022': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '0040a023': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '0040a024': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '0040a026': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a027': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '0040a028': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a030': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '0040a032': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '0040a033': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '0040a040': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0040a043': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a047': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '0040a050': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0040a057': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0040a060': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '0040a066': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a067': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '0040a068': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a070': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a073': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a074': {
      vr: 'OB',
      Value: ['01'],
    },
    '0040a075': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '0040a076': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a078': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a07a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a07c': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a080': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0040a082': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '0040a084': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0040a085': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a088': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a089': {
      vr: 'OB',
      Value: ['01'],
    },
    '0040a090': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a0b0': {
      vr: 'US',
      Value: ['123', '123'],
    },
    '0040a110': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '0040a112': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '0040a120': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '0040a121': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '0040a122': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '0040a123': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '0040a124': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '0040a125': {
      vr: 'CS',
      Value: ['TEST_CODE', 'TEST_CODE'],
    },
    '0040a130': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0040a132': {
      vr: 'UL',
      Value: ['123'],
    },
    '0040a136': {
      vr: 'US',
      Value: ['123'],
    },
    '0040a138': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0040a13a': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '0040a160': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '0040a161': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '0040a162': {
      vr: 'SL',
      Value: ['-123'],
    },
    '0040a163': {
      vr: 'UL',
      Value: ['123'],
    },
    '0040a167': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a168': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a16a': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '0040a170': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a171': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '0040a172': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '0040a173': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0040a174': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0040a180': {
      vr: 'US',
      Value: ['123'],
    },
    '0040a192': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '0040a193': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '0040a194': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0040a195': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a224': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '0040a290': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0040a296': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a297': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '0040a29a': {
      vr: 'SL',
      Value: ['-123', '-123'],
    },
    '0040a300': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a301': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a307': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '0040a30a': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0040a313': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a33a': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '0040a340': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a352': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '0040a353': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '0040a354': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '0040a358': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a360': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a370': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a372': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a375': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a380': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a385': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a390': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a402': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '0040a403': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0040a404': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a491': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0040a492': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '0040a493': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0040a494': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0040a496': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0040a504': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a525': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a600': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0040a601': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0040a603': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0040a730': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a731': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a732': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a744': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a801': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a802': {
      vr: 'UL',
      Value: ['123'],
    },
    '0040a803': {
      vr: 'UL',
      Value: ['123'],
    },
    '0040a804': {
      vr: 'UL',
      Value: ['123'],
    },
    '0040a805': {
      vr: 'UL',
      Value: ['123'],
    },
    '0040a806': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a807': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a808': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040a992': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '0040b020': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040db00': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0040db06': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '0040db07': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '0040db0b': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0040db0c': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '0040db0d': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '0040db73': {
      vr: 'UL',
      Value: ['123'],
    },
    '0040e001': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '0040e004': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '0040e006': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040e008': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040e010': {
      vr: 'UR',
      Value: ['https://sample.com'],
    },
    '0040e011': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '0040e020': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0040e021': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040e022': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040e023': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040e024': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040e025': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0040e030': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '0040e031': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00420010': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00420011': {
      vr: 'OB',
      Value: ['01'],
    },
    '00420012': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00420013': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00420014': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00420015': {
      vr: 'UL',
      Value: ['123'],
    },
    '00440001': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00440002': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00440003': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00440004': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00440007': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00440008': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00440009': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '0044000a': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '0044000b': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00440010': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00440011': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00440012': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00440013': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00440019': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00440100': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00440101': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00440102': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00440103': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00440104': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00440105': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00440106': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00440107': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00440108': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00440109': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0044010a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460012': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00460014': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460015': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460016': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460018': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460028': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460030': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00460032': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00460034': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00460036': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00460038': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00460040': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00460042': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00460044': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00460046': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00460047': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460050': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460052': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460060': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00460062': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00460063': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00460064': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00460070': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460071': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460074': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460075': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00460076': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00460077': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00460080': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460092': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00460094': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00460095': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00460097': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460098': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460100': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460101': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460102': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460104': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00460106': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00460110': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460111': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460112': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460113': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460114': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00460115': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00460116': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460117': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00460118': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00460121': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460122': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460123': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460124': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460125': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00460135': {
      vr: 'SS',
      Value: ['-123', '-123'],
    },
    '00460137': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00460139': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00460145': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460146': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00460147': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00460201': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00460202': {
      vr: 'FL',
      Value: ['123.45', '123.45'],
    },
    '00460203': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00460204': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00460205': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00460207': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460208': {
      vr: 'IS',
      Value: ['123', '123'],
    },
    '00460210': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460211': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460212': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00460213': {
      vr: 'FL',
      Value: ['123.45', '123.45'],
    },
    '00460215': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460218': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460220': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00460224': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00460227': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00460230': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00460232': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00460234': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00460236': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00460238': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00460242': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00460244': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00460247': {
      vr: 'FL',
      Value: ['123.45', '123.45', '123.45'],
    },
    '00460248': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00460249': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00460250': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00460251': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00460252': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00460253': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00480001': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00480002': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00480003': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00480006': {
      vr: 'UL',
      Value: ['123'],
    },
    '00480007': {
      vr: 'UL',
      Value: ['123'],
    },
    '00480008': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00480010': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00480011': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00480012': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00480013': {
      vr: 'US',
      Value: ['123'],
    },
    '00480014': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00480015': {
      vr: 'US',
      Value: ['123', '123', '123'],
    },
    '00480100': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00480102': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45', '123.45', '123.45', '123.45'],
    },
    '00480105': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00480106': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00480107': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00480108': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00480110': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00480111': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00480112': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00480113': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00480114': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00480115': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00480116': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00480117': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00480120': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00480200': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00480201': {
      vr: 'US',
      Value: ['123', '123'],
    },
    '00480202': {
      vr: 'US',
      Value: ['123', '123'],
    },
    '00480207': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0048021a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0048021e': {
      vr: 'SL',
      Value: ['-123'],
    },
    '0048021f': {
      vr: 'SL',
      Value: ['-123'],
    },
    '00480301': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00480302': {
      vr: 'UL',
      Value: ['123'],
    },
    '00480303': {
      vr: 'UL',
      Value: ['123'],
    },
    '00500004': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00500010': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00500012': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00500013': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00500014': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00500015': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00500016': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00500017': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00500018': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00500019': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0050001a': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0050001b': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '0050001c': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '0050001d': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '0050001e': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00500020': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00500021': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00520001': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00520002': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00520003': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00520004': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00520006': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00520007': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00520008': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00520009': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00520011': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00520012': {
      vr: 'US',
      Value: ['123'],
    },
    '00520013': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00520014': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00520016': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00520025': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00520026': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00520027': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00520028': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00520029': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00520030': {
      vr: 'SS',
      Value: ['-123'],
    },
    '00520031': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00520033': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00520034': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00520036': {
      vr: 'US',
      Value: ['123'],
    },
    '00520038': {
      vr: 'US',
      Value: ['123'],
    },
    '00520039': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0052003a': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00540010': {
      vr: 'US',
      Value: ['123'],
    },
    '00540011': {
      vr: 'US',
      Value: ['123'],
    },
    '00540012': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00540013': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00540014': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00540015': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00540016': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00540017': {
      vr: 'IS',
      Value: ['123'],
    },
    '00540018': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00540020': {
      vr: 'US',
      Value: ['123'],
    },
    '00540021': {
      vr: 'US',
      Value: ['123'],
    },
    '00540022': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00540030': {
      vr: 'US',
      Value: ['123'],
    },
    '00540031': {
      vr: 'US',
      Value: ['123'],
    },
    '00540032': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00540033': {
      vr: 'US',
      Value: ['123'],
    },
    '00540036': {
      vr: 'IS',
      Value: ['123'],
    },
    '00540038': {
      vr: 'IS',
      Value: ['123'],
    },
    '00540039': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00540050': {
      vr: 'US',
      Value: ['123'],
    },
    '00540051': {
      vr: 'US',
      Value: ['123'],
    },
    '00540052': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00540053': {
      vr: 'US',
      Value: ['123'],
    },
    '00540060': {
      vr: 'US',
      Value: ['123'],
    },
    '00540061': {
      vr: 'US',
      Value: ['123'],
    },
    '00540062': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00540063': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00540070': {
      vr: 'US',
      Value: ['123'],
    },
    '00540071': {
      vr: 'US',
      Value: ['123'],
    },
    '00540072': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00540073': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00540080': {
      vr: 'US',
      Value: ['123'],
    },
    '00540081': {
      vr: 'US',
      Value: ['123'],
    },
    '00540090': {
      vr: 'US',
      Value: ['123'],
    },
    '00540100': {
      vr: 'US',
      Value: ['123'],
    },
    '00540101': {
      vr: 'US',
      Value: ['123'],
    },
    '00540200': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00540202': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00540210': {
      vr: 'IS',
      Value: ['123'],
    },
    '00540211': {
      vr: 'US',
      Value: ['123'],
    },
    '00540220': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00540222': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00540300': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00540302': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00540304': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00540306': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00540308': {
      vr: 'US',
      Value: ['123'],
    },
    '00540400': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00540410': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00540412': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00540414': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00540500': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00540501': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00541000': {
      vr: 'CS',
      Value: ['TEST_CODE', 'TEST_CODE'],
    },
    '00541001': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00541002': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00541004': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00541006': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00541100': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00541101': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00541102': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00541103': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00541104': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00541105': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00541200': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00541201': {
      vr: 'IS',
      Value: ['123', '123'],
    },
    '00541202': {
      vr: 'IS',
      Value: ['123'],
    },
    '00541203': {
      vr: 'DS',
      Value: ['123.45', '123.45'],
    },
    '00541210': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00541220': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00541300': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00541310': {
      vr: 'IS',
      Value: ['123'],
    },
    '00541311': {
      vr: 'IS',
      Value: ['123'],
    },
    '00541320': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00541321': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00541322': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00541323': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00541324': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00541330': {
      vr: 'US',
      Value: ['123'],
    },
    '00541400': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00541401': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00603000': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00603002': {
      vr: 'US',
      Value: ['123'],
    },
    '00603004': {
      vr: 'US',
      Value: ['123'],
    },
    '00603006': {
      vr: 'US',
      Value: ['123'],
    },
    '00603008': {
      vr: 'US',
      Value: ['123'],
    },
    '00603010': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00603020': {
      vr: 'UL',
      Value: ['123'],
    },
    '00620001': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00620002': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00620003': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00620004': {
      vr: 'US',
      Value: ['123'],
    },
    '00620005': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00620006': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00620007': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00620008': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00620009': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '0062000a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0062000b': {
      vr: 'US',
      Value: ['123'],
    },
    '0062000c': {
      vr: 'US',
      Value: ['123'],
    },
    '0062000d': {
      vr: 'US',
      Value: ['123', '123', '123'],
    },
    '0062000e': {
      vr: 'US',
      Value: ['123'],
    },
    '0062000f': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00620010': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00620011': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00620012': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00620013': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00620020': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00620021': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00640002': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00640003': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00640005': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00640007': {
      vr: 'UL',
      Value: ['123', '123', '123'],
    },
    '00640008': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '00640009': {
      vr: 'OF',
      Value: ['123.45'],
    },
    '0064000f': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00640010': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00660001': {
      vr: 'UL',
      Value: ['123'],
    },
    '00660002': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00660003': {
      vr: 'UL',
      Value: ['123'],
    },
    '00660004': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00660009': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0066000a': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '0066000b': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '0066000c': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '0066000d': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0066000e': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00660010': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00660011': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00660012': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00660013': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00660015': {
      vr: 'UL',
      Value: ['123'],
    },
    '00660016': {
      vr: 'OF',
      Value: ['123.45'],
    },
    '00660017': {
      vr: 'FL',
      Value: ['123.45', '123.45', '123.45'],
    },
    '00660018': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00660019': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '0066001a': {
      vr: 'FL',
      Value: ['123.45', '123.45', '123.45', '123.45', '123.45', '123.45'],
    },
    '0066001b': {
      vr: 'FL',
      Value: ['123.45', '123.45', '123.45'],
    },
    '0066001c': {
      vr: 'FL',
      Value: ['123.45', '123.45', '123.45'],
    },
    '0066001e': {
      vr: 'UL',
      Value: ['123'],
    },
    '0066001f': {
      vr: 'US',
      Value: ['123'],
    },
    '00660020': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00660021': {
      vr: 'OF',
      Value: ['123.45'],
    },
    '00660022': {
      vr: 'OD',
      Value: ['123.456'],
    },
    '00660023': {
      vr: 'OW',
      Value: ['01'],
    },
    '00660024': {
      vr: 'OW',
      Value: ['01'],
    },
    '00660025': {
      vr: 'OW',
      Value: ['01'],
    },
    '00660026': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00660027': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00660028': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00660029': {
      vr: 'OW',
      Value: ['01'],
    },
    '0066002a': {
      vr: 'UL',
      Value: ['123'],
    },
    '0066002b': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0066002c': {
      vr: 'UL',
      Value: ['123'],
    },
    '0066002d': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0066002e': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0066002f': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00660030': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00660031': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00660032': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00660034': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00660035': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00660036': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00660037': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00660038': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00660040': {
      vr: 'OL',
      Value: ['00000000'],
    },
    '00660041': {
      vr: 'OL',
      Value: ['00000000'],
    },
    '00660042': {
      vr: 'OL',
      Value: ['00000000'],
    },
    '00660043': {
      vr: 'OL',
      Value: ['00000000'],
    },
    '00660101': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00660102': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00660103': {
      vr: 'OW',
      Value: ['01'],
    },
    '00660104': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00660105': {
      vr: 'UL',
      Value: ['123'],
    },
    '00660106': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00660107': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00660108': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00660121': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00660124': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00660125': {
      vr: 'OF',
      Value: ['123.45'],
    },
    '00660129': {
      vr: 'OL',
      Value: ['00000000'],
    },
    '00660130': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00660132': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00660133': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00660134': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00686210': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00686221': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00686222': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00686223': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00686224': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00686225': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00686226': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00686230': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00686260': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00686265': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00686270': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00686280': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '006862a0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '006862a5': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '006862c0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '006862d0': {
      vr: 'US',
      Value: ['123'],
    },
    '006862d5': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '006862e0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '006862f0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '006862f2': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00686300': {
      vr: 'OB',
      Value: ['01'],
    },
    '00686310': {
      vr: 'US',
      Value: ['123'],
    },
    '00686320': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00686330': {
      vr: 'US',
      Value: ['123'],
    },
    '00686340': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00686345': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00686346': {
      vr: 'FD',
      Value: ['123.456789', '123.456789'],
    },
    '00686347': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789', '123.456789'],
    },
    '00686350': {
      vr: 'US',
      Value: ['123'],
    },
    '00686360': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00686380': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00686390': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '006863a0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '006863a4': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '006863a8': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '006863ac': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '006863b0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '006863c0': {
      vr: 'US',
      Value: ['123'],
    },
    '006863d0': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '006863e0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '006863f0': {
      vr: 'US',
      Value: ['123'],
    },
    '00686400': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00686410': {
      vr: 'US',
      Value: ['123'],
    },
    '00686420': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00686430': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00686440': {
      vr: 'US',
      Value: ['123'],
    },
    '00686450': {
      vr: 'FD',
      Value: ['123.456789', '123.456789'],
    },
    '00686460': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789', '123.456789'],
    },
    '00686470': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00686490': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '006864a0': {
      vr: 'FD',
      Value: ['123.456789', '123.456789'],
    },
    '006864c0': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '006864d0': {
      vr: 'FD',
      Value: [
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
      ],
    },
    '006864f0': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '00686500': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00686510': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00686520': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00686530': {
      vr: 'US',
      Value: ['123'],
    },
    '00686540': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00686545': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00686550': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00686560': {
      vr: 'FD',
      Value: ['123.456789', '123.456789'],
    },
    '00686590': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '006865a0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '006865b0': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789', '123.456789'],
    },
    '006865d0': {
      vr: 'FD',
      Value: [
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
      ],
    },
    '006865e0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '006865f0': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789', '123.456789'],
    },
    '00686610': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '00686620': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '00687001': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00687002': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00687003': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00687004': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00687005': {
      vr: 'UR',
      Value: ['https://sample.com'],
    },
    '006a0001': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '006a0002': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '006a0003': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '006a0005': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '006a0006': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '006a0007': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '006a0008': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '006a0009': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '006a000a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '006a000b': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '006a000c': {
      vr: 'UL',
      Value: ['123'],
    },
    '006a000d': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '006a000e': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '006a000f': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '006a0010': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '006a0011': {
      vr: 'OL',
      Value: ['00000000'],
    },
    '00700001': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00700002': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00700003': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00700004': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00700005': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00700006': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00700008': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00700009': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00700010': {
      vr: 'FL',
      Value: ['123.45', '123.45'],
    },
    '00700011': {
      vr: 'FL',
      Value: ['123.45', '123.45'],
    },
    '00700012': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00700014': {
      vr: 'FL',
      Value: ['123.45', '123.45'],
    },
    '00700015': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00700020': {
      vr: 'US',
      Value: ['123'],
    },
    '00700021': {
      vr: 'US',
      Value: ['123'],
    },
    '00700022': {
      vr: 'FL',
      Value: ['123.45', '123.45'],
    },
    '00700023': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00700024': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00700040': {
      vr: 'IS',
      Value: ['123'],
    },
    '00700041': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00700042': {
      vr: 'US',
      Value: ['123'],
    },
    '00700050': {
      vr: 'US',
      Value: ['123', '123'],
    },
    '00700051': {
      vr: 'US',
      Value: ['123', '123'],
    },
    '00700052': {
      vr: 'SL',
      Value: ['-123', '-123'],
    },
    '00700053': {
      vr: 'SL',
      Value: ['-123', '-123'],
    },
    '0070005a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00700060': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00700062': {
      vr: 'IS',
      Value: ['123'],
    },
    '00700066': {
      vr: 'US',
      Value: ['123'],
    },
    '00700067': {
      vr: 'US',
      Value: ['123', '123', '123'],
    },
    '00700068': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00700080': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00700081': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00700082': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00700083': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '00700084': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '00700086': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00700087': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00700100': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00700101': {
      vr: 'DS',
      Value: ['123.45', '123.45'],
    },
    '00700102': {
      vr: 'IS',
      Value: ['123', '123'],
    },
    '00700103': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00700207': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00700208': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00700209': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00700226': {
      vr: 'UL',
      Value: ['123'],
    },
    '00700227': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00700228': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00700229': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00700230': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00700231': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00700232': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00700233': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00700234': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00700241': {
      vr: 'US',
      Value: ['123', '123', '123'],
    },
    '00700242': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00700243': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00700244': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00700245': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00700246': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00700247': {
      vr: 'US',
      Value: ['123', '123', '123'],
    },
    '00700248': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00700249': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00700250': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00700251': {
      vr: 'US',
      Value: ['123', '123', '123'],
    },
    '00700252': {
      vr: 'US',
      Value: ['123', '123', '123'],
    },
    '00700253': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00700254': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00700255': {
      vr: 'UL',
      Value: ['123'],
    },
    '00700256': {
      vr: 'OB',
      Value: ['01'],
    },
    '00700257': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00700258': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00700261': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00700262': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00700273': {
      vr: 'FL',
      Value: ['123.45', '123.45'],
    },
    '00700274': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00700278': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00700279': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00700282': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00700284': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00700285': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00700287': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00700288': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00700289': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00700294': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00700295': {
      vr: 'UL',
      Value: ['123'],
    },
    '00700306': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00700308': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00700309': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0070030a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0070030b': {
      vr: 'FD',
      Value: [
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
      ],
    },
    '0070030c': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0070030d': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0070030f': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00700310': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00700311': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00700312': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00700314': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00700315': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00700318': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0070031a': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '0070031b': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '0070031c': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0070031e': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0070031f': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00700401': {
      vr: 'US',
      Value: ['123', '123', '123'],
    },
    '00700402': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00700403': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00700404': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00700405': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00701101': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00701102': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00701103': {
      vr: 'US',
      Value: ['123'],
    },
    '00701104': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00701201': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00701202': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00701203': {
      vr: 'US',
      Value: ['123'],
    },
    '00701204': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00701205': {
      vr: 'US',
      Value: ['123'],
    },
    '00701206': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00701207': {
      vr: 'US',
      Value: ['123'],
    },
    '00701208': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00701209': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '0070120a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0070120b': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0070120c': {
      vr: 'US',
      Value: ['123'],
    },
    '0070120d': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00701301': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00701302': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00701303': {
      vr: 'FD',
      Value: [
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
      ],
    },
    '00701304': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00701305': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789', '123.456789'],
    },
    '00701306': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '00701309': {
      vr: 'US',
      Value: ['123'],
    },
    '00701501': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00701502': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00701503': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00701505': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '00701507': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '00701508': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '0070150c': {
      vr: 'UL',
      Value: ['123'],
    },
    '0070150d': {
      vr: 'OD',
      Value: ['123.456'],
    },
    '00701511': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '00701512': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00701602': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00701603': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '00701604': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '00701605': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '00701606': {
      vr: 'FD',
      Value: [
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
      ],
    },
    '00701607': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00701701': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00701702': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00701703': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '00701704': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00701705': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00701706': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00701801': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00701802': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00701803': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00701804': {
      vr: 'US',
      Value: ['123'],
    },
    '00701805': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00701806': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00701807': {
      vr: 'US',
      Value: ['123', '123', '123'],
    },
    '00701808': {
      vr: 'OB',
      Value: ['01'],
    },
    '00701901': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00701903': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00701904': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00701905': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00701907': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00701a01': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00701a03': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00701a04': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00701a05': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00701a06': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00701a07': {
      vr: 'OD',
      Value: ['123.456'],
    },
    '00701a08': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00701a09': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00701b01': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00701b02': {
      vr: 'US',
      Value: ['123'],
    },
    '00701b03': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00701b04': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00701b06': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00701b07': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00701b08': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00701b11': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00701b12': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00701b13': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00701b14': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00720002': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00720004': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00720006': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720008': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '0072000a': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '0072000c': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0072000e': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00720010': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00720012': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00720014': {
      vr: 'US',
      Value: ['123'],
    },
    '00720020': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00720022': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00720024': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720026': {
      vr: 'AT',
      Value: ['(0010,0010)'],
    },
    '00720028': {
      vr: 'US',
      Value: ['123'],
    },
    '00720030': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00720032': {
      vr: 'US',
      Value: ['123'],
    },
    '00720034': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720038': {
      vr: 'US',
      Value: ['123', '123'],
    },
    '0072003a': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0072003c': {
      vr: 'SS',
      Value: ['-123', '-123'],
    },
    '0072003e': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00720040': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00720050': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720052': {
      vr: 'AT',
      Value: ['(0010,0010)'],
    },
    '00720054': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00720056': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '0072005e': {
      vr: 'AE',
      Value: ['TEST_AE_TITLE'],
    },
    '0072005f': {
      vr: 'AS',
      Value: ['018Y'],
    },
    '00720060': {
      vr: 'AT',
      Value: ['(0010,0010)'],
    },
    '00720061': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '00720062': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720063': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '00720064': {
      vr: 'IS',
      Value: ['123'],
    },
    '00720065': {
      vr: 'OB',
      Value: ['01'],
    },
    '00720066': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00720067': {
      vr: 'OF',
      Value: ['123.45'],
    },
    '00720068': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00720069': {
      vr: 'OW',
      Value: ['01'],
    },
    '0072006a': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '0072006b': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '0072006c': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '0072006d': {
      vr: 'UN',
      Value: ['Unknown'],
    },
    '0072006e': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '0072006f': {
      vr: 'UC',
      Value: ['Unlimited Characters Test'],
    },
    '00720070': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00720071': {
      vr: 'UR',
      Value: ['https://sample.com'],
    },
    '00720072': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00720073': {
      vr: 'OD',
      Value: ['123.456'],
    },
    '00720074': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00720075': {
      vr: 'OL',
      Value: ['00000000'],
    },
    '00720076': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '00720078': {
      vr: 'UL',
      Value: ['123'],
    },
    '0072007a': {
      vr: 'US',
      Value: ['123'],
    },
    '0072007c': {
      vr: 'SL',
      Value: ['-123'],
    },
    '0072007e': {
      vr: 'SS',
      Value: ['-123'],
    },
    '0072007f': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00720080': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00720081': {
      vr: 'OV',
      Value: ['123'],
    },
    '00720082': {
      vr: 'SV',
      Value: ['123'],
    },
    '00720083': {
      vr: 'UV',
      Value: ['123'],
    },
    '00720100': {
      vr: 'US',
      Value: ['123'],
    },
    '00720102': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00720104': {
      vr: 'US',
      Value: ['123'],
    },
    '00720106': {
      vr: 'US',
      Value: ['123'],
    },
    '00720108': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789', '123.456789'],
    },
    '0072010a': {
      vr: 'US',
      Value: ['123'],
    },
    '0072010c': {
      vr: 'US',
      Value: ['123'],
    },
    '0072010e': {
      vr: 'US',
      Value: ['123'],
    },
    '00720200': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00720202': {
      vr: 'US',
      Value: ['123'],
    },
    '00720203': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00720204': {
      vr: 'US',
      Value: ['123'],
    },
    '00720206': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00720208': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720210': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00720212': {
      vr: 'US',
      Value: ['123', '123'],
    },
    '00720214': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00720216': {
      vr: 'US',
      Value: ['123'],
    },
    '00720218': {
      vr: 'US',
      Value: ['123'],
    },
    '00720300': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00720302': {
      vr: 'US',
      Value: ['123'],
    },
    '00720304': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720306': {
      vr: 'US',
      Value: ['123'],
    },
    '00720308': {
      vr: 'US',
      Value: ['123'],
    },
    '00720310': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720312': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720314': {
      vr: 'US',
      Value: ['123'],
    },
    '00720316': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720318': {
      vr: 'US',
      Value: ['123'],
    },
    '00720320': {
      vr: 'US',
      Value: ['123'],
    },
    '00720330': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00720400': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00720402': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720404': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720406': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720420': {
      vr: 'US',
      Value: ['123', '123', '123'],
    },
    '00720421': {
      vr: 'US',
      Value: ['123', '123', '123'],
    },
    '00720422': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00720424': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00720427': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00720430': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00720432': {
      vr: 'US',
      Value: ['123', '123'],
    },
    '00720434': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720500': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720510': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720512': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00720514': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00720516': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720520': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720600': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00720602': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720604': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720700': {
      vr: 'CS',
      Value: ['TEST_CODE', 'TEST_CODE'],
    },
    '00720702': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720704': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720705': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00720706': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720710': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720712': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720714': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720716': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720717': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00720718': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00740120': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00740121': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00741000': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00741002': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00741004': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00741006': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00741007': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00741008': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0074100a': {
      vr: 'UR',
      Value: ['https://sample.com'],
    },
    '0074100c': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '0074100e': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00741020': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00741022': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00741024': {
      vr: 'IS',
      Value: ['123'],
    },
    '00741025': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00741026': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00741027': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00741028': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '0074102a': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '0074102b': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '0074102c': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '0074102d': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00741030': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00741032': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00741034': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00741036': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00741038': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '0074103a': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45', '123.45'],
    },
    '00741040': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00741042': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00741044': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00741046': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00741048': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0074104a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0074104c': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0074104e': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00741050': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00741052': {
      vr: 'AT',
      Value: ['(0010,0010)'],
    },
    '00741054': {
      vr: 'UL',
      Value: ['123'],
    },
    '00741056': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00741057': {
      vr: 'IS',
      Value: ['123'],
    },
    '00741200': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00741202': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00741204': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00741210': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00741212': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00741216': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00741220': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00741222': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00741224': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00741230': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00741234': {
      vr: 'AE',
      Value: ['TEST_AE_TITLE'],
    },
    '00741236': {
      vr: 'AE',
      Value: ['TEST_AE_TITLE'],
    },
    '00741238': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '00741242': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00741244': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00741246': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00741324': {
      vr: 'UL',
      Value: ['123'],
    },
    '00741338': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '0074133a': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789', '123.456789'],
    },
    '00741401': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00741402': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00741403': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00741404': {
      vr: 'IS',
      Value: ['123'],
    },
    '00741405': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00741406': {
      vr: 'IS',
      Value: ['123'],
    },
    '00741407': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00741408': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '00741409': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0074140a': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0074140b': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '0074140c': {
      vr: 'IS',
      Value: ['123'],
    },
    '0074140d': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0074140e': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00760001': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00760003': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00760006': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00760008': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0076000a': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0076000c': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0076000e': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00760010': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00760020': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00760030': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00760032': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00760034': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00760036': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00760038': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00760040': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00760055': {
      vr: 'US',
      Value: ['123'],
    },
    '00760060': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00760070': {
      vr: 'US',
      Value: ['123'],
    },
    '00760080': {
      vr: 'US',
      Value: ['123'],
    },
    '00760090': {
      vr: 'US',
      Value: ['123'],
    },
    '007600a0': {
      vr: 'US',
      Value: ['123'],
    },
    '007600b0': {
      vr: 'US',
      Value: ['123'],
    },
    '007600c0': {
      vr: 'US',
      Value: ['123'],
    },
    '00780001': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00780010': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00780020': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00780024': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00780026': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00780028': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0078002a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '0078002e': {
      vr: 'US',
      Value: ['123'],
    },
    '00780050': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '00780060': {
      vr: 'FD',
      Value: [
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
      ],
    },
    '00780070': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00780090': {
      vr: 'FD',
      Value: ['123.456789', '123.456789'],
    },
    '007800a0': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789', '123.456789'],
    },
    '007800b0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '007800b2': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '007800b4': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '007800b6': {
      vr: 'US',
      Value: ['123'],
    },
    '007800b8': {
      vr: 'US',
      Value: ['123'],
    },
    '00800001': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00800002': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00800003': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00800004': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00800005': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '00800006': {
      vr: 'US',
      Value: ['123'],
    },
    '00800007': {
      vr: 'US',
      Value: ['123', '123', '123'],
    },
    '00800008': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00800009': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00800010': {
      vr: 'OF',
      Value: ['123.45'],
    },
    '00800011': {
      vr: 'OF',
      Value: ['123.45'],
    },
    '00800012': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00800013': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00820001': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00820003': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00820004': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00820005': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00820006': {
      vr: 'UL',
      Value: ['123'],
    },
    '00820007': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00820008': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '0082000a': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '0082000c': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00820010': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00820016': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00820017': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00820018': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00820019': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00820021': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00820022': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00820023': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00820032': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00820033': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00820034': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00820035': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00820036': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00820037': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '00820038': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00880130': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '00880140': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00880200': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00880904': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00880906': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '00880910': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '00880912': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '01000410': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '01000420': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '01000424': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '01000426': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '04000005': {
      vr: 'US',
      Value: ['123'],
    },
    '04000010': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '04000015': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '04000020': {
      vr: 'AT',
      Value: ['(0010,0010)'],
    },
    '04000100': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '04000105': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '04000110': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '04000115': {
      vr: 'OB',
      Value: ['01'],
    },
    '04000120': {
      vr: 'OB',
      Value: ['01'],
    },
    '04000305': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '04000310': {
      vr: 'OB',
      Value: ['01'],
    },
    '04000315': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '04000401': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '04000402': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '04000403': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '04000404': {
      vr: 'OB',
      Value: ['01'],
    },
    '04000500': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '04000510': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '04000520': {
      vr: 'OB',
      Value: ['01'],
    },
    '04000550': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '04000551': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '04000552': {
      vr: 'OB',
      Value: ['01'],
    },
    '04000561': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '04000562': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '04000563': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '04000564': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '04000565': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '04000600': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '1000xxx0': {
      vr: 'US',
      Value: ['123', '123', '123'],
    },
    '1000xxx1': {
      vr: 'US',
      Value: ['123', '123', '123'],
    },
    '1000xxx2': {
      vr: 'US',
      Value: ['123'],
    },
    '1000xxx3': {
      vr: 'US',
      Value: ['123', '123', '123'],
    },
    '1000xxx4': {
      vr: 'US',
      Value: ['123'],
    },
    '1000xxx5': {
      vr: 'US',
      Value: ['123', '123', '123'],
    },
    '1010xxxx': {
      vr: 'US',
      Value: ['123'],
    },
    '2000001e': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '2000006a': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '200000a0': {
      vr: 'US',
      Value: ['123'],
    },
    '200000a1': {
      vr: 'US',
      Value: ['123'],
    },
    '200000a2': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '200000a4': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '200000a8': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '201000a6': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '201000a7': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '201000a8': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '201000a9': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '2010015e': {
      vr: 'US',
      Value: ['123'],
    },
    '202000a0': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '202000a2': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '213000a0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '213000c0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '2200000a': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '2200000b': {
      vr: 'US',
      Value: ['123'],
    },
    '2200000c': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '2200000d': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '2200000e': {
      vr: 'AT',
      Value: ['(0010,0010)'],
    },
    '2200000f': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '3002000a': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '3002000c': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '3002000d': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45'],
    },
    '3002000e': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '3002010a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3002010b': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3002010c': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3002010d': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3002010e': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3002010f': {
      vr: 'FD',
      Value: [
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
      ],
    },
    '3002011a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3002011b': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3002011c': {
      vr: 'US',
      Value: ['123'],
    },
    '3002011d': {
      vr: 'US',
      Value: ['123'],
    },
    '3002011e': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3002011f': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3002012a': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '3002012b': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3002012c': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3002012d': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '3002012e': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '3002012f': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '3004000a': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '3004000c': {
      vr: 'DS',
      Value: ['123.45', '123.45'],
    },
    '3004000e': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '3006002a': {
      vr: 'IS',
      Value: ['123', '123', '123'],
    },
    '3006002c': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '3006002d': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '3006002e': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '3006004a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3006004b': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3006004c': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3006004d': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3006004e': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3006004f': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300600a0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300600a4': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300600a6': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '300600b0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300600b2': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300600b4': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300600b6': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300600b7': {
      vr: 'US',
      Value: ['123'],
    },
    '300600b8': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300600b9': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300600c0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300600c2': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '300600c4': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300600c6': {
      vr: 'DS',
      Value: [
        '123.45',
        '123.45',
        '123.45',
        '123.45',
        '123.45',
        '123.45',
        '123.45',
        '123.45',
        '123.45',
        '123.45',
        '123.45',
        '123.45',
        '123.45',
        '123.45',
        '123.45',
        '123.45',
      ],
    },
    '300600c8': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300600c9': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300600ca': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300600cb': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3008002a': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '3008002b': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '3008002c': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '3008003a': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '3008003b': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '3008005a': {
      vr: 'IS',
      Value: ['123'],
    },
    '3008006a': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '3008007a': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300800a0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300800a1': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300800a2': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300800a3': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300800a4': {
      vr: 'FD',
      Value: ['123.456789', '123.456789'],
    },
    '300800b0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300800c0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300800d0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300800d1': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300800e0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300800f0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300800f2': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300800f4': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300800f6': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3008013a': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '3008013c': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0002': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a0003': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a0004': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '300a0006': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '300a0007': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '300a0009': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a000a': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a000b': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a000c': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a000e': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '300a0010': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0012': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a0013': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '300a0014': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0015': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0016': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a0018': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45'],
    },
    '300a001a': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0020': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0021': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0022': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0023': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0025': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0026': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0027': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0028': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a002a': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a002b': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a002c': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a002d': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0040': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0042': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a0043': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a0044': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0046': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0048': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a004a': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a004b': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a004c': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a004e': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a004f': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0050': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0051': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0052': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0053': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0055': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0070': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0071': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a0072': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a0078': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a0079': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a007a': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a007b': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '300a0080': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a0082': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45'],
    },
    '300a0083': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '300a0084': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0086': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0088': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0089': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a008a': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a008b': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a008c': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a008d': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a008e': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a008f': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0090': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0091': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0092': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0093': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0094': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a00a0': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a00a2': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45'],
    },
    '300a00a4': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a00b0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a00b2': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a00b3': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a00b4': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a00b6': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a00b8': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a00ba': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a00bb': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a00bc': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a00be': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45'],
    },
    '300a00c0': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a00c2': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a00c3': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '300a00c4': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a00c5': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300a00c6': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a00c7': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a00c8': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a00ca': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a00cc': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a00ce': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a00d0': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a00d1': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a00d2': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a00d3': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a00d4': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a00d5': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a00d6': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a00d7': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a00d8': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a00d9': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a00da': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a00db': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a00dc': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a00dd': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '300a00de': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a00e0': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a00e1': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a00e2': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a00e3': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a00e4': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a00e5': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a00e6': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a00e7': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a00e8': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a00e9': {
      vr: 'DS',
      Value: ['123.45', '123.45'],
    },
    '300a00ea': {
      vr: 'DS',
      Value: ['123.45', '123.45'],
    },
    '300a00eb': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a00ec': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a00ed': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a00ee': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a00ef': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a00f0': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a00f2': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a00f3': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a00f4': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a00f5': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a00f6': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a00f7': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a00f8': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a00f9': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a00fa': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a00fb': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a00fc': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a00fe': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a0100': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0102': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0104': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a0106': {
      vr: 'DS',
      Value: ['123.45', '123.45'],
    },
    '300a0107': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0108': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a0109': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a010a': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a010c': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a010e': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0110': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a0111': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0112': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a0114': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0115': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0116': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0118': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a011a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a011c': {
      vr: 'DS',
      Value: ['123.45', '123.45'],
    },
    '300a011e': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a011f': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0120': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0121': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0122': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0123': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0124': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0125': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0126': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0128': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0129': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a012a': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a012c': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45'],
    },
    '300a012e': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45'],
    },
    '300a0130': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0131': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0132': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0133': {
      vr: 'FL',
      Value: ['123.45', '123.45', '123.45'],
    },
    '300a0134': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0140': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0142': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0144': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0146': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0148': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a014a': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a014c': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a014e': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0150': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0151': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0152': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0153': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0154': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0155': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0180': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0182': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a0183': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a0184': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a0190': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0192': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0194': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a0196': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '300a0198': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a0199': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a019a': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a01a0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a01a2': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a01a4': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a01a6': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '300a01a8': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a01b0': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a01b2': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '300a01b4': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a01b6': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a01b8': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a01ba': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '300a01bc': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a01d0': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '300a01d2': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a01d4': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a01d6': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0200': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0202': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0206': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0210': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0212': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a0214': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0216': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a0218': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a021a': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a021b': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a021c': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a0222': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0224': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0226': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a0228': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0229': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a022a': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a022b': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a022c': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '300a022e': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '300a0230': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0232': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0234': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a0236': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a0238': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a0240': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a0242': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a0244': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a0250': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0260': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0262': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a0263': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a0264': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0266': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a026a': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a026c': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0271': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0272': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0273': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a0274': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0280': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0282': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a0284': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0286': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0288': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a028a': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a028c': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0290': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a0291': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a0292': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0294': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a0296': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0298': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a029c': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a029e': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a02a0': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a02a1': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a02a2': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a02a4': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a02b0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a02b2': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a02b3': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a02b4': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a02b8': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a02ba': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a02c8': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a02d0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a02d2': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a02d4': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45'],
    },
    '300a02d6': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a02e0': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a02e1': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a02e2': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a02e3': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a02e4': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a02e5': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a02e6': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a02e7': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a02e8': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a02ea': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a02eb': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '300a0302': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a0304': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a0306': {
      vr: 'SS',
      Value: ['-123'],
    },
    '300a0308': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0309': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a030a': {
      vr: 'FL',
      Value: ['123.45', '123.45'],
    },
    '300a030c': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a030d': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a030f': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a0312': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a0314': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0316': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a0318': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a0320': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0322': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a0330': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a0332': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0334': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a0336': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a0338': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a033a': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a033c': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0340': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a0342': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0344': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a0346': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a0348': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a034a': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a034c': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a0350': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0352': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a0354': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a0355': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a0356': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0358': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a035a': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0360': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0362': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a0364': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0366': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0370': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0372': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a0374': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0380': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0382': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0384': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0386': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0388': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a038a': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a038f': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0390': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a0391': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a0392': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a0393': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0394': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0395': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0396': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0398': {
      vr: 'FL',
      Value: ['123.45', '123.45'],
    },
    '300a0399': {
      vr: 'FL',
      Value: ['123.45', '123.45'],
    },
    '300a039a': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a03a0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a03a2': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a03a4': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a03a6': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a03a8': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a03aa': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a03ac': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0401': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0402': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '300a0410': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0412': {
      vr: 'FL',
      Value: ['123.45', '123.45', '123.45'],
    },
    '300a0420': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0421': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a0422': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '300a0423': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0424': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a0425': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0426': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0431': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0432': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0433': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0434': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0435': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0436': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0440': {
      vr: 'IS',
      Value: ['123'],
    },
    '300a0441': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0442': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0443': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0450': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0451': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0452': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0453': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0501': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0502': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0503': {
      vr: 'FL',
      Value: ['123.45', '123.45'],
    },
    '300a0504': {
      vr: 'FL',
      Value: ['123.45', '123.45'],
    },
    '300a0505': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0506': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0507': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0508': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300a0509': {
      vr: 'FL',
      Value: ['123.45', '123.45'],
    },
    '300a0510': {
      vr: 'FL',
      Value: ['123.45', '123.45'],
    },
    '300a0511': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0512': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0600': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0601': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0602': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0603': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0604': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0605': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0606': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0607': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0608': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a0609': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '300a060a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a060b': {
      vr: 'US',
      Value: ['123'],
    },
    '300a060c': {
      vr: 'US',
      Value: ['123'],
    },
    '300a060d': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300a060e': {
      vr: 'US',
      Value: ['123'],
    },
    '300a060f': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0610': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0611': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a0612': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300a0613': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300a0614': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0615': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a0616': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0617': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0618': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0619': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a061a': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a061b': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a061c': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a061d': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a061e': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '300a061f': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0620': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0621': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0622': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0623': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a0624': {
      vr: 'FD',
      Value: ['123.456789', '123.456789'],
    },
    '300a0625': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300a0626': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300a0627': {
      vr: 'FD',
      Value: ['123.456789', '123.456789', '123.456789'],
    },
    '300a0628': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300a0629': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a062a': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a062b': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a062c': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300a062d': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a062e': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300a062f': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0630': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0631': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0632': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0634': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300a0635': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0636': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0637': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0638': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0639': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a063a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a063b': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a063c': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300a063d': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300a063e': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a063f': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0640': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300a0641': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0642': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300a0643': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300a0644': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0645': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300a0646': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0647': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0648': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0649': {
      vr: 'FD',
      Value: ['123.456789', '123.456789'],
    },
    '300a064a': {
      vr: 'FD',
      Value: ['123.456789', '123.456789'],
    },
    '300a064b': {
      vr: 'FD',
      Value: ['123.456789', '123.456789'],
    },
    '300a064c': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a064d': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a064e': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a064f': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0650': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '300a0651': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0652': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300a0653': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300a0654': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300a0655': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0656': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0657': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0658': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0659': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a065a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a065b': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a065c': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a065d': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a065e': {
      vr: 'US',
      Value: ['123'],
    },
    '300a065f': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0660': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0661': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0662': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0663': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0664': {
      vr: 'OF',
      Value: ['123.45'],
    },
    '300a0665': {
      vr: 'OF',
      Value: ['123.45'],
    },
    '300a0666': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300a0667': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0668': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0669': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300a066a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a066b': {
      vr: 'OF',
      Value: ['123.45'],
    },
    '300a066c': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a066d': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300a066e': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300a066f': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0670': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0671': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0672': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0673': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0674': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0675': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '300a0676': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '300a0677': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0678': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0679': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300a067a': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300a067b': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a067c': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '300a067d': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '300a067e': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a067f': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0680': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0681': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0682': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300a0683': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0684': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0685': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0686': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0687': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0688': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300a0689': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a068a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a068b': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0700': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '300a0701': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0702': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0703': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0704': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0705': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0706': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0707': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0708': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0709': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0714': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0715': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0716': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0722': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0723': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0730': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '300a0731': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0732': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300a0733': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0734': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '300a0735': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '300a0736': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '300a073a': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '300a073b': {
      vr: 'US',
      Value: ['123'],
    },
    '300a073e': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a073f': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0740': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0741': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '300a0742': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '300a0743': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0744': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0745': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0746': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0760': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '300a0761': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0762': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0772': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0773': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0774': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0780': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0782': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0783': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '300a0784': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0785': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '300a0786': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0787': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0788': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0789': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a078a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a078b': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a078c': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a078d': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a078e': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '300a078f': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0790': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0791': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0792': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '300a0793': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0794': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '300a0795': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0796': {
      vr: 'US',
      Value: ['123'],
    },
    '300a0797': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0798': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a0799': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a079a': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300a079b': {
      vr: 'FD',
      Value: [
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
        '123.456789',
      ],
    },
    '300a079c': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a079d': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300a079e': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300c0002': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300c0004': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300c0006': {
      vr: 'IS',
      Value: ['123'],
    },
    '300c0007': {
      vr: 'IS',
      Value: ['123'],
    },
    '300c0008': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300c0009': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '300c000a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300c000c': {
      vr: 'IS',
      Value: ['123'],
    },
    '300c000e': {
      vr: 'IS',
      Value: ['123'],
    },
    '300c0020': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300c0022': {
      vr: 'IS',
      Value: ['123'],
    },
    '300c0040': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300c0042': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300c0050': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300c0051': {
      vr: 'IS',
      Value: ['123'],
    },
    '300c0055': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300c0060': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300c006a': {
      vr: 'IS',
      Value: ['123'],
    },
    '300c0080': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300c00a0': {
      vr: 'IS',
      Value: ['123'],
    },
    '300c00b0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300c00c0': {
      vr: 'IS',
      Value: ['123'],
    },
    '300c00d0': {
      vr: 'IS',
      Value: ['123'],
    },
    '300c00e0': {
      vr: 'IS',
      Value: ['123'],
    },
    '300c00f0': {
      vr: 'IS',
      Value: ['123'],
    },
    '300c00f2': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300c00f4': {
      vr: 'IS',
      Value: ['123'],
    },
    '300c00f6': {
      vr: 'IS',
      Value: ['123'],
    },
    '300c0100': {
      vr: 'IS',
      Value: ['123'],
    },
    '300c0102': {
      vr: 'IS',
      Value: ['123'],
    },
    '300c0104': {
      vr: 'IS',
      Value: ['123'],
    },
    '300c0111': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300c0112': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300c0113': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '300c0114': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300c0115': {
      vr: 'FL',
      Value: ['123.45'],
    },
    '300c0116': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300c0117': {
      vr: 'US',
      Value: ['123'],
    },
    '300c0118': {
      vr: 'US',
      Value: ['123'],
    },
    '300c0119': {
      vr: 'US',
      Value: ['123'],
    },
    '300c0120': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300c0121': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300c0122': {
      vr: 'FD',
      Value: ['123.456789', '123.456789'],
    },
    '300c0123': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300c0124': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '300c0125': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300c0126': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300c0127': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '300c0128': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '300c0129': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300e0002': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '300e0004': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '300e0005': {
      vr: 'TM',
      Value: ['123000.000000'],
    },
    '300e0008': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '3010000a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3010000b': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '3010000c': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '3010000d': {
      vr: 'US',
      Value: ['123'],
    },
    '3010000e': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '3010000f': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '3010001a': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '3010001b': {
      vr: 'UC',
      Value: ['Unlimited Characters Test'],
    },
    '3010001c': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '3010001d': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '3010001e': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '3010001f': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '3010002a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3010002b': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3010002c': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3010002d': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '3010002e': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3010002f': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3010003a': {
      vr: 'US',
      Value: ['123'],
    },
    '3010003b': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '3010003c': {
      vr: 'US',
      Value: ['123'],
    },
    '3010003d': {
      vr: 'US',
      Value: ['123'],
    },
    '3010003e': {
      vr: 'US',
      Value: ['123'],
    },
    '3010003f': {
      vr: 'US',
      Value: ['123'],
    },
    '3010004a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3010004b': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3010004c': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '3010004d': {
      vr: 'DA',
      Value: ['20250101'],
    },
    '3010004e': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3010004f': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '3010005a': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '3010005b': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3010005c': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '3010005d': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3010005e': {
      vr: 'US',
      Value: ['123'],
    },
    '3010005f': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3010006a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3010006b': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3010006c': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3010006d': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '3010006e': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '3010006f': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '3010007a': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '3010007b': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '3010007c': {
      vr: 'IS',
      Value: ['123'],
    },
    '3010007d': {
      vr: 'US',
      Value: ['123'],
    },
    '3010007e': {
      vr: 'US',
      Value: ['123'],
    },
    '3010007f': {
      vr: 'UT',
      Value: ['Test Unlimited Text'],
    },
    '3010009a': {
      vr: 'FD',
      Value: ['123.456789'],
    },
    '301000a0': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '400800ff': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '4008010a': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '4008010b': {
      vr: 'ST',
      Value: ['Test Short Text'],
    },
    '4008010c': {
      vr: 'PN',
      Value: ['Doe^John'],
    },
    '4008011a': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '4010100a': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '4010101a': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '4010101b': {
      vr: 'FL',
      Value: ['123.45', '123.45', '123.45'],
    },
    '4010101c': {
      vr: 'FL',
      Value: ['123.45', '123.45', '123.45'],
    },
    '4010101d': {
      vr: 'FL',
      Value: ['123.45', '123.45', '123.45', '123.45', '123.45', '123.45'],
    },
    '4010101e': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '4010101f': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '4010102a': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '4010102b': {
      vr: 'DT',
      Value: ['20250101123000.000000'],
    },
    '4010103a': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '4010106c': {
      vr: 'OB',
      Value: ['01'],
    },
    '4010106d': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '4010106e': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '4010106f': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '4010107a': {
      vr: 'FL',
      Value: ['123.45', '123.45', '123.45'],
    },
    '4010107b': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '4010107c': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '4010107d': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '4010107e': {
      vr: 'DS',
      Value: ['123.45', '123.45', '123.45', '123.45', '123.45', '123.45'],
    },
    '4ffe0001': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '50xx0005': {
      vr: 'US',
      Value: ['123'],
    },
    '50xx0010': {
      vr: 'US',
      Value: ['123'],
    },
    '50xx0020': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '50xx0022': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '50xx0030': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '50xx0040': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '50xx0103': {
      vr: 'US',
      Value: ['123'],
    },
    '50xx0104': {
      vr: 'US',
      Value: ['123'],
    },
    '50xx0105': {
      vr: 'US',
      Value: ['123'],
    },
    '50xx0106': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '50xx0110': {
      vr: 'US',
      Value: ['123'],
    },
    '50xx0112': {
      vr: 'US',
      Value: ['123'],
    },
    '50xx0114': {
      vr: 'US',
      Value: ['123'],
    },
    '50xx1001': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '50xx2000': {
      vr: 'US',
      Value: ['123'],
    },
    '50xx2002': {
      vr: 'US',
      Value: ['123'],
    },
    '50xx2004': {
      vr: 'US',
      Value: ['123'],
    },
    '50xx2006': {
      vr: 'UL',
      Value: ['123'],
    },
    '50xx2008': {
      vr: 'UL',
      Value: ['123'],
    },
    '50xx200a': {
      vr: 'UL',
      Value: ['123'],
    },
    '50xx200c': {
      vr: 'OB',
      Value: ['01'],
    },
    '50xx200e': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '50xx2500': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '50xx2600': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '50xx2610': {
      vr: 'US',
      Value: ['123'],
    },
    '50xx3000': {
      vr: 'OB',
      Value: ['01'],
    },
    '5400100a': {
      vr: 'OB',
      Value: ['01'],
    },
    '60xx0010': {
      vr: 'US',
      Value: ['123'],
    },
    '60xx0011': {
      vr: 'US',
      Value: ['123'],
    },
    '60xx0012': {
      vr: 'US',
      Value: ['123'],
    },
    '60xx0015': {
      vr: 'IS',
      Value: ['123'],
    },
    '60xx0022': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '60xx0040': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '60xx0045': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '60xx0050': {
      vr: 'SS',
      Value: ['-123', '-123'],
    },
    '60xx0051': {
      vr: 'US',
      Value: ['123'],
    },
    '60xx0052': {
      vr: 'US',
      Value: ['123'],
    },
    '60xx0060': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '60xx0061': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '60xx0062': {
      vr: 'SH',
      Value: ['Test Short String'],
    },
    '60xx0063': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '60xx0066': {
      vr: 'AT',
      Value: ['(0010,0010)'],
    },
    '60xx0068': {
      vr: 'US',
      Value: ['123'],
    },
    '60xx0069': {
      vr: 'US',
      Value: ['123'],
    },
    '60xx0100': {
      vr: 'US',
      Value: ['123'],
    },
    '60xx0102': {
      vr: 'US',
      Value: ['123'],
    },
    '60xx0110': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '60xx0200': {
      vr: 'US',
      Value: ['123'],
    },
    '60xx0800': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '60xx0802': {
      vr: 'US',
      Value: ['123'],
    },
    '60xx0803': {
      vr: 'AT',
      Value: ['(0010,0010)'],
    },
    '60xx0804': {
      vr: 'US',
      Value: ['123'],
    },
    '60xx1001': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '60xx1100': {
      vr: 'US',
      Value: ['123'],
    },
    '60xx1101': {
      vr: 'US',
      Value: ['123'],
    },
    '60xx1102': {
      vr: 'US',
      Value: ['123'],
    },
    '60xx1103': {
      vr: 'US',
      Value: ['123'],
    },
    '60xx1200': {
      vr: 'US',
      Value: ['123'],
    },
    '60xx1201': {
      vr: 'US',
      Value: ['123'],
    },
    '60xx1202': {
      vr: 'US',
      Value: ['123'],
    },
    '60xx1203': {
      vr: 'US',
      Value: ['123'],
    },
    '60xx1301': {
      vr: 'IS',
      Value: ['123'],
    },
    '60xx1302': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '60xx1303': {
      vr: 'DS',
      Value: ['123.45'],
    },
    '60xx1500': {
      vr: 'LO',
      Value: ['Test Long String'],
    },
    '60xx3000': {
      vr: 'OB',
      Value: ['01'],
    },
    '60xx4000': {
      vr: 'LT',
      Value: ['Test Long Text'],
    },
    '7fe00001': {
      vr: 'OV',
      Value: ['123'],
    },
    '7fe00002': {
      vr: 'OV',
      Value: ['123'],
    },
    '7fe00003': {
      vr: 'UV',
      Value: ['123'],
    },
    '7fe00008': {
      vr: 'OF',
      Value: ['123.45'],
    },
    '7fe00009': {
      vr: 'OD',
      Value: ['123.456'],
    },
    '7fe00010': {
      vr: 'OB',
      Value: ['01'],
    },
    '7fe00020': {
      vr: 'OW',
      Value: ['01'],
    },
    '7fe00030': {
      vr: 'OW',
      Value: ['01'],
    },
    '7fe00040': {
      vr: 'OW',
      Value: ['01'],
    },
    '7fxx0010': {
      vr: 'OB',
      Value: ['01'],
    },
    '7fxx0011': {
      vr: 'US',
      Value: ['123'],
    },
    '7fxx0020': {
      vr: 'OW',
      Value: ['01'],
    },
    '7fxx0030': {
      vr: 'OW',
      Value: ['01'],
    },
    '7fxx0040': {
      vr: 'OW',
      Value: ['01'],
    },
    fffafffa: {
      vr: 'SQ',
      Value: [
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
      ],
    },
    fffcfffc: {
      vr: 'OB',
      Value: ['01'],
    },
    '00041130': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00041141': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00041142': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00041200': {
      vr: 'UL',
      Value: ['123'],
    },
    '00041202': {
      vr: 'UL',
      Value: ['123'],
    },
    '00041212': {
      vr: 'US',
      Value: ['123'],
    },
    '00041220': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00041400': {
      vr: 'UL',
      Value: ['123'],
    },
    '00041410': {
      vr: 'US',
      Value: ['123'],
    },
    '00041420': {
      vr: 'UL',
      Value: ['123'],
    },
    '00041430': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00041432': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00041500': {
      vr: 'CS',
      Value: ['TEST_CODE'],
    },
    '00041504': {
      vr: 'UL',
      Value: ['123'],
    },
    '00041510': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00041511': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00041512': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '0004151a': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00041600': {
      vr: 'UL',
      Value: ['123'],
    },
    '00060001': {
      vr: 'SQ',
      Value: [
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
      ],
    },
    '00001000': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
    '00001001': {
      vr: 'UI',
      Value: ['1.2.941.12368.1.2.4.09'],
    },
  },
} as const
export default sample
