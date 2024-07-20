import { FC, useEffect, useState } from 'react';

import CatalogFilter from '../CatalogFilter/CatalogFilter';
import FilteredItems from '../FilteredItems/FilteredItems';
import Sortings from '../Sortings/Sortings';

import { TProductItem } from '../../types/IProductItem';
import ICatalogFilters from '../../types/ICatalogFilters';
import ICatalogProps from '../../types/ICatalogProps';
import SortType from '../../constants/sortType';

import sortItems from '../../helpers/sortCatalogItems';

import cl from "./Catalog.module.scss";
import ApiClient from '../../api/ApiClient';


const initialFilters = {
    price: [0, 10],
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

    const filterItems = async () => {
        const items = await ApiClient.GetFilteredItems(category, filters);
        
        setCatalogItems(items as TProductItem[]);
    };

    useEffect(() => {
        filterItems();
    }, [filters.productAgeTypes, filters.productWeightTypes]);

    useEffect(() => {
        const sortedItems = sortItems(sort, catalogItems);

        setCatalogItems(sortedItems);
    }, [sort]);

    return (
        <div className={cl["catalog"]}>
            <CatalogFilter 
                onFilter={filterItems}
                open={filterMenuOpen}
                setOpen={setFiltersMenuOpen}
                setFilters={setFilters}
                filters={filters}
                clearFilters={onFiltersClear}
            />
            <div style={{ width: "100%" }}>
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