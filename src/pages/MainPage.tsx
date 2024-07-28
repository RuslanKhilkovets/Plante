import { Helmet } from 'react-helmet';
import About from '../components/globals/About/About';
import ProductsMain from '../components/ProductComponents/ProductsMain/ProductsMain';
import SliderPreview from '../components/CatalogComponents/SliderPreview/SliderPreview';
import UpdatesForm from '../components/globals/UpdatesForm/UpdatesForm';

const MainPage = () => {
    return (
        <>
            <Helmet>
                <title>
                    Головна
                </title>
            </Helmet>
            <SliderPreview />
            <ProductsMain />
            <About />
            <UpdatesForm />
        </>
    );
};

export default MainPage;