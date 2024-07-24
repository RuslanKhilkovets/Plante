import { FC, useEffect, useState } from 'react';

import ProductsContainer from '../Products/ProductContainer/ProductsContainer';

import useQuery from '../../hooks/useQuery';
import getItemFromStorage from '../../helpers/getItemFromStotage';
import ApiClient from '../../api/ApiClient';


interface ISimilarProductsProps {
    category?: string;
}

const SimilarProducts: FC<ISimilarProductsProps> = ( { category = "" } ) => {
    const [items, setItems] = useState([]);
    
    const query = useQuery();
    const currentItemUrl = query.get('item') || "";

    useEffect(() => {

        const getItems = async () => {
            try{
                const items = await ApiClient.GetCatalogItems(category);

                setItems(items)

            } catch(e){
                console.log(e)
            }
        }
                
        getItems()
    }, [currentItemUrl])

    return (
        items?.length !== 0 && items !== null
        &&
        <ProductsContainer 
            products={items} 
            title='Подібні товари'
        />
    )
};

export default SimilarProducts;