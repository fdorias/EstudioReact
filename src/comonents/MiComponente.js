import React from "react";

class MiComponente extends React.Component{

    render(){
        let receta = {
            nombre:'Pizza',
            ingredientes:['Tomate','queso','jamon'],
            calorias:400
        }

        return(
            <div className="mi-componente">
                <h1>'receta:' {receta.nombre}</h1>
                <h2>'calorias: {receta.calorias}</h2>
                <ol>
                {
                    receta.ingredientes.map((ingredientes,i) =>{
                        console.log(ingredientes);
                        return(
                            <li key = {i}>
                                {ingredientes}
                            </li>
                        );
                    })
                }
                </ol>
            </div>
        );
    }

}

export default MiComponente;








