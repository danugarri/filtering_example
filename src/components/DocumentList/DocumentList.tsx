import './DocumentList.css';
import { DocumentListProps } from './DocumentList.types';
import { Skeleton } from '../Skeleton/Skeleton';

export const DocumentList = ({ filteredData }: DocumentListProps) => {
  return (
    <>
      {filteredData.length > 0 ? (
        filteredData.map((documnet) => (
          <div key={documnet.id} className="document-container">
            <p>{`Documento ${documnet.id}`}</p>
            <p>{documnet.text}</p>
          </div>
        ))
      ) : (
        <Skeleton />
      )}
    </>
  );
};
