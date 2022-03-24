import {useContext} from "react"
import { CartContext } from "../context/CartContext"



const Cart=()=>{

    const{clear,cart,removeItem}=useContext(CartContext)

    
    return (
        <>
            <h2 className="cartTitle">Carrito</h2>

          {cart.map(item=>(

            <div key={item.product.item.id} className="productCartCont">
                
                <p className="cartItem">{item.product.item.name}</p>
                <p className="cartItem">${item.product.item.price}</p>

                <button className="deleteItemBtn" id="empty" onClick={()=>removeItem(item.product)} > X </button> 

            </div>

          ))}


            <button className="clearBtn" id="empty" onClick={clear} > VACIAR CARRITO</button>
           
          
        </>
    )
}

export default Cart