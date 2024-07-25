import SortType from "../constants/sortType";
import { TProductFullData } from "../types/IProductItem";

export const sortItems = (sortType: SortType, itemsToSort: TProductFullData[]) => {
    const sortedItems = [...itemsToSort]; // Create a shallow copy to avoid mutating the original array

    switch (sortType) {
        case SortType.EXPENSIVE:
            return sortedItems.sort((a, b) => b.price - a.price);
        case SortType.CHEAP:
            return sortedItems.sort((a, b) => a.price - b.price);
        case SortType.POPULARITY:
            return sortedItems.sort((a, b) => b.popularity - a.popularity);
        default:
            return sortedItems;
    }
};

export default sortItems;
