import React,{useState} from "react";
import '../styles/Datos.css';
import MostrarDatos from "./MostrarDatos";

function Datos({labelName}){
    const [user,setUser] = useState("")
    const [name,setName]= useState("")
    const [age,setAge]= useState("")
    const [show, setShow] = useState(false)

    return(
        <div className="datos-container">
            <div>
                <label className="label" htmlFor="name">Nombre de Usuario</label>
                <input type='text' name="name"></input>
            </div>
            <div>
                <label className="label" htmlFor="fullName">Nombre Completo</label>
                <input type='text' name="fullName"></input>
            </div>
            <div>
                <label className="label" htmlFor="age">Edad</label>
                <input type='text' name="age"></input>
            </div>
            <button>Subir</button>
            <MostrarDatos />
        </div>

        
    );
}
 export default Datos;