import { useState } from 'react';
import ProductsContainer from '../Products/ProductContainer/ProductsContainer';

const ViewedItems = () => {
    
    const [items, setItems] = useState([]);
    
    return (
        <>
            {
                items?.length !== 0
                &&
                <ProductsContainer 
                    products={items} 
                    title='Ви переглядали'
                />
            }
        </>
    );
};

export default ViewedItems;