import axios from "axios";
import { useState } from "react";
import { URL_API } from "../config/rutas";
import { useNavigate } from 'react-router-dom'; 

// Funcion para agregar nuevos usuarios
export function Nuevo() {
    const [nombre, setNombre] = useState("");
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [foto, setFoto] = useState(null);
    const navigate = useNavigate();
    const [mensaje, setMensaje] = useState("");


    async function guardarDatos(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nombre", nombre);
        formData.append("usuario", usuario);
        formData.append("password", password);
        formData.append("foto", foto);

        try {
            const res = await axios.post(URL_API + "/nuevousuario", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            console.log(res);
            setNombre("");
            setUsuario("");
            setPassword("");
            setFoto(null);

            setTimeout(() => {
                navigate("/");
            }, 1000);
            
setTimeout(() => {
    setMensaje("");
}, 3000);

            
        } 
        catch (error) {
            console.error("Error al guardar datos: ", error);
            /*setTimeout(() => {
                setMensaje("");
            }, 3000);*/
        }
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                <div className="text-danger"><h2>{mensaje}</h2></div>
                    <form onSubmit={guardarDatos}>
                        <div className="card shadow-lg border-0">
                            <div className="card-header text-black">
                                <h1 className="h3 mb-0">Nuevo Usuario</h1>
                            </div>
                            <div className="card-body bg-white">
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input className="form-control" type="text" placeholder="Nombre" name="nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} autoFocus />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="usuario" className="form-label">Usuario</label>
                                    <input className="form-control" type="text" placeholder="Usuario" name="usuario" id="usuario" value={usuario} onChange={(e) => { setUsuario(e.target.value) }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input className="form-control" type="password" placeholder="Password" name="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="foto" className="form-label">Foto</label>
                                    <input className="form-control" type="file" name="foto" id="foto" onChange={(e) => setFoto(e.target.files[0])} />
                                </div>
                            </div>
                            <div className="card-footer bg-white">
                                <button className="btn btn-primary w-100" type="submit">Guardar usuario</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export function NuevoProducto(){
    const [nombre, setNombre]=useState("");
    const [precio,setPrecio]=useState("");
    const [foto, setFoto]=useState(null);
    //const [mensaje, setMensaje]=useState("");
    const navigate = useNavigate();

    async function guardarDatos(e){
        e.preventDefault();
        console.log(nombre);
        const formData=new FormData();
        formData.append("nombre", nombre);
        formData.append("precio", precio);
        formData.append("foto", foto);
        try{
            const res= await axios.post(URL_API + "/nuevoProductos",formData,{
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            });
            console.log(res);
            setNombre("");
            setPrecio("");
            setFoto(null);
            //setMensaje(res.data);
            setTimeout(() => {
                navigate("/productos");
            }, 1000);
        }
        catch(error){
            console.error("Error al guardar datos: ", error);
            /*setTimeout(()=>{
                setMensaje("");
            },3000);*/
        }
        
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <form onSubmit={guardarDatos}>
                        <div className="card shadow-lg border-0">
                            <div className="card-header text-black">
                                <h1 className="h3 mb-0">Nuevo Producto</h1>
                            </div>
                            <div className="card-body bg-white">
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input className="form-control" type="text" placeholder="Nombre del producto" name="nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} autoFocus />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="precio" className="form-label">Precio</label>
                                    <input className="form-control" type="text" placeholder="Precio del producto" name="precio" id="precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="foto" className="form-label">Foto</label>
                                    <input className="form-control" type="file" name="foto" id="foto" onChange={(e) => setFoto(e.target.files[0])} />
                                </div>
                            </div>
                            <div className="card-footer bg-white">
                                <button className="btn btn-primary w-100" type="submit">Guardar Producto</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
    
}