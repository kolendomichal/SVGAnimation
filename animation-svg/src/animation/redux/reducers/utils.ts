import { cloneDeep } from 'lodash';
import { Action } from 'redux';

interface Item {
    id: number
    [key: string]: any
}

export interface MetadataObj {
    [key: string]: any
}


export function deleteItemFromArray<T extends MetadataObj>(array: T[], itemId: number | string) {
    return array.filter((item, index) => {
        if (item.id === itemId) {
            return false;
        }
        return true;
    })
}

export function compareItems<T extends MetadataObj>(item: T, id: number | string) {
    return item !== null
        ? item.id === id
        : false;
}



export function findItemInArray<T extends MetadataObj>(array: T[],  propertyType: keyof T , propertyValue: string | number) : T | undefined  {
    return array.find(item => item[propertyType] === propertyValue);
}

export function updateObject<T>(oldObject: T, newValues: any): T {
    return Object.assign({}, oldObject, newValues);
}

export function deepCloneObject<T>(objectToCopy: T) {
    return cloneDeep(objectToCopy);
}

export function isAction<T extends Action>(action: T, type: string) : action is T {
    return action.type === type;
}