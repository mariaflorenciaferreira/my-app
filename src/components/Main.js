import {Route,Routes} from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import Cart from "../pages/Cart"

function Main(){
    return (
        <main className="mainContainer">

            <Routes>
                <Route path="/" element={<ItemListContainer />}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/categoria/:ambiente" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
               
            </Routes>
        </main>
    )
}

export default Main