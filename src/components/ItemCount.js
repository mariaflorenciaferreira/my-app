import {useState, useContext} from "react"


const ItemCount= (props)=>{


    const [counter, setCounter] = useState(props.initialShoppingCart)
    const [stock,setStock]=useState(props.stock)
    const [itemsOnCart,setCart]=useState()


   


    const addItem =()=>{
       if (counter<=props.stock){
        setCounter(counter+1)
        setStock(stock-1)
       }  
       
    }

    const substractItem =()=>{
       if (counter>0) {
        setCounter(counter-1) 
        setStock(stock+1)
       } 
    }
    const resetCounter=()=>{
        if (counter>props.initialShoppingCart){
            setCounter(0) 
            setStock(props.stock)
        } 

    }

    function hide(id){
        var elementoOculto = document.getElementById(id);
        elementoOculto.style.display = "none";
    }

    // function show(id){
    //     var elementoMostrar = document.getElementById(id);
    //     elementoMostrar.style.display = "block";
    // }

    const onAdd=()=>{
        if (counter>0){
            setCart({counter}) 
            console.log("Items en el carrito:" + {itemsOnCart})
            hide("empty")
  
        } 
    }


    return <div className="counterContainer" id="blockCounter">

         <div className="cartBtnBlock" >
            <button className="cartItemsBtn" onClick={addItem}>+</button>
            <p className="counterText" > {counter}</p>
            <button className="cartItemsBtn" onClick={substractItem}>-</button>
        </div>
        
        <button className="counterBtn" id="empty" onClick={resetCounter}>VACIAR CARRITO</button>
        <button className="counterBtn" onClick={onAdd} >COMPLETAR MI COMPRA </button>

        <p className="stockText">Productos en stock: {stock}</p>
        

    </div>

}



export default ItemCount