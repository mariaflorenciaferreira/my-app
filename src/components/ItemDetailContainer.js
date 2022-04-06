import ItemDetail from "./ItemDetail";
import {useEffect,useState} from "react"
import { useParams } from "react-router-dom";
import {db} from "./Firebase";
import {collection,where,query,getDocs} from "firebase/firestore"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
                        toast.error("El detalle del producto no está disponible",{
                            autoClose: 3000,
                            className:"toast",
                        })
                    
                    })
                    .finally(()=> setLoading(false)  )
                
            })
            .catch((error)=>{
                toast.error("El detalle del producto no está disponible",{
                    autoClose: 3000,
                    className:"toast",
                })
            })


        },[id])

    return(
        
        <div className="itemContainer">
            {loading ? "CARGANDO DETALLES" : <ItemDetail item={item} stock={item.stock} />}
        </div>           
    )
}


export default ItemDetailContainer