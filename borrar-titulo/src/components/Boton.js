import React from "react";
import '../styles/Boton.css'

function Boton({funcion}){
    return(
        <div>
            <button
                className="boton"
                onClick={funcion}>
                Mostrar/Ocultar
            </button>
        </div>
    );
}

export default Boton;