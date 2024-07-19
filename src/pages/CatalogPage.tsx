import { Typography } from '@mui/material';
import Catalog from '../components/Catalog/Catalog';
import ViewedItems from '../components/ViewedItems/ViewedItems';
import useQuery from '../hooks/useQuery';

const CatalogPage = () => {
    const query = useQuery();
    const currentCategory = query.get('category') || "";
    
    return (
        <div className='global-container'>
            <Typography variant='h4'>Лікарські рослини</Typography>
            <Catalog category={currentCategory}/>
            <ViewedItems />
        </div>
    );
};

export default CatalogPage;