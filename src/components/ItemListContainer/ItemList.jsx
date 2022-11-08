import React from 'react';
import Item from "../Item/Item";
import "./itemList.css";

function ItemList(props) {
    return (
        <div className="item-list">
            {props.listaProducts.map((product) => (
                <Item
                    key={product.id}
                    detail={product.description}
                    price={product.price}
                    img={product.thumbnail}
                    title={product.title}
                />
            ))}
        </div>
    )
}

export default ItemList