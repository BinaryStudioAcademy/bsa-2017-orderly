export const TOGGLE_SELECTOR = 'TOGGLE_SELECTOR';
export const TOGGLE_FIELD_MENU = 'TOGGLE_FIELD_MENU';

export function toggleSelector() {
    return {
        type: TOGGLE_SELECTOR
    };
}

export function toggleFieldMenu(fieldId) {
    return {
        type: TOGGLE_FIELD_MENU,
        fieldId: fieldId
    };
}