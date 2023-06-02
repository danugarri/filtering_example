import React, { ReactNode, createContext } from 'react';
import { DocumentFileType } from '../DocumentList/DocumentList.types';
import { mockedData } from '../../__mocks__/mock';

export const DataContext = createContext<DocumentFileType[] | null>(null);

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <DataContext.Provider value={mockedData}>{children}</DataContext.Provider>
  );
};
