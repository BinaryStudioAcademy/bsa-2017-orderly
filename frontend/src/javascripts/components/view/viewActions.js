export const TOGGLE_SELECTOR = 'TOGGLE_SELECTOR';
export const GET_FIELDS = 'GET_FIELDS';
export const ADD_FIELD = 'ADD_FIELD';
export const ADD_FIELD_SUCCEED = 'ADD_FIELD_SUCCEED';
export const ADD_RECORD = 'ADD_RECORD';
export const TOGGLE_FIELD_MENU = 'TOGGLE_FIELD_MENU';

export function toggleSelector() {
    return {
        type: TOGGLE_SELECTOR
    };
}

export function addField(tableId) {
    return {
        type: ADD_FIELD,
        tableId: tableId
    };
}

export function addRecord(tableId) {
    return {
        type: ADD_RECORD,
        tableId: tableId
    };
}

export function toggleFieldMenu(fieldId) {
    return {
        type: TOGGLE_FIELD_MENU,
        fieldId: fieldId
    };
}