import React from 'react';
import {useState} from 'react';
import Nota from './Nota';
import rauw from '../images/rauw.jpeg'
import '../styles/ListasNotas.css'

function ListaNotas(){

    const [notas, setNotas] = useState([]);
    const [texto, setTexto] = useState("");

    const addNota =()=>{
        if(texto.trim()===""){
            setTexto("");
            return;
        }else{
            setNotas([...notas ,{ id:Date.now(), texto: texto }]);
            console.log("añadida uwu");
            console.log(notas);
            setTexto("");
        }
        
    }

    const eliminarNota=(id) =>{
        setNotas((prevNotas) => prevNotas.filter((nota) => nota.id !== id));
        console.log("borrar")
    };
    const editarNota=(id,nuevoTexto) => {
        setNotas((prevNotas) => 
            prevNotas.map((nota) => (nota.id === id? {...nota,texto:nuevoTexto}:nota))
        );
        console.log(notas)
        console.log("editar")
    };
    return(
        <div className='app'>
            <div className='header'>
                <h1>Notas UwU</h1>
                <img src={rauw} alt='rauw_uwu'/>
            </div>
            <div className='input-text-container'>
                <input 
                    className='input-text'
                    type='text'
                    onChange={(e) => setTexto(e.target.value)}
                    value = {texto}
                    />
                <button onClick={addNota} className='button'>Añadir Nota</button>
            </div>
            <div className='contenedor-notas'>
                {notas.map((nota) => (
                    <Nota 
                        key={nota.id}
                        nota={nota}
                        onDelete={eliminarNota}
                        onEdit={editarNota}
                    />
                ))}
            </div>
        </div>
        
    ); 
}
export default ListaNotas;