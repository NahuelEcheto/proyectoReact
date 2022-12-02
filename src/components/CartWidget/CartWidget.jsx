import React, { useContext } from "react";
import cartContext from "../../storage/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";



function CartWidget() {

  const { totalItemsInCart } = useContext(cartContext);

  return (
    <div>
        <div><FontAwesomeIcon icon={ faCartShopping }></FontAwesomeIcon></div>
        {
         (totalItemsInCart() > 0)?
          <><span>{totalItemsInCart()}</span></>
          : <></>
        }
    </div>
  );
}

export default CartWidget;
