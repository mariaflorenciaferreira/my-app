import Header from "./Header"
import {BrowserRouter} from "react-router-dom"
import Main from "./Main"
import { CartContextProvider } from "../context/CartContext"



function App(){
    return (

        <CartContextProvider>
            <BrowserRouter>
                <Header className="header"/>
                <Main/>
            </BrowserRouter>  
        </CartContextProvider>
        
    
    )
}

export default App