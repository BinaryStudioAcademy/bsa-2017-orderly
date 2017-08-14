export const addNewBase = (name) => {
  return {
    type: 'ADD_NEW_BASE_SUCCESS',
    name: name
  };
}

export const addNewTeam = (name) => {
  return {
    type: 'ADD_NEW_TEAM',
    name
  };
}

export const showBaseCreationOptions = (id) => {
  return {
    type: 'SHOW_BASE_CREATION_OPTIONS',
    id
  };
}

export const changeBaseParam = (value, typeAction, id) =>{
    return {
      type: 'CHANGE_BASE_PARAM',
      typeAction,
      value,
      id
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

export const openSelectedBase = (data) => {
  return {
    type: 'OPEN_SELECTED_BASE',
    data
  };
}
