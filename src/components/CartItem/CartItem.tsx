import { FC, useState } from 'react';

import { IconButton } from '@mui/material';

import ProductCounter from '../ProductCounter/ProductCounter';

import crossIcon from "../../icons/close.svg";

import cl from "./CartItem.module.scss"


const CartItem: FC = ( { item } : any ) => {
    const [count, setCount] = useState<number>(0);

    return (
        <div className={cl["cart-item"]}>
            <div className={cl["cart-item__info"]}>
                <img
                    src={item?.img}
                    className={cl["cart-item__img"]}
                />
                <div className={cl["cart-item__content"]}>
                    <p className={cl["cart-item__title"]}>{item?.title}</p>
                    <div className={cl["cart-item__actions"]}>
                        <ProductCounter
                            cartMode
                            count={count}
                            setCount={setCount}
                        />
                        <p className={cl["cart-item__price"]}>
                            {item?.price} грн
                        </p>
                    </div>
                </div>
            </div>
            <IconButton>
                <img
                    src={ crossIcon }
                />
            </IconButton>
        </div>
    );
};

export default CartItem;