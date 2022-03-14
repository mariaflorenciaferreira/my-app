import ItemCount from "./ItemCount"

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

                <ItemCount initialShoppingCart={1} stock={props.stock}/>        

        </div>   
               
    )

}

export default Item