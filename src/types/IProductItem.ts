export type TProductItem = {
    id: number;
    title: string;
    price: number;
    img: string;
    isInStock: boolean;
    popularity: number;
    url?: string;
}

export default interface IProductItems {
    popular: TProductItem[];
    discounts: TProductItem[];
    news: TProductItem[];
}