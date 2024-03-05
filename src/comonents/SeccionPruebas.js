import React, { Component } from "react";

import MiComponente from '../comonents/MiComponente';
import Peliculas from '../comonents/Peliculas'
class SeccionPruebas extends Component {


    contador = 0;

    constructor(props){
        super(props);

        this.state={
            contador:0
        };
    }



    holaMundo(nombre, edad) {
        var presentacion = (
            <div>
                <h2>Hola soy {nombre}</h2>
                <h3>Tengo {edad}</h3>
            </div>)
        return presentacion;
    }

    sumar = (e) =>{
        // this.contador = this.contador+1;
        this.setState({
            contador: (this.state.contador + 1)
        })
    }
    restar = (e) => {
        
        this.setState({
            contador: (this.state.contador - 1)
        })
    }

    render() {
        var nombre = 'Fernando Rios';
        return (
            <section id='content'>
                <h2 className="subheader">Últimos artículos</h2>
                <p>
                    Hola  TODOS
                </p>
                <h2 className="subheader"> Fucniones y JSX basico</h2>
                {this.holaMundo(nombre, 12)}
                {/* {alert('hOLA MUNDO CON REACT ')} */}
                <section className='componentes'>
                <h2 className="subheader"> Componentes</h2>
                
                    <MiComponente></MiComponente>
                    <Peliculas></Peliculas>


                </section>
                <h2 className="subheader"> Estado</h2>
                <p>
                    contador: {this.state.contador}
                </p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar}></input>
                    <input type="button" value="Restar" onClick={this.restar}></input>
                </p>
            </section>
        );
    }

}

export default SeccionPruebas;