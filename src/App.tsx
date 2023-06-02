import './App.css';
import { mockedData } from './__mocks__/mock';
import { DocumentList } from './components/DocumentList/DocumentList';

function App() {
  return (
    <>
      <DocumentList documents={mockedData} />
    </>
  );
}

export default App;
