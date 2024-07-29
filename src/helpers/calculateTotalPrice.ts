import { TProductFullData } from "../types/IProductItem";

const calculateTotalPrice = (cart: TProductFullData[]) => {
    return cart
        .reduce((previousValue: number, currentValue: TProductFullData) => {
            return previousValue + (currentValue.price * (currentValue.itemCount || 1));
        }, 0)
        .toFixed(2)
}

export default calculateTotalPrice;