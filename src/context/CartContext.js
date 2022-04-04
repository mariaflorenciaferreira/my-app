import { createContext, useState } from "react";
import {db} from "../components/Firebase";
import { addDoc,collection, serverTimestamp } from "firebase/firestore"

export const CartContext = createContext()



export const CartContextProvider= ({children})=>{

    const [cart,setCart]=useState([])

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    
    

    const addItem =(product,count)=>{
        let cartProduct={product,count}
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
        auxTotalPrice+=(product.item.price*count)
        setTotalPrice(auxTotalPrice)
        
        auxTotalProducts=totalProducts
        auxTotalProducts+=count
        setTotalProducts(auxTotalProducts)
        
    }
    

    const removeItem =(product)=>{

        if (isInCart(product)) {

            let auxTotalPrice=0
            let auxTotalProducts=0
            
            
            const cartAux = cart.filter(item=>item.product.item.id !==product.item.id)

            
            cartAux.forEach((item)=>{
              
                auxTotalPrice+=(item.product.item.price*item.count)
                setTotalPrice(auxTotalPrice)

                auxTotalProducts+=item.count
                setTotalProducts(auxTotalProducts)                
            })

            setCart(cartAux)

            if (cartAux.length===0){
                clear()
                

            }


        }
    }

    const clear=()=>{
       
        setCart([])
        setTotalPrice(0)
        setTotalProducts(0)
 
    }

    
    const isInCart=(product)=>{

        return cart && cart.some(item=>item.product===product)

    }


    const buyCart=()=>{

        

        const ticket={
            buyer: {
                nombre:"FLOR",
                telefono:"333",
                mail:"SDVDSV@"
            },
            items:cart,
            date: serverTimestamp(),
            total:{totalPrice},

        }
        const purchaseCollection = collection(db,"purchase")
        const cartPurchase=addDoc(purchaseCollection,ticket)

        cartPurchase
        .then(res=>{
            console.log(res.id)
            clear()
        })
    }
    



    return(
        <CartContext.Provider
        value={{
            addItem,
            removeItem,
            clear,
            cart,
            totalPrice,
            totalProducts,
            buyCart
            
            
        }}>
            {children}
        </CartContext.Provider>
    )
}

