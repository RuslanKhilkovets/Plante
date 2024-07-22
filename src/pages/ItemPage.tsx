import { Suspense, useEffect, useState } from 'react';

import ItemPresentation from '../components/ItemPresentation/ItemPresentation';
import ItemInfo from '../components/ItemInfo/ItemInfo';
import ProductsContainer from '../components/Products/ProductContainer/ProductsContainer';
import ViewedItems from '../components/ViewedItems/ViewedItems';

import IProductDetailsItem from '../types/IProductDetailsItem';

import addItemToStorage from '../helpers/addItemToStorage';
import ApiClient from '../api/ApiClient';
import useQuery from '../hooks/useQuery';
import { CircularProgress } from '@mui/material';


const ItemPage = () => {
    const [currentItem, setCurrentItem] = useState<IProductDetailsItem | null>(null);

    const query = useQuery();
    const currentItemUrl = query.get('url') || "";

    useEffect(() => {

        const getInfo = async (url: string) => {
            try {
                const product = await ApiClient.GetProductDetails(url);
                setCurrentItem(product[0]);
        
                addItemToStorage("viewedItems", product[0]);
            } catch (e) {
                console.log(e);
            }
        }

        getInfo(currentItemUrl);
    }, [currentItemUrl])


    console.log(currentItemUrl);
    
    return (
        <div className='global-container'>
            <Suspense fallback={<CircularProgress/>}>
                <ItemPresentation item={currentItem} />
                <ItemInfo 
                    item={currentItem}
                />
                <ProductsContainer 
                    title="Подібні товари"
                    products={[]}
                />
            </Suspense>
            
            
            <ViewedItems />
        </div>
    );
};

export default ItemPage;