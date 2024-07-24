import { Helmet } from 'react-helmet';
import OrderDialog from '../components/OrderDialog/OrderDialog';

const CheckoutPage = () => {
    return (
        <>
        
            <OrderDialog
                open
                onClose={() => {}}
            />

            <Helmet>
                <title>
                    Оформлення замовлення
                </title> 
            </Helmet>

        </>
    );
};

export default CheckoutPage;