import { Helmet } from 'react-helmet';

import OrderDialog from '../components/OrderComponent/OrderDialog/OrderDialog';
import UpdatesForm from '../components/globals/UpdatesForm/UpdatesForm';

const CheckoutPage = () => {
    return (
        <>
        
            <OrderDialog
                open
                onClose={() => {}}
            />

            <UpdatesForm />

            <Helmet>
                <title>
                    Оформлення замовлення
                </title> 
            </Helmet>

        </>
    );
};

export default CheckoutPage;