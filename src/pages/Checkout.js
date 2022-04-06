import {useContext} from "react"
import { CartContext } from "../context/CartContext"
import  {useState} from "react";
import { addDoc,collection, serverTimestamp } from "firebase/firestore"
import {db} from "../components/Firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Checkout=()=>{

    const{clear,cart,removeItem,totalPrice,totalProducts}=useContext(CartContext)
    
    const [checkoutInput,setCheckoutInput]=useState({

        name:" ",
        surname:" ",
        email:" ",
        password:"",
        address:" ",
    })

    const handleInput=(e)=>{
        e.persist();
        
        setCheckoutInput({...checkoutInput,[e.target.name]:e.target.value})

    }

    let formValidation = false

    const handleValidation=(e)=>{
        e.preventDefault()

        if(checkoutInput.name ===" " || checkoutInput.surname ===" " || checkoutInput.email ===" " || checkoutInput.password ===" " || checkoutInput.address ===" "){
            toast.error("Los datos son necesarios para la compra",{
                autoClose: 3000,
                className:"errorToast"
            })
            formValidation=false
            
        }else{
            formValidation=true
            
        }

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

        if(formValidation==true){

            if (totalProducts !==0 ){
                const purchaseCollection = collection(db,"purchase")
                const cartPurchase=addDoc(purchaseCollection,ticket)
                
    
                cartPurchase
                .then(res=>{
                    toast.success("Compra realizada con éxito",{
                        autoClose: 3000,
                        className:"successToast"
                    })
                    clear()
                })
                
            }else{
                toast.error("No hay productos en el carrito",{
                    autoClose: 3000,
                    className:"errorToast"
                })
            }

            

        }else{
            toast.error("Los datos son necesarios para completar la compra",{
            autoClose: 3000,
            className:"errorToast",
        })
        }

        
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
                            autoComplete="off"
                            placeholder="Nombre"
                            onChange={handleInput}
                            value={checkoutInput.name}
                            
                            
                        />

                        <label className="formLabel">Apellido</label>
                        <input
                            className="surname"
                            name="surname"
                            type="text"
                            autoComplete="off"
                            placeholder="Apellido"
                            onChange={handleInput}
                            value={checkoutInput.surname}
                        />

                        <label className="formLabel">Email</label>
                        <input
                            className="email"
                            name="email"
                            type="email"
                            autoComplete="off"
                            placeholder="Email"
                            onChange={handleInput}
                            value={checkoutInput.email}
                        />

                        <label className="formLabel">Contraseña</label>
                        <input
                            className="password"
                            name="password"
                            type="password"
                            autoComplete="off"
                            placeholder="Contraseña"
                            onChange={handleInput}
                            value={checkoutInput.password}
                        />

                        <label className="formLabel">Dirección</label>
                        <input
                            className="adress"
                            name="adress"
                            type="text"
                            autoComplete="off"
                            placeholder="Dirección"
                            onChange={handleInput}
                            value={checkoutInput.adress}
                        />

                        <button onClick={handleValidation} className="submitForm">CONFIRMAR DATOS</button>
                        
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