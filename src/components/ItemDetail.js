

function ItemDetail(props){

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
                </div>
        </div>   
    )

}

export default ItemDetail