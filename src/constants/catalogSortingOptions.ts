import SortType from "./sortType";

export const catalogSortingOptions = [
    { id: 1, label: "За популярністю", value: SortType.POPULARITY },
    { id: 2, label: "Дешевші", value: SortType.CHEAP },
    { id: 3, label: "Дорожчі", value: SortType.EXPENSIVE },
];

export default catalogSortingOptions;