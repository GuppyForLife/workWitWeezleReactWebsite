import Main from './Components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
