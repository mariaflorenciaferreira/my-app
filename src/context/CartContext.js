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
    

    const removeItem =(product)=>{
        if (isInCart(product)) {
            console.log('removeItem(): esta en el carrito')
            const cartAux = cart.filter(item=>item.product !==product)
            setCart(cartAux)
        }
    }

    const clear=()=>{
        console.log(cart)
        setCart([])
        
        console.log(cart)
    }

    
    const isInCart=(product)=>{

        return cart && cart.some(item=>item.product===product)
    }


    

    return(

        <CartContext.Provider
        value={{
            addItem,
            removeItem,
            clear,
            cart
        }}>

            {children}
        </CartContext.Provider>
    )
}

