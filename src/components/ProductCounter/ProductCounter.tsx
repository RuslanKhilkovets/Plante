import { FC } from 'react';
import { Button } from '@mui/base';

import CustomInput from '../StyledComponents/CustomInput';

import IProductCounterProps from '../../types/IProductCounterProps';

import cl from "./ProductCounter.module.scss"
import clsx from 'clsx';


const ProductCounter: FC<IProductCounterProps> = ( { setCount, count, cartMode }) => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        if(isNaN(+value)){
            return;
        }

        setCount(+value)
    }

    const handleIncrement = () => {
        setCount((prev: number) => {
            return ++prev;
        })
    }
    
    const handleDecrement = () => {
        setCount((prev: number) => {
            if(prev <= 1){
                return prev;
            }
            return --prev;
        })
    }

    return (
        <div className={clsx(cl["product-counter"], {
            [cl["product-counter_cart"]]: cartMode
        })}>
            <Button 
                className={cl["product-counter__btn"]}
                disabled={count <= 1}
                onClick={handleDecrement}
            >
                -
            </Button>   
            <CustomInput
                className={cl["product-counter__input"]}
                value={count}
                onChange={handleInputChange}
            />
            <Button 
                className={cl["product-counter__btn"]}
                onClick={handleIncrement}
            >
                +
            </Button>   
        </div>
    );
};

export default ProductCounter;