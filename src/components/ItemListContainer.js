import ItemList from "./ItemList";




function ItemListContainer(props){

        return( 
        <main >
            
            <div className="ItemListContainer">
                <h2 className="greetings">Bienvenido {props.nombre} {props.apellido}!  </h2>
                <ItemList/>
                
            </div>
            
        </main>
    );

}


export default  ItemListContainer