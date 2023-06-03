export interface DocumentFileType extends Record<string, string> {
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
export type DocumentListProps = {
  filteredData: DocumentFileType[];
};
