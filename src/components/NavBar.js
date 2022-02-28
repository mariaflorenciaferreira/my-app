import {Container,Nav,Navbar,NavDropdown} from "react-bootstrap"
import LogoIcon from "./LogoIcon"
import CartWidget from "./CartWidget"

function NavBar() {
    return  <Navbar bg="light" expand="lg">
        <Container>
        
        <LogoIcon/>
        <Navbar.Brand href="#home"><h1>VIVERO</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home">INICIO</Nav.Link>
            <Nav.Link href="#link">INTERIOR</Nav.Link>
            <Nav.Link href="#link">EXTERIOR</Nav.Link>
            <NavDropdown title="TIENDA ONLINE" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Plantas interior</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Plantas exterior</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Herramientas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Sustratos</NavDropdown.Item>
                
            </NavDropdown>
            <CartWidget/>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    
}

export default NavBar



// <header>
//         <h1></h1>
    
//             <nav>
                
//                 <a href="#"></a>
//                 <a href="#">Interior</a>
//                 <a href="#">Exterior</a>
//                 <a href="#">Cuidados</a>
//                 <a href="#">Tienda Online</a>

//             </nav>
//     </header>