import { FC, useEffect, useState } from 'react';

import CatalogFilter from '../CatalogFilter/CatalogFilter';
import FilteredItems from '../FilteredItems/FilteredItems';
import Sortings from '../Sortings/Sortings';

import { TProductItem } from '../../types/IProductItem';
import ICatalogFilters from '../../types/ICatalogFilters';
import ICatalogProps from '../../types/ICatalogProps';
import SortType from '../../constants/sortType';

import sortItems from '../../helpers/sortCatalogItems';
import getFilteredItems from '../../helpers/filterCatalogItems';

import cl from "./Catalog.module.scss";


const initialFilters = {
    price: [0, 20],
    productWeightTypes: [],
    productAgeTypes: [] 
};

const Catalog: FC<ICatalogProps> = ( { category } ) => {
    const [filters, setFilters] = useState<ICatalogFilters>({
       ...initialFilters
    });
    const [sort, setSort] = useState(SortType.CHEAP);
    const [catalogItems, setCatalogItems] = useState<TProductItem[]>([]);
    const [filterMenuOpen, setFiltersMenuOpen] = useState<boolean>(false);

    const onFiltersClear = () => {
        setFilters(initialFilters);
    };

    useEffect(() => {
        const fetchItems = async () => {
            const items = await getFilteredItems(category, filters);
            setCatalogItems(items);
        };
        
        fetchItems();
    }, [filters.productAgeTypes, filters.productWeightTypes]);

    useEffect(() => {
        const sortedItems = sortItems(sort, catalogItems);

        setCatalogItems(sortedItems);
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
                    items={catalogItems}
                />
            </div>
        </div>
    );
};  

export default Catalog;
