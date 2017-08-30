export const INCLUDE_FIELD = 'INCLUDE_FIELD';
export const EXCLUDE_FIELD = 'EXCLUDE_FIELD';
export const INCLUDE_ALL = 'INCLUDE_ALL';
export const EXCLUDE_ALL = 'EXCLUDE_ALL';

export function includeField(fieldId) {
    return {
        type: INCLUDE_FIELD,
        fieldId: fieldId
    };
}

export function excludeField(fieldId) {
    return {
        type: EXCLUDE_FIELD,
        fieldId: fieldId
    };
}

export function includeAll(fieldIds) {
    return {
        type: INCLUDE_ALL,
        fieldIds: fieldIds
    };
}

export function excludeAll() {
    return {
        type: EXCLUDE_ALL,
    };
}
