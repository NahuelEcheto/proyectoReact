import "./navBar.css";
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar () {
    return (
        <div className="div-navBar">
            <Link to="/" className="logo"><img src="/img/logo.jpg" alt="logo" /></Link>
            <div className="div-link">
                <Link to="/">Cerraduras</Link>
                <Link to="/">Bisagras</Link>
                <Link to="/detalle">Detalle</Link>
            </div>
            <Link to="/" className="img-carrito"><CartWidget /></Link>
        </div>
    );
}

export default NavBar;