export const TOGGLE_FIELD_MENU = 'TOGGLE_FIELD_MENU';
export const CHANGE_FIELD_TYPE = 'CHANGE_FIELD_TYPE';
export const CHANGE_FIELD_NAME = 'CHANGE_FIELD_NAME';
export const DELETE_FIELD = 'DELETE_FIELD';
export const DELETE_RECORD = 'DELETE_RECORD';
export const CHANGE_FIELD_OPTIONS = 'CHANGE_FIELD_OPTIONS';

export function toggleFieldMenu() {
    return {
        type: TOGGLE_FIELD_MENU
    };
}

export function changeFieldType(tableId, fieldType, fieldId) {
    return {
        type: CHANGE_FIELD_TYPE,
        tableId: tableId,
        fieldType: fieldType,
        fieldId: fieldId
    };
}
export function changeFieldOptions(tableId, fieldOptions, fieldId) {
    return {
        type: CHANGE_FIELD_OPTIONS,
        tableId: tableId,
        fieldOptions: fieldOptions,
        fieldId: fieldId
    };
}

export function changeFieldName(tableId, fieldId, fieldName) {
    return {
        type: CHANGE_FIELD_NAME,
        tableId: tableId,
        fieldId: fieldId,
        fieldName: fieldName,
    };
}

export function deleteField(tableId, fieldId) {
    return {
        type: DELETE_FIELD,
        tableId: tableId,
        fieldId: fieldId,
    };
}

export function deleteRecord(tableId, recordId) {
    return {
        type: DELETE_RECORD,
        tableId: tableId,
        recordId: recordId
    };
}