import ItemCount from "./ItemCount"
import {Link} from "react-router-dom"

function Item(props){

    return(
        <div className="product">
                <div className="imgContainer">
                <img
                        src={props.img}
                        alt="foto producto"
                        className="productImg"

                />
        </div>

    
            
                <h5 className="productName"> {props.name}</h5>
                <p className="productPrice">${props.price}</p>
                <Link to={"/item/"+props.id}> <button className="openProduct">VER DETALLE</button> </Link>
                

                {/* <ItemCount initialShoppingCart={1} stock={props.stock}/>         */}

        </div>   
   
)}

export default Item