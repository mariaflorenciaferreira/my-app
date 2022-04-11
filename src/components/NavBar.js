import {Container,Nav,Navbar} from "react-bootstrap"
import {Link} from "react-router-dom"
import LogoIcon from "./LogoIcon"
import CartWidget from "../widget/CartWidget"

function NavBar() {
    return  <Navbar className="navBar"  expand="lg" >
        <Container>
        
        <LogoIcon/>
        <Navbar.Brand as={Link} to="/" ><h1 className="brandText">VIVERO</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link to="/" className="navLinks"  >INICIO</Link>
            <Link to="/categoria/interior" className="navLinks" >INTERIOR</Link>
            <Link to="/categoria/exterior" className="navLinks" >EXTERIOR</Link>
            <Link to="/categoria/herramientas" className="navLinks" >HERRAMIENTAS</Link>
            <Link to="/categoria/sustratos" className="navLinks" >SUSTRATOS</Link>
            <Link to="/Checkout" ><CartWidget/></Link>
            
            
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    
}

export default NavBar


