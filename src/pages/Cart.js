import {useContext} from "react"
import {Context} from "../components/Context"

const Cart=()=>{

    const resultado=useContext(Context) 
    const carrito =resultado.Cart
    const total=resultado.total
    console.log(carrito)
    
    return (
        <>

            <h2>Carrito</h2>
            {carrito.map(item=>(
                <div key={item.id}>
                    <h3>{item.nombre}</h3>
                    <h3>{item.cantidad}</h3>

                </div>


            ))}
          
        </>
    )
}

export default Cart