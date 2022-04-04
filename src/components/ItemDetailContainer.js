import ItemDetail from "./ItemDetail";
import {useEffect,useState} from "react"
import { useParams } from "react-router-dom";
import {db} from "./Firebase";
import {collection,where,query,getDocs} from "firebase/firestore"


function ItemDetailContainer(){

    const [loading,setLoading]=useState(true)
    const [item,setItem]=useState([])
    const {id} = useParams();
    
        useEffect(()=>{

            const dataCollection = collection(db,"listaProductos")
            
            const filtroItem= query(dataCollection,where ("id","==",id))
            const documento=getDocs(filtroItem)
            
            documento
            .then((respuesta)=>{
                
                documento
                    .then(respuesta => setItem(respuesta.docs.map( doc=>  doc.data())[0]) )
                    .catch(()=>{
                    // agrega toastify
                    
                    })
                    .finally(()=> setLoading(false)  )
                
            })
            .catch((error)=>{
                console.log(error)
            })


        },[id])

    return(
        
        <div className="itemContainer">
            {loading ? "CARGANDO DETALLES" : <ItemDetail item={item} stock={item.stock} />}
        </div>           
    )
}


export default ItemDetailContainer