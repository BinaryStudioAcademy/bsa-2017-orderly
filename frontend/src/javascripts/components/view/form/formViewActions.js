export const INCLUDE_FIELD = 'INCLUDE_FIELD';
export const EXCLUDE_FIELD = 'EXCLUDE_FIELD';

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
