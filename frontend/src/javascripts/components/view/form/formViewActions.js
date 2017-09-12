export const INCLUDE_FIELD = 'INCLUDE_FIELD';
export const EXCLUDE_FIELD = 'EXCLUDE_FIELD';
export const INCLUDE_ALL = 'INCLUDE_ALL';
export const EXCLUDE_ALL = 'EXCLUDE_ALL';

export function includeField(fieldId, tableId, viewId) {
    return {
        type: INCLUDE_FIELD,
        fieldId: fieldId,
        tableId: tableId,
        viewId: viewId
    };
}

export function excludeField(fieldId, tableId, viewId) {
    return {
        type: EXCLUDE_FIELD,
        fieldId: fieldId,
        tableId: tableId,
        viewId: viewId
    };
}

export function includeAll(fieldIds, tableId, viewId) {
    return {
        type: INCLUDE_ALL,
        fieldIds: fieldIds,
        tableId: tableId,
        viewId: viewId
    };
}

export function excludeAll(fieldIds, tableId, viewId) {
    return {
        type: EXCLUDE_ALL,
        fieldIds: fieldIds,
        tableId: tableId,
        viewId: viewId
    };
}
