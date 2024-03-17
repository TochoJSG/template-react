import logo from './logo.svg';
import './App.css';
import logoMain from './img/logo.png';
import ListaTareas from './componentes/ListaTareas';
function App() {
  return (
    <div className="App-tareas">
      <div className='logo-contenedor'>
        <img className='logo-img' src={ logoMain } />
      </div>
      <div className='tareas-lista'>
        <h1>Tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
