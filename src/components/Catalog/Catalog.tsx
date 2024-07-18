import { FC, useEffect, useState } from 'react';
import axios from 'axios';

import CatalogFilter from '../CatalogFilter/CatalogFilter';
import FilteredItems from '../FilteredItems/FilteredItems';
import Sortings from '../Sortings/Sortings';

import { TProductItem } from '../../types/IProductItem';
import ICatalogFilters from '../../types/ICatalogFilters';

import cl from "./Catalog.module.scss";
import SortType from '../../constants/sortType';

const initialFilters = {
    price: [0, 20],
    selectedProductWeightType: [],
    selectedProductAgeType: [] 
};

const Catalog: FC = ( { category } ) => {
    const [filters, setFilters] = useState<ICatalogFilters>({
       ...initialFilters
    });

    const [sort, setSort] = useState(1);
    const [sortedItems, setSortedItems] = useState<TProductItem[]>([]);
    const [filterMenuOpen, setFiltersMenuOpen] = useState<boolean>(false);

    const onFiltersClear = () => {
        setFilters(initialFilters);
    };

    useEffect(() => {
        const getItems = async () => {
            const { price, selectedProductAgeType, selectedProductWeightType } = filters;

            let requestUrl = `http://localhost:5000/${category}?`;

            if (price.length === 2) {
                requestUrl += `price_gte=${price[0]}&price_lte=${price[1]}&`;
            }
            if (selectedProductAgeType.length > 0) {
                requestUrl += selectedProductAgeType.map(type => `type=${type}`).join('&') + '&';
            }
            if (selectedProductWeightType.length > 0) {
                requestUrl += selectedProductWeightType.map(type => `type=${type}`).join('&') + '&';
            }

            try {
                const response = await axios.get(requestUrl);
                console.log(response.data);
                
                setSortedItems(response.data);
            } catch (error) {
                console.error("Error fetching menu items:", error);
            }
        };

        getItems();
    }, [category, filters]);

    useEffect(() => {
        const sortItems = () => {
            const sorted = [...sortedItems]; 

            switch (sort) {
                case SortType.CHEAP:
                    sorted.sort((a, b) => a.price - b.price);
                    break;
                case SortType.EXPENSIVE:
                    sorted.sort((a, b) => b.price - a.price);
                    break;
                case SortType.POPULARITY:
                    sorted.sort((a, b) => b.popularity - a.popularity);
                    break;
                default:
                    break;
            }

            setSortedItems(sorted);
        };

        sortItems();
    }, [sort]);

    return (
        <div className={cl["catalog"]}>
            <CatalogFilter 
                open={filterMenuOpen}
                setOpen={setFiltersMenuOpen}
                setFilters={setFilters}
                filters={filters}
                clearFilters={onFiltersClear}
            />
            <div className="">
                <Sortings
                    setSort={setSort}
                    sort={sort}
                    setFiltersMenuOpen={setFiltersMenuOpen}
                />
                <FilteredItems 
                    items={sortedItems}
                />
            </div>
        </div>
    );
};  

export default Catalog;
