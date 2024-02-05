import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Error } from "./Error";
import { Inicio } from "./Inicio";
import { Menu } from "./Menu";
import { Product } from "./Product";

export function Rutas(){
    return(
        <>
        <Menu />
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error />}></Route>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/product" element={<Product />}></Route>
            </Routes>
        </BrowserRouter>        
        </>
    );
}