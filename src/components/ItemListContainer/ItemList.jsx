import React from 'react';
import FlexWrapp from '../FlexWrapp/FlexWrapp';
import Item from "../Item/Item";
import Loader from '../Loader/Loader';

function ItemList(product) {

    let emptyarray = product.listaProducts.length === 0;

    return (
        <FlexWrapp>
            {emptyarray ? 
                product.feedbackMsg ?
                    <span style={{backgroundColor: "red"}}>{product.feedbackMsg}</span>
                    :
                    <Loader color="white" speed={1} size={40} />
             : 
                product.listaProducts.map((product) => (
                    <Item key={product.id} product={product} />
                ))
            }
        </FlexWrapp>
    )
}

export default ItemList