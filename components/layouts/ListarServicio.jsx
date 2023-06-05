import { collection, getDocs, doc, deleteDoc } from "@firebase/firestore"
import { dataBase } from "../config/database.jsx"
import { useEffect, useState } from "react";

const ListarServicio = () => {
    const [servicios, setServicios] = useState([])

    const mostrarServicios = async () => {
        const servicioCollection = collection(dataBase, "servicios")
        
        const data = await getDocs(servicioCollection)

        setServicios(data.docs.map((doc) => ({...doc.data(), id: doc.id})))

    };

    useEffect(() => {
        mostrarServicios()
    }, [])

    const eliminarServicio = async (id) => {
        const servicioCollection = doc(dataBase, "servicios", id)
        const data = await deleteDoc(servicioCollection)
        mostrarServicios()
    }
    
    return (
        <section>
            {
                servicios.map((servicio) => (
                    <section>
                        <h1>{servicio.nombre}</h1>
                        <p>{servicio.descripcion}</p>
                        <p>{servicio.valor}</p>
                        <input type="button" value={'Edita'} />
                        <input type="button" value={'Eliminar'} onClick={() => {eliminarServicio(servicio.id)}} />
                        <hr />
                    </section>
                ))
            }
        </section>
    );
};

export default ListarServicio;