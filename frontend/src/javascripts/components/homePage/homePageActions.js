let id = 0
export const addNewBase = (name) => {
  return {
    type: 'ADD_NEW_BASE',
    id: ++id,
    name
  };
}

export const addNewTeam = (id) => {
  return {
    type: 'ADD_NEW_TEAM',
    id
  };
}

export const showBaseCreationOptions = (data) => {
  return {
    type: 'SHOW_BASE_CREATION_OPTIONS',
    data
  };
}

export const showContextMenu = (data) => {
  return {
    type: 'SHOW_CONTEXT_MENU',
    data
  };
}

export const openSelectedBase = (data) => {
  return {
    type: 'OPEN_SELECTED_BASE',
    data
  };
}
