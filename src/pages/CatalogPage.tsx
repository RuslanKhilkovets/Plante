import { Typography } from '@mui/material';
import Catalog from '../components/Catalog/Catalog';
import ViewedItems from '../components/ViewedItems/ViewedItems';
import useQuery from '../hooks/useQuery';
import { Helmet } from 'react-helmet';


const CatalogPage = () => {
    const query = useQuery();
    const currentCategory = query.get('category') || "";
    
    return (
        <div className='global-container'>
            <Helmet>
                <title>
                    Каталог - Лікарські рослини
                </title>
            </Helmet>
            <Typography variant='h4'>Лікарські рослини</Typography>
            <Catalog category={currentCategory}/>
            <ViewedItems />
        </div>
    );
};

export default CatalogPage;