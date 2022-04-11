import './App.css';
import { SessionProvider } from './context/sessionContext';
import AppRouter from './AppRouter/AppRouter';
import { MainProvider } from './context/mainContext';


function App() {

  return (
    <div className="App">
      <SessionProvider>
        <MainProvider>
          <AppRouter/>
        </MainProvider>
      </SessionProvider>
    </div>
  );
}

export default App;
