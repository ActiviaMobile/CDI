import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './AppRouter/AppRouter';
import HomePage from './pages/HomePage';

function App() {
  const utf8 = require('utf8');

  return (
    <div className="App">
    <BrowserRouter>
      <HomePage/>
    </BrowserRouter>
    </div>
  );
}

export default App;
