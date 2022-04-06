import Header from "./Header"
import {BrowserRouter} from "react-router-dom"
import Main from "./Main"
import { CartContextProvider } from "../context/CartContext"
import Footer from "./Footer"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App(){
    return (

        <CartContextProvider>
            <BrowserRouter>
                <Header className="header"/>
                <Main/>
                <Footer/>

            </BrowserRouter>  
            <ToastContainer />
        </CartContextProvider>
        
    
    )
}

export default App