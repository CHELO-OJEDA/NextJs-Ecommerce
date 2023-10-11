import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import HolaMundo from './components/HolaMundo';
import AdiosMundo from './components/AdiosMundo';
import Saludar from './components/Saludar';

function App() {
  // const enviarSaludo = nombre => {
  //   console.log("Hola" + nombre);
  // };


    const encenderApagar = () => {
      // setStateCar(!stateCar);
      setStateCar(prevValue => !prevValue);
      setContar(contar + 1);
    };
    
    const [ stateCar, setStateCar] = useState(false);
    const [ contar, setContar] = useState(0);

    useEffect( () => {
      console.log("Total: " + contar)
      
    }, [contar]);

  return (
    <div className="App">
        {/* <h1>Mi primer componente</h1> */}
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h3>El coche esta: {stateCar ? "Encendido" : "Apagado"} </h3>
        {/* <Saludar nombre="Agustin " apellidos="Navarro Galdon"/>
        <Saludar nombre="Carlos " apellidos="Navarro Galdon"
        enviarSaludo= {enviarSaludo}/>        */}
        <h4>Clicks: {contar} </h4>
         <button onClick={encenderApagar}>Encender / Apagar</button>
        </header>
    </div>
  );
}

export default App;
