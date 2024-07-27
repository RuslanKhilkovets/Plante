export default interface ICustomLinkProps {
    to: string | object;
    className?: string;
    children?: React.ReactNode;
    [key: string]: any; 
}