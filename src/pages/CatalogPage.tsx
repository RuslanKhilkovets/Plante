import { Helmet } from 'react-helmet';

import { Typography } from '@mui/material';

import Catalog from '../components/CatalogComponents/Catalog/Catalog';
import ViewedItems from '../components/globals/ViewedItems/ViewedItems';
import CustomBreadcrumps from '../components/UI/BreadCrumps/CustomBreadcrumps';
import UpdatesForm from '../components/globals/UpdatesForm/UpdatesForm';

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