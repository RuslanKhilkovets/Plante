import SortType from "../constants/sortType";
import { TProductItem } from "../types/IProductItem";

export const sortItems = ( sortType: SortType, itemsToSort: TProductItem[]) => {
    switch (sortType) {
        case SortType.CHEAP:
            return itemsToSort.sort((a, b) => b.price - a.price);
        case SortType.EXPENSIVE:
            return itemsToSort.sort((a, b) => a.price - b.price);
        case SortType.POPULARITY:
            return itemsToSort.sort((a, b) => b.popularity - a.popularity);
        default:
            return itemsToSort;
    }
};

export default sortItems;