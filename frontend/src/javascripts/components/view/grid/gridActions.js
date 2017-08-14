export const ADD_COLUMN = 'ADD_COLUMN';

export function addColumn(viewId) {
    return {
        type: ADD_COLUMN,
        viewId
    };
}