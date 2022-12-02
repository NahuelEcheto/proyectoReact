import React from 'react';
import Button from "../Button/Button";
import { Link } from 'react-router-dom';
import "./checkOut.css";

function CheckOut() {
  return (
    <div className="checkout">
        <h1>Gracias por tu compra</h1>
        <Link to="/">
            <Button>Volver al inicio</Button>
        </Link>
    </div>
  )
}

export default CheckOut