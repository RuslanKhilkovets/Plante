import ProductAge from "../constants/productAge";
import { ProductWeight } from "../constants/productWeight";

export type TProductAge = ProductAge;

export default interface ICatalogFilters {
    selectedProductAgeType: ProductAge[];
    selectedProductWeightType: ProductWeight[]
    price: number[];
}