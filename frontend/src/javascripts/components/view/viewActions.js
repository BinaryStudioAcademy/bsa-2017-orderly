export const CHANGE_VIEW = 'CHANGE_VIEW';
export const TOGGLE_SELECTOR = 'TOGGLE_SELECTOR';

export function toggleSelector() {
    return {
        type: TOGGLE_SELECTOR
    };
}

export function changeView(viewId) {
    return {
        type: CHANGE_VIEW,
        viewId
    };
}