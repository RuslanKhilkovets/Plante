type TItem = {
    text: string,
    to: string,
}

export default interface IMenuItem {
    id: number;
    title: string;
    iconName: string;
    items: TItem[];
}