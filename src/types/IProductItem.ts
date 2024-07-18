export type TProductItem = {
    id: number;
    title: string;
    price: number;
    img: string;
    isInStock: boolean;
    popularity: number;
}

export default interface IProductItems {
    popular: TProductItem[];
    discounts: TProductItem[];
    news: TProductItem[];
}