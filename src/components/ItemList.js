import {useState,useEffect} from "react"
import Item from "./Item"




function ItemList(){

    const plantList=[
        {
            id:1,
            name: "MONSTERA - Costilla de Adán",
            price:100,
            src:"/img/costilla_adan.jpg"
        },
        {
            id:2,
            name:"Gomero",
            price:200,
            src:"/img/gomero.jpg"
    
        },
        {
            id:3,
            name:"Sansevieria",
            price:150,
            src:"/img/sansevieria.jpg"
    
        },
    ]
    

        
    const [loading,setLoading]=useState(true)
    const [products,setProducts]=useState([])
    

        useEffect(()=>{
            setTimeout(()=>{
                setProducts(plantList)
                setLoading(false)
            },2000)
        })

    return(
        
        <div className="shopSection">
            <p className="shopTitle">{loading ? "CARGANDO PRODUCTOS" : "PRODUCTOS DISPONIBLES"}</p>
           
            <div >
                <ul className="productsSection">
                    {products.map((products)=>{
                        return <Item name={products.name} price={products.price}  img={products.src} />
                    })}
                </ul>  
            </div>
        </div>           
    )

}




export default ItemList


