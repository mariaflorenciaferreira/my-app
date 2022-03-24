import { createContext, useState } from "react";



export const CartContext = createContext()



export const CartContextProvider= ({children})=>{

    const [cart,setCart]=useState([])

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);

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

        let auxTotalPrice=0
        let auxTotalProducts=0

        auxTotalPrice=totalPrice
        auxTotalPrice+=(product.price*count)
        setTotalPrice(auxTotalPrice)

        auxTotalProducts=totalProducts
        auxTotalProducts+=count
        console.log('total productos: '+ auxTotalProducts)
        setTotalProducts(auxTotalProducts)
        

    }
    

    const removeItem =(product)=>{
        if (isInCart(product)) {

            let auxTotalPrice=0
            let auxTotalProducts=0
            
            const cartAux = cart.filter(item=>item.product !==product)
            

            cartAux.forEach((item)=>{
                auxTotalPrice+=(item.product.price*item.count)
                setTotalPrice(auxTotalPrice)

                auxTotalProducts+=item.count
                setTotalProducts(auxTotalProducts)
            })

            setCart(cartAux)

            if (cartAux.length===0){
                clear()
                console.log('total productos: '+ auxTotalProducts)

            }


        }
    }

    const clear=()=>{
        console.log(cart)
        setCart([])
        setTotalPrice(0)
        setTotalProducts(0)
        
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

