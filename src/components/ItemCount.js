import {useState, useContext} from "react"
import { CartContext } from "../context/CartContext"


const ItemCount= ({stock,init,onAdd})=>{

    const [count, setCount] = useState(init)
  
    const {addItem,cart,clear,removeItem}= useContext(CartContext)


    return <div className="counterContainer" id="blockCounter">

        <div className="cartBtnBlock" >
            <button className="cartItemsBtn" disabled={stock === 0 || count <= 0}
                      onClick={() => setCount(count - 1)}>-</button>
            <p className="counterText" >{count} </p>

            <button className="cartItemsBtn"disabled={stock === 0 || count >= stock }
            onClick={() => setCount(count + 1)}>+</button>
        </div>
        
        <button className="counterBtn" id="empty" onClick={()=>{onAdd(count)}} >AGREGAR AL CARRITO</button>

       

        <p className="stockText">Productos en stock:{stock} </p>
        

    </div>

}



export default ItemCount