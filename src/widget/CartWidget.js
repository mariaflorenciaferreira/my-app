import {FaShoppingCart} from "react-icons/fa";
import { CartContext } from "../context/CartContext"
import {useContext} from "react"


function CartWidget(){

    const{cart}=useContext(CartContext)

    return <h3 className={cart.length>0 ? "cartWidgOn":"cartWidgOff"}><FaShoppingCart/></h3>
}

export default CartWidget;