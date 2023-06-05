import { collection, addDoc } from "@firebase/firestore"
import { dataBase } from "../config/database.jsx"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CrearServicio = () => {
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [valor, setvalor] = useState('')
    const returnListado = useNavigate()

    const capturarInformacion = async () => {
        const servicioCollection = collection(dataBase, "servicios")

        const servicio = {
            nombre, 
            descripcion, 
            valor
        }
        
        await addDoc(servicioCollection, servicio)
        returnListado('/listar')
    }

    return (
        <section>
            <form action="">
                <input type={"text"} placeholder={"Nombre servicio"} onChange={e => setNombre(e.target.value)} />
                <input type={"text"} placeholder={"Descripción servicio"} onChange={e => setDescripcion(e.target.value)} />
                <input type={"text"} placeholder={"Valor servicio"} onChange={e => setvalor(e.target.value)} />
                <input type={"button"} value={"Agregar servicio"} onClick={capturarInformacion} />
            </form>
        </section>
    );
};

export default CrearServicio;