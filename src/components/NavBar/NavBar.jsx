import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar () {
    return (
        <Navbar className="bg-dark" expand="lg">
            <Navbar.Brand>
                <Link to="/">
                    <img
                    src="/img/logoHamburguesa.png" 
                    alt="logo"
                    width="100"
                    height="100"
                    className="d-inline-block align-li"
                    />
                </Link>
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="collapse">
                    <Nav className=" div-link">
                        <Link to="/category/hamburguesa">Hamburguesas</Link>
                        <Link to="/category/guarniciones">Guarniciones</Link>
                        <Link to="/category/postres">Postres</Link>
                    </Nav>
                    </Navbar.Collapse>
            <Link to="/cart" className="img-carrito"><CartWidget /></Link>
        </Navbar>
    );
}

export default NavBar;



