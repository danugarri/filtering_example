import './App.css';
import { mockedData } from './__mocks__/mock';
import { DataProvider } from './components/DataProvider/DataProvider';
import { DocumentList } from './components/DocumentList/DocumentList';
import { FiltersContainer } from './components/Filters/FiltersContainer/FiltersContainer';

function App() {
  return (
    <>
      <DataProvider>
        <FiltersContainer />
      </DataProvider>
      <DocumentList documents={mockedData} />
    </>
  );
}

export default App;
