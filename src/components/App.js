import Header from "./Header"
import {BrowserRouter} from "react-router-dom"
import Main from "./Main"
import { CartContextProvider } from "../context/CartContext"
import Footer from "./Footer"



function App(){
    return (

        <CartContextProvider>
            <BrowserRouter>
                <Header className="header"/>
                <Main/>
                <Footer/>

            </BrowserRouter>  
        </CartContextProvider>
        
    
    )
}

export default App