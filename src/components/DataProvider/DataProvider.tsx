import React, { ReactNode, createContext, useState, useEffect } from 'react';
import { DocumentFileType } from '../DocumentList/DocumentList.types';
import { fetchData } from '../../api/api';
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
  const [data, setData] = useState<DocumentFileType[]>([]);

  useEffect(() => {
    const updateData = async () => {
      const response = await fetchData();
      setData(response);
    };
    updateData();
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
