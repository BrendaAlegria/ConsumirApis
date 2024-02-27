import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { URL_API, URL_IMAGES } from "../config/rutas";

export function Inicio(){
    const [dataUsuarios, setDataUsuarios]=useState([]);

    useEffect(()=>{
        axios.get(URL_API+"mostrarUsuarios")
        .then((respuesta)=>{
            console.log(respuesta);
            setDataUsuarios(respuesta.data);
        })
        .catch((err)=>{
            console.log("Error al recuperar usuario" + err);
        })

    },[]);

    const listaUsuarios=dataUsuarios.map((usuario) => {
        var editar= "/EditarUsuario/"+ usuario.id;
        var borrar= "/BorrarUsuario/"+ usuario.id;

        var foto = URL_IMAGES+usuario.foto;
        return(
            <tr className="align-middle">
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.usuario}</td>
                <td><img src={foto} alt="Imagen" width="100px" alt="Foto de usuario" ></img></td>
                <td>
                    <Link to={editar}>Editar</Link>
                    <br></br>
                    <Link to={borrar}>Borrar</Link>
                </td>

            </tr>
        );

    })
    return(
        <table className="table table-over">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Nombre</th>
                    <th>Usuario</th>
                    <th>Foto</th>
                </tr>
            </thead>
            <tbody>
                    {listaUsuarios}
            </tbody>
        </table>
    );

}