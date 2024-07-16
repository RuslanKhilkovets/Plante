import React, { FC } from 'react';
import cl from "./Sortings.module.scss"
import CustomButton from '../StyledComponents/CustomButton';

const Sortings: FC = ( {} ) => {
    return (
        <div className={cl["sortings"]}>
            <CustomButton onClick={() => {}}>
                Фільтр
            </CustomButton>
        </div>
    );
};

export default Sortings;