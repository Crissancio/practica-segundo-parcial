import React,{useState} from "react";
import Boton from "./Boton.js";
import '../styles/Titulo.css';

function Titulo(){
    const [mostrar,setMostrar] = useState(true);
    const show = () =>{
        setMostrar(!mostrar)
    }

    return(
        <div className="app">
            <Boton funcion={(mostrar)=>show()}/>
            <div className="title-container">
                { mostrar? (
                    <h1 className="title">Welcome to React Challenges</h1>
                ):(
                    null
                )}
            </div>
        </div>
    );
}
export default Titulo;