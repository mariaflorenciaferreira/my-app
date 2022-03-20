import ItemDetail from "./ItemDetail";
import {useEffect,useState} from "react"
import{plantList} from "../products"
import { useParams } from "react-router-dom";



function ItemDetailContainer(){

    const [loading,setLoading]=useState(true)
    const [item,setItem]=useState([])
    const {id} = useParams();
    
        useEffect(()=>{
            const PromiseTime= new Promise((res,rej)=>{
                setTimeout(()=>{
                    res(plantList)
                    setLoading(false)
                },2000)
            })

            PromiseTime
            .then((data)=>{
               const itemRender= data.find((item)=>{
                    
                    return item.id.toString()===id
                })
                setItem(itemRender)

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
            {loading ? "Cargando detalles" : <ItemDetail item={item} stock={item.stock} />}
        </div>           
    )
}


export default ItemDetailContainer