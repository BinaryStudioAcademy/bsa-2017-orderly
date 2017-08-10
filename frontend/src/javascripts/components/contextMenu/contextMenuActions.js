export const showContextMenu = (data) => {
  return {
    type: 'SHOW_CONTEXT_MENU',
    data
  };
}
export const changeBaseTitle = (name) =>{
  return {
    type: 'CHANGE_BASE_NAME',
    name
  }
}

export const changeBaseColor = (color) =>{
  return {
    type: 'CHANGE_BASE_COLOR',
    color
  };
}

export const changeBaseIcon = (icon) =>{
  return {
    type: 'CHANGE_BASE_ICON',
    icon
  };
}

export const deleteBase = (data) =>{
  return {
    type: 'DELETE_BASE',
    id
  };
}

export function getBaseName(data) {
    return {
        type: 'GET_BASE_NAME_REQUESTED',
        baseId: data.baseId
    };
}