export const SELECTED_FIELD = 'SELECTED_FIELD';
export const ACTIVATE_FIELD = 'ACTIVATE_FIELD';
export const ACTIVATE_CLEAR_FIELD = 'ACTIVATE_CLEAR_FIELD';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const BLUR_FIELD = 'BLUR_FIELD';
export const BLUR_COMPONENT = 'BLUR_COMPONENT';

export function selectedField() {
    return {
        type: SELECTED_FIELD
    };
}

export function activateField() {
    return {
        type: ACTIVATE_FIELD
    };
}

export function activateClearField() {
    return {
        type: ACTIVATE_CLEAR_FIELD
    };
}

export function changeField(data) {
    return {
        type: CHANGE_FIELD,
        data: data
    };
}

export function blurField() {
    return {
        type: BLUR_FIELD
    };
}

export function blurComponent() {
    return {
        type: BLUR_COMPONENT
    };
}
