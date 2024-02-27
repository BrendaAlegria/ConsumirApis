import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom'; 
import { URL_API, URL_IMAGES } from "../config/rutas";

export function EditarUsuario() {
    const params = useParams();

    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [usuario, setUsuario] = useState("");
    const [nombreFoto, setNombreFoto] = useState("");
    const [password, setPassword] = useState("");
    const [passwordViejo, setPasswordViejo] = useState("");
    const [saltViejo, setSaltViejo] = useState("");
    const [fotoVieja, setFotoVieja] = useState("");
    const [foto, setFoto] = useState(null);
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        async function buscarDatos() {
            try {
                const res = await axios.get(URL_API+`buscarUsuarioPorId/${params.id}`);
                setId(res.data.id);
                setNombre(res.data.nombre);
                setUsuario(res.data.usuario);
                setPasswordViejo(res.data.password);
                setSaltViejo(res.data.salt);
                setFotoVieja(res.data.foto);
                setNombreFoto(URL_IMAGES+res.data.foto);
                console.log(res.data);
            } catch (error) {
                console.error("Error al buscar datos:", error);
            }
        }
        buscarDatos();
    }, []);

    async function agregarUsuario(e) {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("id", id);
            formData.append("nombre", nombre);
            formData.append("usuario", usuario);
            formData.append("password", password);
            formData.append("passwordViejo", passwordViejo);
            formData.append("saltViejo", saltViejo);
            formData.append("fotoVieja", fotoVieja);
            formData.append("foto", foto);

            const respuesta = await axios.post(URL_API+"editarUsuario", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            console.log(respuesta);
            setMensaje(respuesta.data);
            setTimeout(() => {
                setMensaje("");
            }, 3000);
        } catch (error) {
            console.error("Error al agregar usuario:", error);
        }
    }

    return (
        <form onSubmit={agregarUsuario} method="post" encType="multipart/form-data">
            <div className="container mt-5">
                <div className="text-danger"><h3>{mensaje}</h3></div>
                <div className="card">
                    <div className="card-header">
                        <h1>Modificar usuario</h1>
                    </div>
                    <div className="card-body">
                        <input type="hidden" name="passwordViejo" id="passwordViejo" value={passwordViejo} readOnly />
                        <input type="hidden" name="saltViejo" id="saltViejo" value={saltViejo} readOnly />
                        <input type="hidden" name="fotoVieja" id="fotoVieja" value={fotoVieja} readOnly />
                        <input type="hidden" name="id" id="id" value={id} readOnly />
                        <input className="form-control mb-3" type="text" placeholder="Nombre" name="nombre" id="nombre" value={nombre} autoFocus onChange={(e) => setNombre(e.target.value)} />
                        <input className="form-control mb-3" type="text" placeholder="Usuario" name="usuario" id="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                        <input className="form-control mb-3" type="text" placeholder="Password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                        <div>
                            <img src={nombreFoto} width="100" alt="Foto de usuario" />
                        </div>
                        <input className="form-control mb-3" type="file" placeholder="Foto" name="foto" id="foto" onChange={(e) => setFoto(e.target.files[0])} />
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary form-control mb-3 mt-3" type="Submit">Modificar usuario</button>
                    </div>
                </div>
            </div>
        </form>
    );
}


//PRODUCTO 
export function EditarProducto(){
    const params=useParams();
    const [id, setId]=useState("");
    const [nombre, setNombre]=useState("");
    const [precio, setPrecio]=useState("");
    const [fotoVieja, setFotoVieja] = useState("");
    const [foto, setFoto]=useState(null);
    const [rutaFoto, setRutaFoto]=useState("");
    const [mensaje, setMensaje]=useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        async function buscarPorID(){
            var res=await axios.get(URL_API + "/buscarProductoPorId/"+params.id);
            console.log(res);
            setId(res.data.id);
            setNombre(res.data.nombre);
            setPrecio(res.data.precio);
            setFotoVieja(res.data.foto);
            setRutaFoto(URL_IMAGES + res.data.foto);
        }
        buscarPorID();
    },[params.id]);

   async function editarDatos(e){
        e.preventDefault();
        const formData=new FormData();
        formData.append("id",id);
        formData.append("nombre", nombre);
        formData.append("precio", precio);
        formData.append("fotoVieja", fotoVieja);
        formData.append("foto", foto);

        try{
            const res= await axios.post(URL_API + "/editarProductos",formData,{
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
    return(
        <form onSubmit={editarDatos} method="post" encType="multipart/form-data">
        <div className="container mt-5">
            <div className="text-danger"><h3>{mensaje}</h3></div>
            <div className="card">
                <div className="card-header">
                    <h1>Modificar producto</h1>
                </div>
                <div className="card-body">
                    <input type="hidden" name="fotoVieja" id="fotoVieja" value={fotoVieja} readOnly />
                    <input className="form-control mb-3" type="text" placeholder="Id" name="id" id="id" value={id} readOnly />
                    <input className="form-control mb-3" type="text" placeholder="Nombre" name="nombre" id="nombre" value={nombre} autoFocus onChange={(e) => setNombre(e.target.value)} />
                    <input className="form-control mb-3" type="text" placeholder="Precio" name="precio" id="precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                    <div>
                        <img src={foto} width="100" alt="Foto de producto" />
                    </div>
                    <input className="form-control mb-3" type="file" placeholder="Foto" name="foto" id="foto" onChange={(e) => setFoto(e.target.files[0])} />
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary form-control mb-3 mt-3" type="Submit">Modificar producto</button>
                </div>
            </div>
        </div>
    </form>
);
}