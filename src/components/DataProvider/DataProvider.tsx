import React, { ReactNode, createContext, useState } from 'react';
import { DocumentFileType } from '../DocumentList/DocumentList.types';
import { mockedData } from '../../__mocks__/mock';
export type DataContextType = {
  data: DocumentFileType[];
  setData: React.Dispatch<DocumentFileType[]>;
};

export const DataContext = createContext<DataContextType>({
  data: [],
  setData: () => {
    return;
  },
});

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<DocumentFileType[]>(mockedData);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
