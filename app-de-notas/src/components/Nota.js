import React, { useState } from 'react';
import '../styles/Nota.css'

function Nota({nota,onEdit,onDelete}){

    const [editando, setEditando] = useState(false);
    const [nuevoTexto, setNuevoTexto] = useState(nota.texto);

    const handleGuardar = () =>{
        onEdit(nota.id , nuevoTexto);
        setEditando(false);
    };

    return(
        <div>
            {editando? (
                <div className='editar-nota'>
                    <textarea 
                        value={nuevoTexto}
                        onChange={(e) => setNuevoTexto(e.target.value)}/>
                        <button onClick={handleGuardar} className='boton'>Guardar</button>
                </div>
            ):(
            <div className='contenedor-nota'>
                <p className='contenedor-texto'>{nota.texto}</p>
                <div className='contenedor-botones'>
                    <button className='boton' onClick={() => setEditando(true)}>
                            Editar
                    </button>
                    <button className='boton' onClick={() => onDelete(nota.id)}>
                        Borrar
                    </button>
                </div>
            </div>
            )}
        </div>
    );
}
export default Nota;