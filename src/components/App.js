import Header from "./Header"
import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from "./ItemListContainer"

function App(){
    return (
        <>
            <Header className="header"/>
            <ItemListContainer  nombre="Florencia" apellido="Ferreira"/>
            <ItemDetailContainer/>
        </>
    )
}

export default App