import Button from "./Button/Button";
import "./navBar.css";
import CartWidget from "./CartWidget/CartWidget";

function NavBar () {
    return (
        <div className="div-navBar">
            <a href="#">LOGO</a>
            <div className="div-button">
                <Button color="red">Productos A</Button>
                <Button color="green">Productos B</Button>
                <Button color="orange">Productos C</Button>
            </div>
            <button><CartWidget /></button>
        </div>
    );
}

export default NavBar;