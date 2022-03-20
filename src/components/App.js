import Header from "./Header"
import {BrowserRouter} from "react-router-dom"
import Main from "./Main"



function App(){
    return (
   
        <BrowserRouter>
            <Header className="header"/>
            <Main/>
        </BrowserRouter>  
   
    
    )
}

export default App