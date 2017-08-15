export const CHANGE_VIEW = 'CHANGE_VIEW';

export function changeView(viewId) {
    return {
        type: CHANGE_VIEW,
        viewId
    };
}