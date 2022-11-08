import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import getItem, {getItemCategory} from "../../mockService/mockService.js";
import { useParams } from "react-router-dom";


function ItemListContainer (props) {
    const [listaProducts, setListaProducts] = useState ([]);
    const {categoryId} = useParams();

    useEffect(() => {
        if(categoryId) 
            getItemCategory(categoryId).then((products) => {
                setListaProducts(products);
            });
        else{
            getItem().then((products) => {
                setListaProducts(products);
            });
        }
    }, []);

    return (
        <>
            <h1>{props.greeting}</h1>
            <ItemList listaProducts={listaProducts}/>
        </>
    );
}

export default ItemListContainer;