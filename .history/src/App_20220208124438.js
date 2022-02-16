import { BrowserRouter } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';

function App() {
  const utf8 = require('utf8');

  return (
    <div className="App">
    <BrowserRouter>
      <LoginPage/>
    </BrowserRouter>
    </div>
  );
}

export default App;
