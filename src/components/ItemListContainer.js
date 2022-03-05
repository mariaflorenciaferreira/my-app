import ItemCount from "./ItemCount"


function ItemListContainer(props){
    return <main className="ItemListContainer">
        <h2 >Bienvenido {props.nombre} {props.apellido}!  </h2>
        <ItemCount />
        

    </main>

}

ItemListContainer.defaultProps={
    nombre:"Florencia",
    apellido:"Ferreira"
}

export default  ItemListContainer