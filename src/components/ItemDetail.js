import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import ItemCount from "./ItemCount"

const ItemDetail = (props)=>{

    const {addItem,cart}= useContext(CartContext)
    

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
                
              <ItemCount onAdd={getCount} init={0} stock={props.item.stock}/>     
                </div>
        </div>   
    )

}

export default ItemDetail