import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getItem, getItemCategory } from "../../services/firebase";
import FlexWrapp from "../FlexWrapp/FlexWrapp";
import Loader from "../Loader/Loader";


function ItemListContainer (props) {
    const [listaProducts, setListaProducts] = useState ([]);
    const [feedbackMsg, setFeedbackMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const {category} = useParams();

    useEffect(() => {
        setIsLoading(true);
        if(category) 
            getItemCategory(category)
            .then((products) => {
                setListaProducts(products);
            })
            .catch(error =>{
                setFeedbackMsg(error.message)
            })
            .finally( () => setIsLoading(false))
        else{
            getItem()
            .then((products) => {
                setListaProducts(products);
            })
            .finally( () => setIsLoading(false))
        }
    }, [category]);

    if (isLoading) return (
        < FlexWrapp>
            <Loader color="grey" speed={1} size={40} />
        </FlexWrapp>
    )

    return (
        <>
            <ItemList feedbackMsg={feedbackMsg} listaProducts={listaProducts}/>
        </>
    );
}

export default ItemListContainer;