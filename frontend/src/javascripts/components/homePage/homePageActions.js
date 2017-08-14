let id = 1
const getBaseById = (_id, tableId) => {
    return {
        type: 'GET_BASE',
        _id: _id,
        tableId: tableId
    };
};

export const addNewBase = (name) => {
  return {
    type: 'ADD_NEW_BASE',
    id: ++id,
    name: name
  };
}

// export const getBases = () => {
//     return {
//         type: 'GET_BASES'
//     };
// };

export const addNewTeam = (id) => {
  return {
    type: 'ADD_NEW_TEAM',
    id
  };
}

export const showBaseCreationOptions = (id) => {
  return {
    type: 'SHOW_BASE_CREATION_OPTIONS',
    id
  };
}

export const showContextMenu = (data, type, id) => {
  if (type ==='show') {
    return {
      type: 'SHOW_CONTEXT_MENU',
      id
    }
  }
}

export const changeBaseName = (name, type, id) =>{
  if (type ==='name') {
    return {
      type: 'CHANGE_BASE_NAME',
      name,
      id
    }
  }
}

export const changeBaseColor = (color, type, id) =>{
  if (type ==='color') {
    return {
      type: 'CHANGE_BASE_COLOR',
      color,
      id
    };
  }
}

export const changeBaseIcon = (icon, type, id) =>{
  if (type ==='icon') {
    return {
      type: 'CHANGE_BASE_ICON',
      icon,
      id
    };
  }
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

export const openSelectedBase = (data) => {
  return {
    type: 'OPEN_SELECTED_BASE',
    data
  };
}
