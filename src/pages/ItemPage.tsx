import { Suspense, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import { CircularProgress } from '@mui/material';

import ItemPresentation from '../components/ItemPresentation/ItemPresentation';
import ItemInfo from '../components/ItemInfo/ItemInfo';
import ProductsContainer from '../components/Products/ProductContainer/ProductsContainer';
import ViewedItems from '../components/ViewedItems/ViewedItems';
import CustomBreadcrumps from '../components/StyledComponents/CustomBreadcrumps';

import { TProductFullData } from '../types/IProductItem';

import addItemToStorage from '../helpers/addItemToStorage';
import ApiClient from '../api/ApiClient';
import useQuery from '../hooks/useQuery';


const ItemPage = () => {
    const [currentItem, setCurrentItem] = useState<TProductFullData | null>(null);

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
    
    return (
        <div className='global-container'>
            <Suspense fallback={<CircularProgress/>}>
                <CustomBreadcrumps />

                <ItemPresentation item={currentItem} />

                <ItemInfo 
                    item={currentItem}
                />

                <ProductsContainer 
                    title="Подібні товари"
                    products={[]}
                />
            </Suspense>

            <Helmet>
                <title>
                    {currentItem?.title || ""}
                </title>
            </Helmet>
            
            <ViewedItems />
        </div>
    );
};

export default ItemPage;