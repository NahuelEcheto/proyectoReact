import React, { useState } from 'react';

function ClickCounter(stock) {
  const [cantidad, setCantidad] = useState(1);

  function handleIncrement() {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  }

  function handleDecrement() {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  }

  function handleAddToCart() {
    console.log("Cart agregada");
  }

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <p>{cantidad}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
}

export default ClickCounter;