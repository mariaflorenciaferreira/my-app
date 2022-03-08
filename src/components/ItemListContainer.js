import ItemCount from "./ItemCount"
import ItemList from "./ItemList";




function ItemListContainer(props){

        return( 
        <main >
            
            
            <div className="ItemListContainer">
            <h2 className="greetings">Bienvenido {props.nombre} {props.apellido}!  </h2>
                <ItemList />
            </div>
            <ItemCount />

        </main>
    );

}

ItemListContainer.defaultProps={
    nombre:"Florencia",
    apellido:"Ferreira"
}

export default  ItemListContainer