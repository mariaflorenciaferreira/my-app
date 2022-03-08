import {useState,useEffect} from "react"
import Item from "./Item"




function ItemList(){

    const plantList=[
        {
            id:1,
            name: "MONSTERA - Costilla de Adán",
            price:100,
            src:"/img/costilla_adan.jpg",
            stock:4
        },
        {
            id:2,
            name:"Gomero",
            price:200,
            src:"/img/gomero.jpg",
            stock:10
    
        },
        {
            id:3,
            name:"Sansevieria",
            price:150,
            src:"/img/sansevieria.jpg",
            stock:6
    
        },
        {
            
            id:4,
            name:"Haworthia",
            price:500,
            src:"/img/haworthia.jpg",
            stock:3
        },
        {
            id:5,
            name:"Strelitzia",
            price:450,
            src:"/img/strelitzia.jpg",
            stock:1  
        },
        {
            id:6,
            name:"Tronco brasilero",
            price:450,
            src:"/img/tronco_brasil.jpg",
            stock:7  
        }

    ]
    

        
    const [loading,setLoading]=useState(true)
    const [products,setProducts]=useState([])
    
    
        useEffect(()=>{
            const PromiseTime= new Promise((res,rej)=>{
                setTimeout(()=>{
                    res(plantList)
                    setLoading(false)
                },2000)
            })

            PromiseTime
            .then((res)=>{
                setProducts(plantList);
            })
            .catch((rej)=>{
                <p>La pagina no pudo ser cargada</p>

            })
            .finally(()=>{
                setLoading(false);
            })
   

        },[])

    return(
        
        <div className="shopSection">
            <p className="shopTitle">{loading ? "CARGANDO PRODUCTOS" : "PRODUCTOS DISPONIBLES"}</p>
           
            <div >
                <ul className="productsSection">
                    {products.map((products)=>{
                        return <Item name={products.name} price={products.price}  img={products.src} stock={products.stock}/>
                    })}
                </ul>  
            </div>
        </div>           
    )

}




export default ItemList


