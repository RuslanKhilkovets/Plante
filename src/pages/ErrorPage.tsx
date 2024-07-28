import { Helmet } from "react-helmet";
import ErrorPageContent from "../components/ErrorComponents/ErrorPageContent/ErrorPageContent";

const ErrorPage = () => {
    return (
        <>
                <ErrorPageContent />

            <Helmet>
                <title>
                    Plante
                </title> 
            </Helmet>
        </>


    );
};

export default ErrorPage;