import { useContext } from 'react';
import './DocumentList.css';
import { DataContext } from '../DataProvider/DataProvider';
import { DocumentListProps } from './DocumentList.types';

export const DocumentList = ({ filteredData }: DocumentListProps) => {
  const { data } = useContext(DataContext);
  // store the original data array or the filtered one
  const displayedData = filteredData.length > 0 ? filteredData : data;

  return (
    <>
      {data &&
        displayedData.map((documnet) => (
          <div key={documnet.id} className="document-container">
            <p>{`Documento ${documnet.id}`}</p>
            <p>{documnet.text}</p>
          </div>
        ))}
    </>
  );
};
