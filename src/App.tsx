import { useState } from 'react';
import './App.css';
import { DataProvider } from './components/DataProvider/DataProvider';
import { DocumentList } from './components/DocumentList/DocumentList';
import { DocumentFileType } from './components/DocumentList/DocumentList.types';
import { FiltersContainer } from './components/Filters/FiltersContainer/FiltersContainer';

function App() {
  const [filteredData, setFilteredData] = useState<DocumentFileType[]>([]);

  return (
    <DataProvider>
      <FiltersContainer setFilteredData={setFilteredData} />
      <DocumentList filteredData={filteredData} />
    </DataProvider>
  );
}

export default App;
