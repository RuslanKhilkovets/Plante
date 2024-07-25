import { FC } from 'react';

import { TProductFullData } from '../../types/IProductItem';

import cl from "./FilteredItems.module.scss";
import ProductItem from '../Products/ProductItem/ProductItem';


const FilteredItems: FC<{ items: TProductFullData[] }> = ({ items = [] }) => {

    return (
        <div className={cl["filtered-items"]}>
            {
                items.length !== 0 ? items?.map(item => {
                    return (
                        <ProductItem product={item} key={item.id + item.title}/>
                    )
                }) : <>Немає даних</>

            }
        </div>
    );
};

export default FilteredItems;