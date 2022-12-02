import React, {useContext} from 'react';
import { createBuyOrderFirestore } from '../../services/firebase';
import cartContext from "../../storage/CartContext";
import Button from '../Button/Button';
import swal from "sweetalert";
import { useNavigate, Link } from "react-router-dom";
import BuyForm from './BuyForm';
import "./cartView.css";

import Table from 'react-bootstrap/Table';


function CartView() {

  const {cart, removeItem, totalPriceInCart, clear} = useContext(cartContext);  
  const navigate = useNavigate();  
  
  if(cart.length === 0) return(
    <div style={{ height: '400px' }} className="text-center">
      <h1 style={{  color: "white" }}>Carrito vacio</h1>
      <Link to="/"><Button>Volver al inicio</Button></Link>
    </div>
  )

  async function createBuyOrder(userData) {
    const buyData = {
      buyer: userData,
      items: cart,
      total: totalPriceInCart(),
      date: new Date(),
    };

    createBuyOrderFirestore(buyData).then( orderId => {
      clear();
      navigate(`/checkout/${orderId}`);
      swal({
        title: `Gracias por tu compra`,
        text: `El identificador de tu orden es ${orderId}`,
        icon: "success",
      });

    });

  };

  return (
    <div className="div-cartview">
        <h1>Carrito de compras</h1>
        {cart.map(cartItem => (
            <div key={cartItem.id}>
              <Table striped>
                <thead>
                  <tr>
                    <th></th>
                    <th>Producto</th>
                    <th>Precio por unidad</th>
                    <th>Cantidad</th>
                    <th>Total a pagar</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><img src={cartItem.thumbnail} alt={cartItem.title} /></td>
                    <td><h3>{cartItem.title}</h3></td>
                    <td><h4>$ {cartItem.price}</h4></td>
                    <td><h4>{cartItem.cantidad}</h4></td>
                    <td><h4>{cartItem.cantidad * cartItem.price}</h4></td>
                    <td><Button onClick={()=> removeItem(cartItem.id)} type="borrar">X</Button></td>
                  </tr>
                </tbody>
              </Table>
            </div>
        ))}
        <div className="total-price">
          <Button type="btn-agregar" onClick={clear}>Vaciar carrito</Button>
          <h2>Total a pagar: ${totalPriceInCart()}</h2>
        </div>
        <BuyForm onSubmit={createBuyOrder} />
    </div>
  );
}

export default CartView
