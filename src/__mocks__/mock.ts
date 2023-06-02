import { CountryEnum, DocumentFileType } from '../components/DocumentList/DocumentList.types';

export const mockedData: DocumentFileType[] = [
  {
    country: CountryEnum.SPAIN,
    version: '0.0.1',
    text: 'Spain version 0.0.1',
    id: '1',
  },
  {
    country: CountryEnum.SPAIN,
    version: '1.1.1',
    text: 'Spain version 1.1.1',
    id: '2',
  },
  {
    country: CountryEnum.FRANCE,
    version: '0.0.1',
    text: 'France text',
    id: '3',
  },
  {
    country: CountryEnum.FRANCE,
    version: '1.1.1',
    text: 'France 1.1.1',
    id: '4',
  },
  {
    country: CountryEnum.ITALY,
    version: '0.0.1',
    text: 'Italy text',
    id: '5',
  },
];
