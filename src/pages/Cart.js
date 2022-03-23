import {useContext} from "react"
import { CartContext } from "../context/CartContext"



const Cart=()=>{

    const{clear,cart,removeItem}=useContext(CartContext)

    
    return (
        <>
            <h2>Carrito</h2>

          

               
          

            <button className="counterBtn" id="empty" onClick={clear} > VACIAR CARRITO</button>
           
          
        </>
    )
}

export default Cart