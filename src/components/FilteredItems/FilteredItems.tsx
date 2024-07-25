import { FC } from 'react';

import { TProductFullData } from '../../types/IProductItem';

import cl from "./FilteredItems.module.scss";
import ProductItem from '../Products/ProductItem/ProductItem';
import clsx from 'clsx';


const FilteredItems: FC<{ items: TProductFullData[] }> = ({ items = [] }) => {

    return (
        <div className={clsx(["filtered-items"] , {
            [cl["empty"]]: items.length === 0
        })}>
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