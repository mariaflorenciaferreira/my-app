import ItemCount from "./ItemCount"
import {Link} from "react-router-dom"

function Item(props){

    return(
        <div className="product">

<Link to={"/item/"+props.id} className="navLinks" >
<div className="imgContainer">
                <img
                    src={props.img}
                    alt="foto producto"
                    className="productImg"

                />
            </div>

</Link>
            
                <h5 className="productName"> {props.name}</h5>
                <p className="productPrice">${props.price}</p>

                <ItemCount initialShoppingCart={1} stock={props.stock}/>        

        </div>   
               
    )

}

export default Item