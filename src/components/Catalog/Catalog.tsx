import { useState } from 'react';
import CatalogFilter from '../CatalogFilter/CatalogFilter';
import FilteredItems from '../FilteredItems/FilteredItems';
import { TProductItem } from '../../types/IProductItem';

const Catalog = () => {
    const [filters, setFilters] = useState<TProductItem[]>();

    return (
        <>
            <CatalogFilter />
            <FilteredItems items={[]}/>
        </>
    );
};  

export default Catalog;