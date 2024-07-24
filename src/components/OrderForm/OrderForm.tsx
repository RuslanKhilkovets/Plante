import { FC } from 'react';

import IOrderForm from '../../types/IOrderForm';

import cl from "./OrderForm.module.scss";


const OrderForm: FC<IOrderForm> = ( { number, title, children } ) => {
    return (
        <div className={cl["order-form"]}>
            <div className={cl["order-form__heading"]}>
                <p className={cl["order-form__number"]}>
                    {number}
                </p>
                <p className={cl["order-form__title"]}>
                    {title}
                </p>
            </div>
            { children }
        </div>
    );
};

export default OrderForm;