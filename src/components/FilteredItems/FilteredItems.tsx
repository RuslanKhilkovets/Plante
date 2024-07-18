import { FC } from 'react';

import { TProductItem } from '../../types/IProductItem';

import cl from "./FilteredItems.module.scss";
import ProductItem from '../Products/ProductItem/ProductItem';

const FilteredItems: FC<{ items: TProductItem[] }> = ({ items }) => {
    console.log(items);
    
    return (
        <div className={cl["filtered-items"]}>
            {
                items.length !== 0 && items?.map(item => {
                    return (
                        <ProductItem product={item} key={item.id + item.title}/>
                    )
                })
            }
        </div>
    );
};

export default FilteredItems;