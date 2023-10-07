import logo from './logo.svg';
import './App.css';
import HolaMundo from './components/HolaMundo';
import AdiosMundo from './components/AdiosMundo';
import Saludar from './components/Saludar';

function App() {
  const enviarSaludo = nombre => {
    console.log("Hola" + nombre);
  };

  
  return (
    <div className="App">
        <h1>Mi primer componente</h1>
        <Saludar nombre="Agustin " apellidos="Navarro Galdon"/>
        <Saludar nombre="Carlos " apellidos="Navarro Galdon"
        enviarSaludo= {enviarSaludo}/>       
    </div>
  );
}

export default App;
