import logo from './logo.svg';
import './App.css';
import logoApp from './img/logo.png';
import Boton from './componentes/Boton';
import Display from './componentes/Display';
import ClearBoton from './componentes/ClearBoton';
import { useState } from 'react';//importamos hook
import { evaluate } from 'mathjs';
function App() {
  const [input,setInput] = useState('');

  const agregarInput = val =>{
    setInput(input + val);
  };

  const calcularResultado = () =>{
    if(input){
    setInput( evaluate(input) );//salida
  }else{alert('No se ha digitado ningun Valor');}
  };

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img 
        src={ logoApp }
        className='logo'
        alt='logo de pagina'/>
      </div>
      <div className='contenedor-main'>
        <Display input={ input }/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <ClearBoton manejarClear={ ()=>setInput('') }>Clear</ClearBoton>
        </div>
      </div>
    </div>
  );
}

export default App;
