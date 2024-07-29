import { useEffect, useState } from 'react';

import ProductsContainer from "../../ProductComponents/ProductContainer/ProductsContainer";

import useQuery from '../../../hooks/useQuery';

import getItemFromStorage from '../../../helpers/getItemFromStotage';


const ViewedItems = () => {
    const [items, setItems] = useState([]);
    
    const query = useQuery();
    const currentItemUrl = query.get('url') || "";

    useEffect(() => {
        const itemsFromStorage = getItemFromStorage("viewedItems");
        console.log(currentItemUrl)
        setItems(itemsFromStorage)
    }, [currentItemUrl])

    return (
        items?.length !== 0 && items !== null
        &&
        <ProductsContainer 
            products={items} 
            title='Ви переглядали'
        />
    )
};

export default ViewedItems;