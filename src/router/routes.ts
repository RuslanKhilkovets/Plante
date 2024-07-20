import CatalogPage from "../pages/CatalogPage";
import CheckoutPage from "../pages/CheckoutPage";
import ErrorPage from "../pages/ErrorPage";
import ItemPage from "../pages/ItemPage";
import MainPage from "../pages/MainPage";
import PATHS from "./paths";

export const routes = [
    { path: PATHS.CATALOG, component: CatalogPage},
    { path: PATHS.MAIN_PAGE, component: MainPage },
    { path: PATHS.CHECKOUT, component: CheckoutPage },
    { path: PATHS.ITEM, component: ItemPage },
    { path: PATHS.ERROR, component: ErrorPage },
];

export default routes;