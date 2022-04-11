import {useContext} from "react"
import { CartContext } from "../context/CartContext"

import {Link} from "react-router-dom"


const Cart=()=>{

    const{clear,cart,removeItem,totalPrice,totalProducts}=useContext(CartContext)

   

    
    return ( 
    <div  className="counterContainer" >
      <h2 className="cartTitle">TU COMPRA</h2>

      {cart.map(item=>(
        <div key={item.product.item.id} className="productCartCont">
           
          
        
          
          <p className="cartItem">{item.product.item.name}</p>
          <p className="cartPrice">${item.product.item.price}  x  {item.count}</p>

          <button className="deleteItemBtn" id="empty" onClick={()=>removeItem(item.product)} > X </button> 

        </div>

      ))}

        
        <p className="totalCart">Total: ${totalPrice}</p>
        <p className="totalProducts">Productos en carrito: {totalProducts}</p>
        
        
        <button className="buyBtn"  > <Link to="/Checkout" className="buyBtn">COMPLETAR COMPRA</Link></button>
        <button className="clearBtn" id="empty" onClick={clear} > VACIAR CARRITO</button>
        
    </div>
        
    )
}

export default Cart