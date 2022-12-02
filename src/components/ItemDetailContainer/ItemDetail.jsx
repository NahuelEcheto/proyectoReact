import React, {useState, useContext} from 'react';
import ItemCount from "../ItemCount/ItemCount";
import Button from '../Button/Button';
import cartContext from "../../storage/CartContext";
import swal from "sweetalert";
import {Link} from "react-router-dom";
import "./itemDetail.css";

function ItemDetail({product}) {

    const [isInCart, setIsInCart] = useState(false);
    const { cart, addToCart } = useContext(cartContext);

    let itemInCart = cart.find( item=> product.id === item.id);
    let stock = product.stock;
    if (itemInCart) stock -= itemInCart.cantidad;
    
    function onAddToCart(cantidad) {
        swal({
          title: `Agregaste ${cantidad} unidades de ${product.title} al carrito`,
          icon: "success",
          timer: 1500,
        });

        const itemForCart = {
            ...product,
            cantidad,
        };

        addToCart(itemForCart);
        setIsInCart(true);
      }

    return (
        <div className="card-detail">
            <div className="img-detail">
             <img src={product.thumbnail} alt="Imagen de producto" />
            </div>
            <div className="info-detail">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h4 className="price-detail">$ {product.price}</h4>
                {!isInCart ? (
                     <ItemCount onAddToCart={onAddToCart} stock={stock} />
                ) : (
                        <div>
                            <Link to="/">
                                <Button type="btn-option">Volver al menú</Button>
                            </Link>
                            <Link to="/cart">
                                <Button type="btn-option">Ir al carrito</Button>
                            </Link>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default ItemDetail