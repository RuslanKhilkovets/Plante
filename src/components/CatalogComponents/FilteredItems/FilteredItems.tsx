import { FC, useEffect, useState } from 'react';
import clsx from 'clsx';

import { TProductFullData } from '../../../types/IProductItem';

import cl from "./FilteredItems.module.scss";
import ProductItem from '../../ProductComponents/ProductItem/ProductItem';


const FilteredItems: FC<{ items: TProductFullData[] }> = ({ items = [] }) => {
    const [content, setContent] = useState<any>();

    const renderMainContent = () => {
        return (
            <div className={clsx(cl["filtered-items"] , {
                [cl["empty"]]: items.length === 0
            })}>
                {
                    items.length !== 0 ? items?.map(item => {
                        return (
                            <ProductItem product={item} key={item.id + item.title}/>
                        )
                    }) : <p className={cl["empty__text"]}>Немає даних</p>
    
                }
            </div>
        )
    }
    useEffect(() => {
        setContent(renderMainContent());
    }, [items])

    return content;
};

export default FilteredItems;