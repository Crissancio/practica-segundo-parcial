import React from "react";

function MostrarEntradas({mostrar, userName, userFull, userEdad}){
    return(
        <div>
            {mostrar? (
                <div className="mostrar-datos-container">
                    <h1>Sus Datos de Usuario c:</h1>
                    <ol>
                        <li>Nombre de Usuario: {userName}</li>
                        <li>Nombre Completo: {userFull}</li>
                        <li>Edad: {userEdad}</li>
                    </ol>
                </div>
            ):(null)}
        </div>
    );
}
export default MostrarEntradas;