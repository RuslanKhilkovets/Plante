export default interface IProductCounterProps {
    setCount: (value: number | ((value: number) => number)) => void;
    count: number;
}