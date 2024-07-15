import ProductType from "../constants/productsTypes";

import { TProductItem } from "./IProductItem";

export default interface IProductsContainerProps {
    products: TProductItem[];
    title: string;
    subtitle?: string;
    type?: ProductType;
}