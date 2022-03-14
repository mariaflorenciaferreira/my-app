import {Route,Routes} from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"

import Cart from "../pages/Cart"

function Main(){
    return (
        <main className="mainContainer">

            <Routes>
                {/* <Route path="/" element={}/> */}
                <Route path="/cart" element={<Cart/>}/>
                {/* <Route path="/categoria/:ambiente" element={}/> */}
                <Route path="/item/:key" element={<ItemDetailContainer/>}/>

            </Routes>
            <ItemListContainer  nombre="Florencia" apellido="Ferreira"/>
            <ItemDetailContainer />
        </main>
    )
}

export default Main