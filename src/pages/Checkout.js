import {useContext} from "react"
import { CartContext } from "../context/CartContext"
import  {useState} from "react";
import { addDoc,collection, serverTimestamp } from "firebase/firestore"
import {db} from "../components/Firebase";

import {Link} from "react-router-dom"


const Checkout=()=>{

    const{clear,cart,removeItem,totalPrice,totalProducts}=useContext(CartContext)
    
    const [checkoutInput,setCheckoutInput]=useState({

        name:"",
        surname:"",
        email:"",
        password:"",
        address:"",
    })

    const handleInput=(e)=>{
        e.persist();
        setCheckoutInput({...checkoutInput,[e.target.name]:e.target.value})

    }

    const buyCart=(e)=>{
        e.preventDefault();
        

        const ticket={
            
            buyer: {
                nombre:checkoutInput.name,
                apellido:checkoutInput.surname,
                email:checkoutInput.email,
                password:checkoutInput.password,
                direccion:checkoutInput.address,
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
            console.log(ticket)
            // mensaje de cmpra completa!
            clear()
        })
    }

    return (          
            <div className="checkOutContainer">
                
                

                <div>
                    <h3 className="formTitle">INGRESA TUS DATOS</h3>
                    <form className="userForm">
                        
                        <label className="formLabel">Nombre</label>
                        <input
                            className="name"
                            name="name"
                            type="text"
                            onChange={handleInput}
                            value={checkoutInput.name}
                            
                        />

                        <label className="formLabel">Apellido</label>
                        <input
                            className="surname"
                            name="surname"
                            type="text"
                            onChange={handleInput}
                            value={checkoutInput.surname}
                        />

                        <label className="formLabel">Email</label>
                        <input
                            className="email"
                            name="email"
                            type="email"
                            onChange={handleInput}
                            value={checkoutInput.email}
                        />

                        <label className="formLabel">Contraseña</label>
                        <input
                            className="password"
                            name="password"
                            type="password"
                            onChange={handleInput}
                            value={checkoutInput.password}
                        />

                        <label className="formLabel">Dirección</label>
                        <input
                            className="adress"
                            name="adress"
                            type="text"
                            onChange={handleInput}
                            value={checkoutInput.adress}
                        />
                        
                    </form>
                </div>

                <div >
                   
                    <h2 className="cartTitle">TU COMPRA</h2>
                
                    <div className="checkCartContainer">

                        <div className="checkCart">
                            {cart.map(item=>(
                            <div key={item.product.item.id} className="productCheckCont">
                                <img src={item.product.item.src} alt="foto producto" className="checkoutImg"/>
                                <p className="cartItem">{item.product.item.name}</p>
                                <p className="cartPrice">${item.product.item.price}  x  {item.count}</p>
                                <button className="deleteCart" id="empty" onClick={()=>removeItem(item.product)} > X </button> 
                            </div>
                            ))}
            
                            <p className="totalCart">Total: ${totalPrice}</p>
                            <p className="totalProducts">Productos en carrito: {totalProducts}</p>

                            <button className="buyBtn"  onClick={buyCart}>PAGAR</button>
                        </div>


                    </div>
                        
                    
                </div>
                
                
                
            </div>
    )
}

export default Checkout