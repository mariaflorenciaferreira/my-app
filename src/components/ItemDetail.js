import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import ItemCount from "./ItemCount"
import Cart from "../pages/Cart"

const ItemDetail = (props)=>{

    const {addItem,cart,clear,removeItem}= useContext(CartContext)
    

    const getCount= count=>{
        addItem(props,count)
       
    }
    

    
    
       return(
        <div className="detailSection">
            <div className="detailImgContainer">
                <img
                    src={props.item.src}
                    alt="foto producto"
                    className="detailImg"
                />
            </div>
            <div className="itemDetail">
                <h5 className="productDetailName"> {props.item.name}</h5>
                <p className="productDescription">{props.item.description}</p>
                <p className="productPrice">{props.item.price}</p>

                
                
              <ItemCount onAdd={getCount} init={0} stock={props.item.stock} /> 

              
               
            </div>

            <div className="cartDetail">
                <Cart key={props.item.id}></Cart>
            </div>

            
        </div>   
    )

}

export default ItemDetail