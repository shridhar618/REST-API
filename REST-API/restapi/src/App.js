import './App.css';

import ApiExample from './components/ApiExample';
import DisplayData from './components/DisplayData';
import CreateData from './components/CreateData';
import UpdateData from './components/UpdateData';
import DeleteData from './components/DeleteData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      REST API - Access and Manipulate resources 
      </header>
     
        <ApiExample /> 
     <DisplayData /> 
          <CreateData /> 
          <UpdateData />
          <DeleteData />
       
    </div>
  );
}

export default App;