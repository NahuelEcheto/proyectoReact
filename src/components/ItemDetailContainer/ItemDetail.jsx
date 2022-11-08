import React from 'react'
import Button from "../Button/Button"

function ItemDetail(product) {
  return (
        <div className="card">
            <div className="img-card">
                <img src={product.thumbnail} alt="Imagen de producto" />
            </div>
            <div className="info-card">
                <h2>{product.title}</h2>
                <p>{product.detail}</p>
                <h4 className="price-card">$ {product.price}</h4>
            </div>
            <Button color="grey" textColor="white">Ver detalle</Button>
        </div>
  )
}

export default ItemDetail