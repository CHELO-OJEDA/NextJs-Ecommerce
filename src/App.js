import logo from './logo.svg';
import './App.css';
import HolaMundo from './components/HolaMundo';
import AdiosMundo from './components/AdiosMundo';
import Saludar from './components/Saludar';

function App() {
  const User =  {
    nombre: "Agustin Navarro Galdon",
    edad: 26,
    color: "Azul"
  };

  const saludarFn = name => {
    console.log("Hola" + name);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo={User} saludarFn={saludarFn}/>
      </header>
    </div>
  );
}

export default App;
