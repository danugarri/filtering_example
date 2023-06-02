import { DocumentFileType } from '../components/DocumentList/DocumentList.types';
import { OptionsType } from '../components/Filters/Select/select.types';

export const getPossibleOptions = (
  data: DocumentFileType[],
  pattern: OptionsType
): string[] => {
  // convert the Set object back to an array of unique country values.
  const uniqueOptions = Array.from(
    new Set(data.map((document) => document[pattern]).concat(pattern))
  );
  return uniqueOptions;
};
