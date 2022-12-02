import React from 'react';
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Item.css";

function Item({ product }) {

  let urlDetail = `/detalle/${product.id}`

  return (
    <div className="carta">
      <div className="img-card">
        <img src={product.thumbnail} alt="Imagen de producto" />
      </div>
      <div className="info-card">
        <h2>{product.title}</h2>
        <h4 className="price-card">$ {product.price}</h4>
      </div>
      <Link to={urlDetail}>
        <Button type="detalle-carta">Ver detalle</Button>
      </Link>
    </div>
  )
}

export default Item