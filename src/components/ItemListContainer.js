import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { plantList } from "../products";

function ItemListContainer(props) {

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { ambiente } = useParams();

  useEffect(() => {
    const PromiseTime = new Promise((res, rej) => {
      setTimeout(() => {
        res(plantList);
        setLoading(false);
        console.log(ambiente);
      }, 2000);
    });
    
    PromiseTime.then((data) => {
        
        if (ambiente){
            const productosFiltrados= data.filter((product)=>{
                return product.ambiente==ambiente
            })
            setProducts(productosFiltrados)

        }else{
            setProducts(data);
        }
 
    })
      .catch((rej) => {
        <p>La pagina no pudo ser cargada</p>;
      })
      .finally(() => {
        setLoading(false);
      });
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
         <ItemList plantas={products}/>
        </div>
      </div>
    </main>
  );
}

export default ItemListContainer;
