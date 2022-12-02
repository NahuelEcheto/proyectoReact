import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { getOneItem } from "../../services/firebase";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import FlexWrapp from "../FlexWrapp/FlexWrapp";


function ItemDetailContainer () {
    const [product, setProduct] = useState ([]);
    const [isLoading, setIsLoading] = useState(true);
    const [feedbackMsg, setFeedbackMsg] = useState(null);

    let id = useParams().id;

    useEffect(() => {
        getOneItem(id).then((products) => {
            setProduct(products);
        })
        .catch((error) => {
            setFeedbackMsg(`Error: ${error.message}`)
        })
        .finally(() => setIsLoading(false));
    }, [id]);

    if (isLoading) return (
        < FlexWrapp>
            <Loader color="grey" speed={1} size={40} />
        </FlexWrapp>
    )

    return (
        <div>
            { feedbackMsg ? (
                <span style={{backgroundColor: "red"}}>{feedbackMsg}</span>
            ) : (
                <ItemDetail product={product} /> 
            )}
        </div>
    
    );
}

export default ItemDetailContainer;