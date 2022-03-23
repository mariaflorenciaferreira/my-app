import {useState, useContext} from "react"


const ItemCount= ({stock,init,onAdd})=>{

    const [count, setCount] = useState(init)
    // const [stock,setStock]=useState(stock)

    // const addCounter =()=>{
    //     if (count<=stock){
    //         setCount(count + 1)
    //         setStock(stock-1)
    //     }  
    // }

    // const removeCounter =()=>{
    //     if (count>0) {
    //     setCount(count - 1)
    //     setStock(stock+1)
    //     } 
    // }
    
    

   



    return <div className="counterContainer" id="blockCounter">

        <div className="cartBtnBlock" >
            <button className="cartItemsBtn" disabled={stock === 0 || count <= 0}
                      onClick={() => setCount(count - 1)}

        //   onClick={removeCounter} 
           >-</button>
            <p className="counterText" >{count} </p>

            <button className="cartItemsBtn"disabled={stock === 0 || count >= stock }
            onClick={() => setCount(count + 1)}
        //   onClick={addCounter} 
          >+</button>
        </div>
        
        <button className="counterBtn" id="empty" onClick={()=>{onAdd(count)}} >AGREGAR AL CARRITO</button>
       

        <p className="stockText">Productos en stock:{stock} </p>
        

    </div>

}



export default ItemCount