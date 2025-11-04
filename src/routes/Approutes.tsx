import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";

//rutas de destino
export default function Approutes(){
    return(
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Productos" element={<Products/>}></Route>
                <Route path="/Carrito" element={<Cart/>}></Route>
            </Routes>

    )
}
