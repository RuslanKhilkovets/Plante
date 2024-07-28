import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { useSnackbar } from 'notistack';

import { useAppDispatch } from '../../../hooks/redux';
import { addItemToCart } from '../../../redux/slices/CartSlice';

import { TProductFullData } from '../../../types/IProductItem';
import STOCK_VARIANT from '../../../constants/StockVariants';
import PATHS from '../../../router/paths';

import cartIcon from "../../../icons/cart.svg"
import likeIcon from "../../../icons/like.svg"

import cl from './ProductItem.module.scss';


const ProductItem: FC<{ product: TProductFullData }> = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  
  const addToCart = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(addItemToCart({ ...product, count: 1}));
    enqueueSnackbar('Продукт було додано в кошик!', { variant: 'success' });
  };
  
  const handleNavigation = () => {
    navigate(`${PATHS.ITEM}?url=${product.url || ''}`);
  };

  return (
    <div className={cl['product-item']} onClick={handleNavigation}>
      <div className={cl['product-item__item']}>
        <div
          className={cl['product-item__img']}
          style={{ backgroundImage: `url(${product.img ? product?.img[0] : ""})` }}
        ></div>
        <div className={cl['product-item__heading']}>
          <p className={cl['product-item__title']}>{product.title}</p>
          <IconButton sx={{p: 0}}>
            <img
              src={ likeIcon }
            />
          </IconButton>
        </div>
      </div>
      <div className={cl['product-item__footer']}>
        <div className={cl['product-item__item_info']}>
          <p className={cl['product-item__item_price_text']}>{product.price} грн</p>
          <p className={cl['product-item__item_price_stock']}>
            {product.isInStock ? STOCK_VARIANT.EXISTS : STOCK_VARIANT.NOT_EXISTS}
          </p>
        </div>
        <IconButton onClick={addToCart} sx={{p: 0}}>
          <img 
            src={ cartIcon }
          />
        </IconButton>
      </div>
    </div>
  );
};

export default ProductItem;