import ItemCount from "./ItemCount"
import ItemList from "./ItemList";
import {useState,useEffect} from "react"





function ItemListContainer(props){

        return( 
        <main className="ItemListContainer">
            <h2 >Bienvenido {props.nombre} {props.apellido}!  </h2>
            <ItemCount />
            <ItemList />

        </main>
    );

}

ItemListContainer.defaultProps={
    nombre:"Florencia",
    apellido:"Ferreira"
}

export default  ItemListContainer