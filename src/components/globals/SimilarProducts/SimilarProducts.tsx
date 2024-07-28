import { FC, useEffect, useState } from 'react';

import ProductsContainer from '../../ProductComponents/ProductContainer/ProductsContainer';

import ApiClient from '../../../api/ApiClient';
import { TProductFullData } from '../../../types/IProductItem';


interface ISimilarProductsProps {
    currentItem: TProductFullData | null;
}

const SimilarProducts: FC<ISimilarProductsProps> = ( { currentItem } ) => {
    const [items, setItems] = useState([]);


    useEffect(() => {

        const getItems = async () => {
            try{
                const productItems: TProductFullData[] = await ApiClient.GetCatalogItems(currentItem?.catalog || "") as TProductFullData[];


                const preparedItems = productItems.filter(item => item.id !== currentItem?.id)  as TProductFullData[];
                
                setItems(preparedItems)
            } catch(e){
                console.log(e)
            }
        }
                
        getItems()
    }, [currentItem])

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