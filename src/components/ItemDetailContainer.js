import ItemDetail from "./ItemDetail";
import {useEffect,useState} from "react"


function ItemDetailContainer(){

    const firstItem={id:2,
        name:"Gomero",
        price:200,
        src:"/img/gomero.jpg",
        stock:10,
        description:"Aca debería haber una explicación de características de la planta"
    }

    const [loading,setLoading]=useState(true)
    const [item,setItem]=useState([])
    
    
        useEffect(()=>{
            const PromiseTime= new Promise((res,rej)=>{
                setTimeout(()=>{
                    res(firstItem)
                    setLoading(false)
                },2000)
            })

            PromiseTime
            .then((res)=>{
                setItem(firstItem);
            })
            .catch((rej)=>{
                <p>La sección no pudo ser cargada</p>

            })
            .finally(()=>{
                setLoading(false);
            })


        },[])

    return(
        
        <div className="itemContainer">
            <p >{loading ? "Cargando detalles" : <ItemDetail item={item}/>}</p>
        </div>           
    )


}


export default ItemDetailContainer