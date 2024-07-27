import { Helmet } from 'react-helmet';
import About from '../components/About/About';
import ProductsMain from '../components/Products/ProductsMain/ProductsMain';
import SliderPreview from '../components/SliderPreview/SliderPreview';
import UpdatesForm from '../components/UpdatesForm/UpdatesForm';

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