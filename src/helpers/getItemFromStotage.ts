export const getItemFromStorage = (name: string) => {
    const itemsFromStorage = localStorage.getItem(name);
    const parsedItems = itemsFromStorage ? JSON.parse(itemsFromStorage) : null;
    
    return parsedItems;
}

export default getItemFromStorage;