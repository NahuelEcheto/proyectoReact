import "./navBar.css";
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar () {
    return (
        <div className="div-navBar">
            <Link to="/" className="logo"><img src="/img/logoHamburguesa.png" alt="logo" /></Link>
            <div className="div-link">
                <Link to="/">Hamburguesas</Link>
                <Link to="/">Guarniciones</Link>
                <Link to="/detalle">Bebida</Link>
                <Link to="/">Postres</Link>
            </div>
            <Link to="/" className="img-carrito"><CartWidget /></Link>
        </div>
    );
}

export default NavBar;