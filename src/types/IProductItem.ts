export type TProductItem = {
    id: number;
    title: string;
    price: number;
    isInStock: boolean;
}

export default interface IProductItems {
    popular: TProductItem[];
    discounts: TProductItem[];
    news: TProductItem[];
}