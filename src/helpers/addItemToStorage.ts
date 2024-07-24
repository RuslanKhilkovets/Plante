import { MAX_VIEWED_ITEMS_ARRAY_SIZE } from "../constants/globals";

const addItemToStorage = (key: string, item: any) => {
    const storedItems = localStorage.getItem(key);
    let items = storedItems ? JSON.parse(storedItems) : [];
    items = items.filter((existingItem: any) => existingItem.id !== item.id);

    if (items.length >= MAX_VIEWED_ITEMS_ARRAY_SIZE) {
        items.pop();
    }
    items.push(item);

    localStorage.setItem(key, JSON.stringify(items));
}

export default addItemToStorage;