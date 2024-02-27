import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { URL_API } from "../config/rutas";

export function BorrarUsuario(){
    const params = useParams();
    const navigate =useNavigate();
    useEffect(()=>{
        async function borrar(){
            const res = axios.get( URL_API + "borrarUsuario/" + params.id);
            console.log(res);
            navigate("/");
        }
        borrar();
    },[params.id]);
    return(
        <h1>BorrarUsuario</h1>
    )
}

//PRODUCTO 
export function BorrarProducto(){
    const params = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        async function borrar(){
            const res = await axios.get(URL_API + "/borrarProductos/" + params.id);
            console.log(res);
            navigate("/productos");
        }
        borrar();
    },[params.id, navigate]);
    return(
        <h1>Borrar Productos</h1>
    )
}