



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
                <h5 class="productName"> {props.name}</h5>
                <p class="productPrice">${props.price}</p>
            </div>          
    )

}

export default Item