import LogoIcon from "./LogoIcon"
import {Link} from "react-router-dom"
import {FaInstagram,FaFacebook,FaMapMarkedAlt} from "react-icons/fa";


function Footer(){
    return (          
            <div className="footer">
                <div className="footer1">
                    <LogoIcon/>
                     <Link to="/" className="footerBrandLink" >VIVERO</Link>
                </div>
                
              

                <div className="footer2">
                    <p className="footerIcon"><FaFacebook/></p>             
                    <p className="footerIcon"><FaInstagram/></p>
                    <p className="footerIcon"><FaMapMarkedAlt/></p>
                </div>
                 
            </div>
   
    )
}

export default Footer