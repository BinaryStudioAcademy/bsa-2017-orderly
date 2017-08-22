export const TOGGLE_FIELD_MENU = 'TOGGLE_FIELD_MENU';
export const CHANGE_FIELD_TYPE = 'CHANGE_FIELD_TYPE';
export const CHANGE_FIELD_NAME = 'CHANGE_FIELD_NAME';

export function toggleFieldMenu() {
    return {
        type: TOGGLE_FIELD_MENU
    };
}

export function changeFieldType(tableId, fieldType, fieldId, records) {
    return {
        type: CHANGE_FIELD_TYPE,
        tableId: tableId,
        fieldType: fieldType,
        fieldId: fieldId,
        records: records,
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
