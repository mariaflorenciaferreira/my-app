import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {db} from "./Firebase";
import {getDocs, collection, query,where} from "firebase/firestore"




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
           // agrega toastify
          
      })
      .finally(()=> setLoading(false)  )

    }else{
      const dataCollection = collection(db,"listaProductos")
      const filtroCategorias= query(dataCollection,where ("ambiente","==",ambiente))
      const documentos=getDocs(filtroCategorias)
      
      
      documentos
        .then(respuesta => setProducts(respuesta.docs.map( doc=>  doc.data())) )
        .catch(()=>{
           // agrega toastify
          
        })
        .finally(()=> setLoading(false)  )
    }
    
  }, [ambiente]);

  return (
    <main>
      <div className="ItemListContainer">
        <h2 className="greetings">
          Bienvenido {props.nombre} {props.apellido}!{" "}
        </h2>
        <div className="shopSection">
          <p className="shopTitle">
            {loading ? "CARGANDO PRODUCTOS" : "PRODUCTOS DISPONIBLES"}
          </p>
         <ItemList plantas={products} />
        </div>
      </div>
    </main>
  );
}

export default ItemListContainer;
