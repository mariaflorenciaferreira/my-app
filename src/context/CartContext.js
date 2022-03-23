import { createContext, useState } from "react";



export const CartContext = createContext()



export const CartContextProvider= ({children})=>{

    const [cart,setCart]=useState([])

    const addItem =(product,count)=>{
        let cartProduct={product,count}
        console.log ('cartProduct',cartProduct)

        let cartAux=[]

        if(isInCart(product)){
            cartProduct=cart.find(item=>item.product===product)
            cartProduct.count=cartProduct.count+count
            cartAux=[...cart]

        }else{
            cartAux= [cartProduct,...cart]
        
        }

        setCart (cartAux)
    }
    

    // const removeItem =()=>{
    //     if (counter>0) {
    //         setCounter(counter-1)  
    //         setStock(stock+1)
    //     }
    // }

    const clear=()=>{
        setCart=([])
    }

    
    const isInCart=(product)=>{

        return cart && cart.some(item=>item.product===product)
    }


    

    return(

        <CartContext.Provider
        value={{
            addItem,
            // removeItem,
            // clear,
            // cart
        }}>

            {children}
        </CartContext.Provider>
    )
}

