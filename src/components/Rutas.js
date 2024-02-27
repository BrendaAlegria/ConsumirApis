import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Error } from "./Error";
import { Inicio } from "./Inicio";
import { Menu } from "./Menu";
import { Product } from "./Product";
import { Nuevo ,NuevoProducto} from "./Nuevo";
import { EditarUsuario,EditarProducto } from "./Editar";
import { BorrarUsuario ,BorrarProducto} from "./Borrar";

export function Rutas(){
    return(
        <>
        <Menu />
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error />}></Route>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/Product" element={<Product />}></Route>
                <Route path="/Nuevo" element={<Nuevo />}></Route>
                <Route path="/NuevoProducto" element={<NuevoProducto/>}></Route>
                <Route path="/EditarUsuario/:id" element={<EditarUsuario/>}></Route>
                <Route path="/BorrarUsuario/:id" element={<BorrarUsuario/>}></Route>
                <Route path="/EditarProducto/:id" element={<EditarProducto/>}></Route>
                <Route path="/borrarProducto/:id" element={<BorrarProducto/>}></Route>
            </Routes>
        </BrowserRouter>        
        </>
    );
}