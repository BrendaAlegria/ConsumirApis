import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { URL_API, URL_IMAGES } from "../config/rutas";

export function Product(){
    const [dataProduct, setDataProduct]=useState([]);

    useEffect(()=>{
        axios.get(URL_API+"mostrarProductos")
        .then((respuesta)=>{
            console.log(respuesta);
            setDataProduct(respuesta.data);
        })
        .catch((err)=>{
            console.log("Error al recuperar producto" + err);
        })

    },[]);

    const listaProduct=dataProduct.map((producto) => {
        var editar= "/editarProducto/"+ producto.id;
        var borrar= "/borrarProducto/"+ producto.id;
        var foto= URL_IMAGES+ producto.foto;
        return(
            <tr className="align-middle">
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.usuario}</td>
                <td><img src={foto} alt="Imagen" width="100px" alt="Foto"></img></td>
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
                    {listaProduct}
            </tbody>
        </table>
    );

}