import './App.css';
import Template from './componentes/Template.jsx';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Titulo Principal</h1>
        <Template
        imagen='nat'
        nombre='Natalia'
        clave='19'
        categoria='Salvatori'
        especifico='estudiante'
        detalles='mujer hermosa'/>

        <Template
        imagen='jojo'
        nombre='Jorge'
        clave='25'
        categoria='Salgado'
        especifico='desarrollador'
        detalles='fullstack developer'/>
      </div>
    </div>
  );
}
export default App;
