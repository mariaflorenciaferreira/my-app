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

        <p className="cartText">Cantidad de plantas en tu carrito: {counter}</p>
        <div >
            <button className="cartItemsBtn" onClick={addItem}>+</button>
            <button className="cartItemsBtn" onClick={substractItem}>-</button>
        </div>
        
        <button className="counterBtn" onClick={resetCounter}>Vaciar carrito</button>
        <button className="counterBtn" onClick={onAdd} >Completar mi compra </button>

    </div>

}

export default ItemCount