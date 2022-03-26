import {useContext} from "react"
import { CartContext } from "../context/CartContext"



const Cart=()=>{

    const{clear,cart,removeItem,totalPrice,totalProducts}=useContext(CartContext)

    
    return ( 
    <div  className="counterContainer" >
      <h2 className="cartTitle">Carrito</h2>

      {cart.map(item=>(
        <div key={item.product.item.id} className="productCartCont">
           
          

          <p className="cartItem">{item.product.item.name}</p>
          <p className="cartPrice">${item.product.item.price}</p>

          <button className="deleteItemBtn" id="empty" onClick={()=>removeItem(item.product)} > X </button> 

        </div>

      ))}

        <p className="totalCart">Total: ${totalPrice.value}</p>
        <p className="totalCart">Total: ${totalPrice}</p>
        <p className="totalProducts">Productos en carrito: {totalProducts}</p>
        <button className="clearBtn" id="empty" onClick={clear} > VACIAR CARRITO</button>
        
    </div>
        
    )
}

export default Cart