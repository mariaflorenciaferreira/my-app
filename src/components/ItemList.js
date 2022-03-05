import {useState,useEffect} from "react"


function ItemList(){

    let plantList=[
        {
            id:1,
            nombre: "Costilla de Adán",
            precio:100
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
            <p>{loading ? " " : "VER LISTA DE PRODUCTOS"}</p>
            <button className="productListBtn">˅</button>
            <ul>
                {products.map((products,nombre)=>{
                    return (

                        <li>
                                                        
                            <div className="product">

                            <div class="imgContainer">
                                <img
                                src=""
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
                
            </ul>
        </div>
    )

    



}



export default ItemList


