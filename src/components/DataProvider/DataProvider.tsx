import React, { ReactNode, createContext } from 'react';
import { useFetchData } from '../../hooks/useFetchData';
import { DataContextType } from './dataProvider.types';
import { initialDataContext } from './dataProvider.const';

// Creating context and passing initial value
export const DataContext = createContext<DataContextType>(initialDataContext);

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { data, setData } = useFetchData();

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
