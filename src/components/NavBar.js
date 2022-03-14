import {Container,Nav,Navbar,NavDropdown} from "react-bootstrap"
import {Link} from "react-router-dom"
import LogoIcon from "./LogoIcon"
import CartWidget from "../widget/CartWidget"

function NavBar() {
    return  <Navbar className="navBar"  expand="lg" >
        <Container>
        
        <LogoIcon/>
        <Navbar.Brand href="#home"><h1 className="brandText">VIVERO</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link to="/" className="navLinks"  >INICIO</Link>
            <Link to="#link" className="navLinks" >INTERIOR</Link>
            <Link to="#link" className="navLinks" >EXTERIOR</Link>
            <Link to="#link" className="navLinks" >HERRAMIENTAS</Link>
            <Link to="#link" className="navLinks" >SUSTRATOS</Link>
            <Link to="#link" className="navLinks" >TIENDA ONLINE</Link>
            
            <CartWidget/>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    
}

export default NavBar


