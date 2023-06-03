import { DocumentFileType } from '../DocumentList/DocumentList.types';

export type DataContextType = {
  data: DocumentFileType[];
  setData: React.Dispatch<DocumentFileType[]>;
};
