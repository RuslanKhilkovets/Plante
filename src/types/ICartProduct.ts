import { TProductFullData } from "./IProductItem";

export default interface ICartProduct extends TProductFullData {
    count: number;
}
  