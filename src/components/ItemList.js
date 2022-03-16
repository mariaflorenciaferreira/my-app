
import Item from "./Item"



function ItemList(props){

    const products=props.plantas
        
    

    return(
 
            <div >
                <ul className="productsSection">
                    {products.map((products)=>{
                        return <Item key={products.id} id={products.id} name={products.name} price={products.price}  img={products.src} stock={products.stock}/>
                    })}
                </ul>  
            </div>  
    )

}




export default ItemList


