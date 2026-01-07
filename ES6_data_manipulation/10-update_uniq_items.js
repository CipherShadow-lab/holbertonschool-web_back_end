export default function updateUniqueItems(groceries) {
    if (!(groceries instanceof Map)) {
        throw Error('Cannot process');
    }

    groceries.forEach((quantity, name) => {
        if (quantity === 1) {
            groceries.set(name, 100);
        }
    });
    
    return groceries;
}
