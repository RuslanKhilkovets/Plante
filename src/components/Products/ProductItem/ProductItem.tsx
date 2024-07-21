import { FC } from 'react';

import { Button } from '@mui/base';

import { TProductItem } from '../../../types/IProductItem';
import STOCK_VARIANT from '../../../constants/StockVariants';

import cl from "./ProductItem.module.scss"
import { useNavigate } from 'react-router-dom';
import PATHS from '../../../router/paths';


const ProductItem: FC<{product: TProductItem}> = ( { product } ) => {
    
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`${PATHS.ITEM}?url=${product.url || ""}`);
    };
    
    return (
        <div className={cl["product-item"]} onClick={handleNavigation}>
            <div className={cl["product-item__item"]}>
                <div className={cl["product-item__img"]} style={{
                    backgroundImage: `url(${product.img})`,
                }}></div>  
                <div className={cl["product-item__heading"]}>
                    <p className={cl["product-item__title"]}>
                        {product.title}
                    </p>
                    <Button className={cl["product-item__likes"]}></Button>
                </div>
            </div>
            <div className={cl["product-item__footer"]}>
                <div className={cl["product-item__item_info"]}>
                    <p className={cl["product-item__item_price_text"]}>
                        {product.price} грн
                    </p>
                    <p className={cl["product-item__item_price_stock"]}>
                        {product.isInStock ? STOCK_VARIANT.EXISTS : STOCK_VARIANT.NOT_EXISTS}
                    </p>
                </div>
                <Button className={cl["product-item__item_basket"]}></Button>
            </div>
        </div>
    );
};

export default ProductItem;