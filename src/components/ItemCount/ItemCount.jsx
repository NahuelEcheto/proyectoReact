import React, { useState } from 'react';
import Button from "../Button/Button";
import "./itemCount.css";

function ClickCounter( {stock, onAddToCart} ) {
  const [cantidad, setCantidad] = useState(1);

  function handleIncrement() {
    if (cantidad < stock) setCantidad(cantidad + 1);
  }

  function handleDecrement() {
    if (cantidad > 1) setCantidad(cantidad - 1);
  }

  return (
    <div className="counter">
      <Button onClick={handleDecrement} color="red">-</Button>
      <span>{cantidad}</span>
      <Button onClick={handleIncrement} color="green">+</Button>
      <Button  type="btn-agregar" onClick={ ()=> onAddToCart(cantidad)}>Agregar al carrito</Button>
    </div>
  );
}

export default ClickCounter;