import { useEffect, useState } from 'react';
import ProductsContainer from '../ProductContainer/ProductsContainer';
import IProductItems from '../../../types/IProductItem';
import axios from 'axios';
import ProductType from '../../../constants/productsTypes';

const ProductsMain = () => {
    const [products, setProducts] = useState<IProductItems>({
        popular: [],
        discounts: [],
        news: [],
    });
    
    useEffect(() => {
        const getProducts = async () => {
          try {
            const response = await axios.get<IProductItems>("http://localhost:5000/products");

            setProducts(response.data);
          } catch (error) {
            console.error("Error fetching menu items:", error);
          }
        }
        
        getProducts();
    }, []);

    return (
        <div style={{ marginTop: "100px"}}>
            <ProductsContainer 
                products={products.popular} 
                type={ProductType.POPULAR} 
                title='Популярні'
                subtitle="Хіт продажів"
            />
            <ProductsContainer 
                products={products.discounts} 
                type={ProductType.DISCOUNTS} 
                title='Знижки'
                subtitle="Вигідні пропозиції"
            />
            <ProductsContainer 
                products={products.news} 
                type={ProductType.NEWS} 
                title='Новинки'
                subtitle="NEW"
            />
        </div>
    );
};

export default ProductsMain;