import { mockedData } from '../__mocks__/mock';
import { DocumentFileType } from '../components/DocumentList/DocumentList.types';

export function fetchData(): Promise<DocumentFileType[]> {
  return new Promise((resolve) => setTimeout(() => resolve(mockedData), 500));
}
