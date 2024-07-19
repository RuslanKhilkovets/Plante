import ICatalogFilters from "./ICatalogFilters";

export default interface ICatalogFilterProps {
    filters: ICatalogFilters;
    setFilters: (filters: ICatalogFilters) => void;
    clearFilters: () => void;
    open: boolean;
    setOpen: (open: boolean) => void;
}