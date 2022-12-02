import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import"./errorRuta.css";

function ErrorRuta() {
  return (
    <div className="error-ruta">
        <div>
            <h1>Error 404: Ruta no encontrada</h1>
        </div>
        <div>
            <Link to="/">
                <Button>Ir al inicio</Button>
            </Link>
            <Link to="/cart">
                <Button>Ir al carrito</Button>
            </Link>
        </div>
    </div>
  )
}

export default ErrorRuta