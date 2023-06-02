export interface DocumentFileType {
  country: CountryEnum;
  version: string;
  text: string;
  id: string;
}
export enum CountryEnum {
  SPAIN = 'Spain',
  FRANCE = 'France',
  ITALY = 'Italy',
}

export type Option = 'country' | 'version';
