import { DocumentFileType } from '../components/DocumentList/DocumentList.types';

export const getPossibleOptions = (
  data: DocumentFileType[],
  pattern: 'version' | 'country'
): string[] => {
  // convert the Set object back to an array of unique country values.
  const uniqueOptions = Array.from(
    new Set(data.map((document) => document[pattern]))
  );
  return uniqueOptions;
};
