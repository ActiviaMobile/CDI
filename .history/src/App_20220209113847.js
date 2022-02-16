import './App.css';
import { SessionProvider } from './context/sessionContext';
import HomePage from './pages/HomePage';

function App() {

  return (
    <div className="App">
    <SessionProvider>
      <HomePage/>
    </SessionProvider>
    </div>
  );
}

export default App;
