import { Typography } from '@mui/material';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Catalog from '../components/Catalog/Catalog';
import ViewedItems from '../components/ViewedItems/ViewedItems';

const CatalogPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams)
    return (
        <div className='global-container'>
            <Typography variant='h4'>Лікарські рослини</Typography>
            <Catalog />
            <ViewedItems />
        </div>
    );
};

export default CatalogPage;