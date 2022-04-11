import './App.css';
import { SessionProvider } from './context/sessionContext';
import AppRouter from './AppRouter/AppRouter';
import { Link } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <SessionProvider>
        <AppRouter/>
      </SessionProvider>
    </div>
  );
}

export default App;
