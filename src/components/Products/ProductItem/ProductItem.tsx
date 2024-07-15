import { FC } from 'react';
import { TProductItem } from '../../../types/IProductItem';
import cl from "./ProductItem.module.scss"
import { Button } from '@mui/base';

enum STOCK_VARIANT {
    EXISTS = "В наявності",
    NOT_EXISTS = "Немає в наявності",
}

const ProductItem: FC<{product: TProductItem}> = ( { product } ) => {
    console.log(product.img);
    
    return (
        <div className={cl["product-item"]}>
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