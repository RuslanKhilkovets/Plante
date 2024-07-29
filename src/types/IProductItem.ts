export type TProductItem = {
    id: number;
    title: string;
    price: number;
    img: string[];
    isInStock: boolean;
    popularity: number;
    url?: string;
}

export type TProductFullData = TProductItem & {
    url: string;
    catalog: string;
    code: number;
    producer: string;
    weightItems: number[];
    description: string;
    category: string;
    weight: number;
    count: number;
    img: string[];
    type: number;
    itemCount?: number;
}

export default interface IProductItems {
    popular: TProductFullData[];
    discounts: TProductFullData[];
    news: TProductFullData[];
}