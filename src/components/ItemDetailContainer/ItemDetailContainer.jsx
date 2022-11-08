import React, {useState, useEffect} from "react";
import { getOneItem } from "../../mockService/mockService.js";
import { useParams } from "react-router-dom";


function ItemDetailContainer () {
    const [product, setProduct] = useState ([]);

    let params = useParams();
    let id = params.id;

    useEffect(() => {
        getOneItem(id).then((product) => {
            setProduct(product);
        })
        .catch((error) => alert(error));
    }, []);

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
        </div>
    );
}

export default ItemDetailContainer;