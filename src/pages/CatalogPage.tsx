import { Helmet } from 'react-helmet';

import { Typography } from '@mui/material';

import Catalog from '../components/Catalog/Catalog';
import ViewedItems from '../components/ViewedItems/ViewedItems';
import CustomBreadcrumps from '../components/StyledComponents/CustomBreadcrumps';
import UpdatesForm from '../components/UpdatesForm/UpdatesForm';

import useQuery from '../hooks/useQuery';
import catalogMenuItems from '../constants/catalogMenuItems';


const CatalogPage = () => {
    const query = useQuery();
    const currentCategory = query.get('category') || "";
    
    const getPageTitle = () => {
        return catalogMenuItems.find(item => item.to === currentCategory)?.title || "Каталог";
    }

    const pageTitle = getPageTitle();

    return (
        <div className='global-container'>
            <CustomBreadcrumps />

            <Typography variant='h4'>{pageTitle}</Typography>
            <Catalog 
                category={currentCategory}
            />
            <ViewedItems />

            <UpdatesForm />
            
            <Helmet>
                <title>
                    {pageTitle}
                </title> 
            </Helmet>
        </div>
    );
};

export default CatalogPage;