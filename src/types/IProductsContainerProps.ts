import ProductType from "../constants/productsTypes";

import { TProductFullData } from "./IProductItem";

export default interface IProductsContainerProps {
    products: TProductFullData[];
    title: string;
    subtitle?: string;
    type?: ProductType;
}