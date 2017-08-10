// export const SHOW_CONTEXT_MENU = 'SHOW_CONTEXT_MENU';
// export const CHANGE_BASE_NAME = 'CHANGE_BASE_NAME';
// export const CHANGE_BASE_COLOR = 'CHANGE_BASE_COLOR';
// export const SHARE_BASE = 'SHARE_BASE';
// export const DUPLICATE_BASE = 'DUPLICATE_BASE';
// export const MOVE_BASE = 'MOVE_BASE';
// export const SLACK_NOTIFICATION = 'SLACK_NOTIFICATION';
// export const DELETE_BASE = 'DELETE_BASE';

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