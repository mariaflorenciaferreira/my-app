import {useState} from "react"

const ItemCount = (props)=>{

    

    const [counter, setCounter] = useState(props.initialShoppingCart)

    const addItem =()=>{
       if (counter<props.stock) setCounter(counter+1) 
    }

    const substractItem =()=>{
       if (counter>0)  setCounter(counter-1) 
    }
    const resetCounter=()=>{
        if (counter>props.initialShoppingCart) setCounter(0) 

    }

    const onAdd=()=>{
        console.log("PASOS PARA COMPLETAR TU COMPRA")
    }


    return <div className="counterContainer">

         <div className="cartBtnBlock" >
            <button className="cartItemsBtn" onClick={addItem}>+</button>
            <p className="counterText"> {counter}</p>
            <button className="cartItemsBtn" onClick={substractItem}>-</button>
        </div>
        
        <button className="counterBtn" onClick={resetCounter}>VACIAR CARRITO</button>
        <button className="counterBtn" onClick={onAdd} >COMPLETAR MI COMPRA </button>

        <p className="stockText">Productos en stock: {props.stock}</p>
        

    </div>

}



export default ItemCount