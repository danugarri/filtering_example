import React from 'react';
import { DocumentFileType } from './DocumentList.types';
import './DocumentList.css';

export const DocumentList: React.FC<{ documents: DocumentFileType[] }> = ({ documents }) => {
  return (
    <>
      {documents.map((data) => (
        <div key={data.id} className="document-container">
          <p>{`Documento ${data.id}`}</p>
          <p>{data.text}</p>
        </div>
      ))}
    </>
  );
};
