export const addNewBase = (name) => {
  return {
    type: 'ADD_NEW_BASE',
    name
  };
}
export const getAllBases = () => {
  return {
    type: 'GET_BASES'  
  };
}

export const showBaseCreationOptions = (id) => {
  return {
    type: 'SHOW_BASE_CREATION_OPTIONS',
    id
  };
}

export const changeBaseParam = (value, typeAction, _id) =>{
    return {
      type: 'CHANGE_BASE_PARAM',
      typeAction,
      value,
      _id
    };
}
export const showContextMenu = (data, type, _id) => {
   if (type ==='show') {
       return {
         type: 'SHOW_CONTEXT_MENU',
         _id
       }
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
