import Header from "./Header"
import ItemListContainer from "./ItemListContainer"

function App(){
    return (
        <>
            <Header className="header"/>
            <ItemListContainer  nombre="Florencia" apellido="Ferreira"/>
        </>
    )
}

export default App