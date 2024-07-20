export default interface ICatalogMenuProps{
    visible?: boolean;
    active: boolean;
    isHeaderMenu?: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}