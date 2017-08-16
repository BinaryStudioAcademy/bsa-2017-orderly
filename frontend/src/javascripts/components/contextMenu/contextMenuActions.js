export const showContextMenu = (data) => ({
    type: 'SHOW_CONTEXT_MENU',
    data
});
export const changeBaseTitle = (name) => ({
    type: 'CHANGE_BASE_NAME',
    name
});

export const changeBaseColor = (color) => ({
    type: 'CHANGE_BASE_COLOR',
    color
});

export const changeBaseIcon = (icon) => ({
    type: 'CHANGE_BASE_ICON',
    icon
});

export const deleteBase = (data) => ({
    type: 'DELETE_BASE',
    id
});

export function getBaseName(data) {
    return {
        type: 'GET_BASE_NAME_REQUESTED',
        baseId: data.baseId
    };
}