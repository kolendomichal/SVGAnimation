import { cloneDeep } from 'lodash';

export function deleteItemFromArray(array, itemId) {
    return array.filter((item, index) => {
        if (item.id === itemId) {
            return false;
        }
        return true;
    })
}

export function compareItems(item, id) {
    return item !== null
        ? item.id === id
        : false;
}

export function findItemInArray(array, property, propertyValue) {
    return array.find(item => item[property] === propertyValue);
}

export function updateObject(oldObject, newValues) {
    return Object.assign({}, oldObject, newValues);
}

export function deepCloneObject(objectToCopy) {
    return cloneDeep(objectToCopy);
}