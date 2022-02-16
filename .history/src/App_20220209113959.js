import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { SessionProvider } from './context/sessionContext';
import HomePage from './pages/HomePage';

function App() {

  return (
    <div className="App">
    <SessionProvider>
    <BrowserRouter>
      <HomePage/>
    </BrowserRouter>
    </SessionProvider>
    </div>
  );
}

export default App;
