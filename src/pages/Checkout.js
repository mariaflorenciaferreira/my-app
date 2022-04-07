import {useContext} from "react"
import { CartContext } from "../context/CartContext"
import  {useState} from "react";
import { addDoc,collection, serverTimestamp } from "firebase/firestore"
import {db} from "../components/Firebase";
import { toast } from 'react-toastify';
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

    let formValidation = true

    const handleValidation=(e)=>{
        e.preventDefault()

        let mailValidator=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if(checkoutInput.name==" "){
            toast.error("El nombre no es válido",{
                autoClose: 3000,
                className:"errorToast"
            })
            formValidation=false     
        }

        if(checkoutInput.surname==" "){
            toast.error("El apellido no es válido",{
                autoClose: 3000,
                className:"errorToast"
            })
            formValidation=false    
        }
        
        if(!mailValidator.test(checkoutInput.email)){
            toast.error("El mail no es válido",{
                autoClose: 3000,
                className:"errorToast"
            })
            formValidation=false    
        }

        if(checkoutInput.password.length<3){
            toast.error("La contraseña debe tener más de 3 caractéres",{
                autoClose: 3000,
                className:"errorToast"
            })
            formValidation=false    
        }

        if(checkoutInput.address==" "){
            toast.error("La dirección no es válida",{
                autoClose: 3000,
                className:"errorToast"
            })
            formValidation=false    
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


        if(formValidation){
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
                        
                        <div className="inputContainer">
                            
                            <input
                                className="name"
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="off"
                                onChange={handleInput}
                                value={checkoutInput.name}
                                required
                            />
                            <span className="bar"></span>
                            <label className="formLabel">Nombre</label>
                        </div>

                        <div className="inputContainer">
                            
                            <input
                                className="surname"
                                id="surname"
                                name="surname"
                                type="text"
                                autoComplete="off"
                                onChange={handleInput}
                                value={checkoutInput.surname}
                                required
                            />
                            <span className="bar"></span>
                            <label className="formLabel">Apellido</label>
                        </div>
                        
                        <div className="inputContainer">
                            <input
                                className="email"
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="off"
                                onChange={handleInput}
                                value={checkoutInput.email}
                                required
                            />
                            <span className="bar"></span>
                            <label className="formLabel">Email</label>
                        </div>
                        

                        <div className="inputContainer">
                            <input
                                className="password"
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="off"
                                onChange={handleInput}
                                value={checkoutInput.password}
                                required
                            />
                            <span className="bar"></span>
                            <label className="formLabel">Contraseña</label>
                            
                        </div>    

                        <div className="inputContainer">
                            <input
                                className="address"
                                id="address"
                                name="address"
                                type="text"
                                autoComplete="off"
                                onChange={handleInput}
                                value={checkoutInput.address}
                                required
                            />
                            <span className="bar"></span>
                            <label  className="formLabel">Dirección</label>
                        </div>
                        
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