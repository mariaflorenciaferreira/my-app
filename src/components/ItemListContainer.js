import ItemCount from "./ItemCount"


function ItemListContainer(props){
    return <main className="ItemListContainer">
        <h2 >Bienvenido {props.nombre} {props.apellido}!  </h2>
        <ItemCount initialShoppingCart={1} stock={5}/>
        

    </main>

}

export default  ItemListContainer