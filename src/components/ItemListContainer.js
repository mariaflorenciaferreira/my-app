import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
// import { plantList } from "./products";
import {db} from "./Firebase";
import {getDocs, collection, query,where} from "firebase/firestore"
// import { CONSTANTS } from "@firebase/util";

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
      // funcion then abreviada

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
      // funcion then abreviada

        .then(respuesta => setProducts(respuesta.docs.map( doc=>  doc.data())) )
        .catch(()=>{
           // agrega toastify
          
        })
        .finally(()=> setLoading(false)  )


    }
    
    



    // PEDIDO LISTA PROD SIN FIREBASE
    // const PromiseTime = new Promise((res, rej) => {
    //   setTimeout(() => {
    //     res(plantList);
    //     setLoading(false);
    //     }, 2000);
    // });
    
    // PromiseTime.then((data) => {
        
    //     if (ambiente){
    //         const productosFiltrados= data.filter((product)=>{
    //             return product.ambiente==ambiente
    //         })
    //         setProducts(productosFiltrados)

    //     }else{
    //         setProducts(data);
    //     }
 
    // })
    //   .catch((rej) => {
    //     <p>La pagina no pudo ser cargada</p>;
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });

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
