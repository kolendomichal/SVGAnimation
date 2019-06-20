export function deleteItemFromArray(array, itemId) {
    const itemsToDeleteFrom = array.forEach(item => {
        if (item.id !== itemId) {
            return item;
        }
        array.splice(item, 1);
    })
    return itemsToDeleteFrom;
}

export function compareItems(item, id) {
    return item !== null
        ? item.id === id
        : false;
}

export function findItemInArray(array, itemId) {
    return array.find(item => item.id === itemId)
}

export function updateObject(oldObject, newValues) {
    return Object.assign({}, oldObject, newValues)
}