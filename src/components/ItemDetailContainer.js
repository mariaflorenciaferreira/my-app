import ItemDetail from "./ItemDetail";
import {useEffect,useState} from "react"
// import{plantList} from "./products"
import { useParams } from "react-router-dom";
import {db} from "./Firebase";
import {getDoc,collection,doc,where,query,getDocs} from "firebase/firestore"


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
                // funcion then abreviada

                    .then(respuesta => setItem(respuesta.docs.map( doc=>  doc.data())[0]) )
                    .catch(()=>{
                    // agrega toastify
                    
                    })
                    .finally(()=> setLoading(false)  )
                
            })
            .catch((error)=>{
                console.log(error)
            })


            



            // const PromiseTime= new Promise((res,rej)=>{
            //     setTimeout(()=>{
            //         res(plantList)
            //         setLoading(false)
            //     },2000)
            // })

            // PromiseTime
            // .then((data)=>{
            //    const itemRender= data.find((item)=>{
                    
            //         return item.id.toString()===id
            //     })
            //     setItem(itemRender)

            // })
            // .catch((rej)=>{
            //     <p>La sección no pudo ser cargada</p>

            // })
            // .finally(()=>{
            //     setLoading(false);
            // })

        },[id])

    return(
        
        <div className="itemContainer">
            {loading ? "CARGANDO DETALLES" : <ItemDetail item={item} stock={item.stock} />}
        </div>           
    )
}


export default ItemDetailContainer