import {FaShoppingCart} from "react-icons/fa";
import { CartContext } from "../context/CartContext"
import {useContext} from "react"


function CartWidget(){

    const{cart,totalProducts}=useContext(CartContext)

    return <div className="cartWidget">
        <h3 className="cartWidgOn"><FaShoppingCart/></h3>
        <p className={cart.length>0 ? "cartWidgOn":"cartWidgOff" } id="cartWidgetTotal">{totalProducts}</p>

    </div> 
}

export default CartWidget;