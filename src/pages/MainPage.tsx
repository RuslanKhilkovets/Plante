import About from '../components/About/About';
import ProductsMain from '../components/Products/ProductsMain/ProductsMain';
import SliderPreview from '../components/SliderPreview/SliderPreview';
import UpdatesForm from '../components/UpdatesForm/UpdatesForm';

const MainPage = () => {
    return (
        <>
            <SliderPreview />
            <ProductsMain />
            <About />
            <UpdatesForm />
        </>
    );
};

export default MainPage;