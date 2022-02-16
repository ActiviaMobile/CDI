import './App.css';
import AppRouter from './AppRouter/AppRouter';
import LoginPage from './pages/LoginPage';

function App() {
  const utf8 = require('utf8');

  return (
    <div className="App">
      <LoginPage/>
    </div>
  );
}

export default App;
