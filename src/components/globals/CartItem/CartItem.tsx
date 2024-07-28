import { FC, useState, useEffect } from 'react';

import { IconButton } from '@mui/material';

import ProductCounter from '../../ProductComponents/ProductCounter/ProductCounter';

import { useAppDispatch } from '../../../hooks/redux';
import { removeItemFromCart, updateItemCount } from '../../../redux/slices/CartSlice';

import { TProductFullData } from '../../../types/IProductItem';

import crossIcon from "../../../icons/close.svg";

import cl from "./CartItem.module.scss";

 
const CartItem: FC<{item: TProductFullData}> = ({ item }) => {
    const dispatch = useAppDispatch();
    const [count, setCount] = useState(item.itemCount);

    useEffect(() => {
        dispatch(updateItemCount({ id: item.id, count }));
    }, [count, item.id]);

    const deleteItemFromCart = () => {
        dispatch(removeItemFromCart(item.id));
    }

    return (
        <div className={cl["cart-item"]}>
            <div className={cl["cart-item__info"]}>
                <img
                    src={item?.img[0]}
                    className={cl["cart-item__img"]}
                    alt={item?.title}
                />
                <div className={cl["cart-item__content"]}>
                    <p className={cl["cart-item__title"]}>{item?.title}</p>
                    <div className={cl["cart-item__actions"]}>
                        <ProductCounter
                            count={count}
                            setCount={setCount}
                            cartMode
                        />
                        <p className={cl["cart-item__price"]}>
                            {item?.price} грн
                        </p>
                    </div>
                </div>
            </div>
            <IconButton
                onClick={deleteItemFromCart}
                aria-label="Remove item"
            >
                <img
                    src={crossIcon}
                    alt="Close"
                />
            </IconButton>
        </div>
    );
};

export default CartItem;
