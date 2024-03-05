import logo from './logo.svg';
import './App.css';
function holaMundo(nombre, edad) {
  var presentacion = <div>
  <h2>Hola soy {nombre}</h2>
  <h3>Tengo {edad}</h3></div>
  return presentacion;
}

function App() {
  var nombre = 'Fernando Rios';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola  TODOS
        </p>
        {holaMundo(nombre,12)}
        {/* {alert('hOLA MUNDO CON REACT ')} */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
