export default interface ICustomSliderProps{
    visible?: boolean;
    active: boolean;
    isHeaderMenu?: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}