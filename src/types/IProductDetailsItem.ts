export default interface IProductDetailsItem {
    id: number;
    title: string;
    url: string;
    isInStock: boolean;
    code: number;
    producer: string;
    weightItems: number[];
    price: number;
    description: string;
    category: string;
    weight: number;
    count: number;
}