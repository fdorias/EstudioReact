
import '../src/comonents/css/App.css';

///importar componentes

import Header from './comonents/header';
import Slider from './comonents/Slider';
import Sidebar from './comonents/Sidebar';
import Footer from './comonents/Footer';
import SeccionPruebas from './comonents/SeccionPruebas';



function App() {

  var buttonString  = 'Ver Mas';
  return (
    <div className="App">
      <Header></Header>
      <Slider  title='Bienvenido al Curso de React con Víctor Robles de victorroblesweb.es'
      btn = {buttonString}
      ></Slider>

      <div className='center'>

        <SeccionPruebas></SeccionPruebas>
        <Sidebar></Sidebar>

        <div className='clearfix'></div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
