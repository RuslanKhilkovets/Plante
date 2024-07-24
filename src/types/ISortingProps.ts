import SortType from "../constants/sortType";

export default interface ISortingProps {
    sort: SortType;
    setSort: (sortType: SortType) => void;
    setFiltersMenuOpen: (open: boolean) => void;
};