import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {db} from "./Firebase";
import {getDocs, collection, query,where} from "firebase/firestore"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Puff  } from 'react-loading-icons'


function ItemListContainer(props) {


  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { ambiente } = useParams();
  

  useEffect(() => {

    if(!ambiente){
      // PEDIDO LISTA PROD FIREBASE
    const dataCollection = collection(db,"listaProductos")
    const documentos =getDocs(dataCollection)
       

    documentos
      .then(respuesta => setProducts(respuesta.docs.map( doc=>  doc.data())) )
      .catch(()=>{
        toast.error("Ya estas en esta categoría.")
          
      })
      .finally(()=> setLoading(false)  )

    }else{
      const dataCollection = collection(db,"listaProductos")
      const filtroCategorias= query(dataCollection,where ("ambiente","==",ambiente))
      const documentos=getDocs(filtroCategorias)
      
      
      documentos
        .then(respuesta => setProducts(respuesta.docs.map( doc=>  doc.data())) )
        .catch(()=>{
          toast.error("La categoría de productos no está disponible.",{
            autoClose: 3000,
            className:"toast",
          })
          
        })
        .finally(()=> setLoading(false)  )
    }
    
  }, [ambiente]);

  return (
    <main>
      <div className="ItemListContainer">
        
        <div className="shopSection">
          <p className="shopTitle">
            {loading ? <Puff stroke="#474D46" /> : " "}
          </p>
         <ItemList plantas={products} />
        </div>
      </div>
    </main>
  );
}

export default ItemListContainer;
