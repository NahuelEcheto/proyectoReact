import React from 'react';
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Item.css";

function Item(props) {

  let urlDetail = `/detalle/ ${props.id}`

  return (
    <div className="card">
      <div className="img-card">
        <img src={props.img} alt="Imagen de producto" />
      </div>
      <div className="info-card">
        <h2>{props.title}</h2>
        <p>{props.detail}</p>
        <h4 className="price-card">$ {props.price}</h4>
      </div>
      <Link to={urlDetail}>
        <Button color="grey" textColor="white">Ver detalle</Button>
      </Link>
    </div>
  )
}

export default Item