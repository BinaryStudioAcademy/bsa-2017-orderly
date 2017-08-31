export const CHANGE_FIELD_TYPE = 'CHANGE_FIELD_TYPE';
export const CHANGE_FIELD_NAME = 'CHANGE_FIELD_NAME';
export const DELETE_FIELD = 'DELETE_FIELD';
export const DELETE_RECORD = 'DELETE_RECORD';
export const SORT_RECORDS = 'SORT_RECORDS';
export const FILTER_RECORDS = 'FILTER_RECORDS';
export const REMOVE_FILTER = 'REMOVE_FILTER';

export function changeFieldType(tableId, fieldType, fieldId) {
    return {
        type: CHANGE_FIELD_TYPE,
        tableId: tableId,
        fieldType: fieldType,
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

// export function sortRecords(table, fieldId, sortOption) {
//     return {
//         type: SORT_RECORDS,
//         table: table,
//         fieldId: fieldId,
//         sortOption: sortOption
//     };
// }
//
// export function filterRecords(table, fieldId, condition, filterQuery) {
//     return {
//         type: FILTER_RECORDS,
//         table: table,
//         fieldId: fieldId,
//         condition: condition,
//         filterQuery: filterQuery,
//     };
// }
//
// export function removeFilter() {
//     return {
//         type: REMOVE_FILTER
//     };
// }
