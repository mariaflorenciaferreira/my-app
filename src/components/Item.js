import {useState,useEffect} from "react"



function Item (){

    
 let plantList=[
    {
        id:1,
        nombre: "MONSTERA - Costilla de Adán",
        precio:100,
        src:"public/img/costilla_adan.jpg"
    },
    {
        id:2,
        nombre:"Gomero",
        precio:200
    },
    {
        id:3,
        nombre:"Sansevieria",
        precio:150
    },
]
      
let [loading,setLoading]=useState(true)
let [products,setProducts]=useState([])
   

useEffect(()=>{
        setTimeout(()=>{
            setProducts(plantList)
            setLoading(false)
        },2000)
    })
    
    return(
        <div>
        {products.map((products,nombre,src)=>{
            return (
                <li>
                    <div className="product">
                    <div className="imgContainer">
                        <img
                        src={products.src}
                        alt="foto producto"
                        className="productImg"
                        />
                    </div>
                    <h5 class="productName"> {products.nombre}</h5>
                    <p class="productPrice">${products.precio}</p>
                    </div>
                </li>
            )
        })
        
        }
        </div>
    )
}




export default Item