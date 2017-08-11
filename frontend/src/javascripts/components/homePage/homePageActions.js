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

export const showBaseCreationOptions = (id) => {
  return {
    type: 'SHOW_BASE_CREATION_OPTIONS',
    id
  };
}

export const showContextMenu = (id) => {
  return {
    type: 'SHOW_CONTEXT_MENU',
    id
  };
}

export const openSelectedBase = (data) => {
  return {
    type: 'OPEN_SELECTED_BASE',
    data
  };
}
