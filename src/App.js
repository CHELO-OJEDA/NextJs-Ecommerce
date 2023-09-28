import logo from './logo.svg';
import './App.css';
import HolaMundo from './components/HolaMundo';
import AdiosMundo from './components/AdiosMundo';
import Saludar from './components/Saludar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar name="Agustin Navarro Galdon" edad="26"/>
        <Saludar name="Paco" edad="31"/>
      </header>
    </div>
  );
}

export default App;
