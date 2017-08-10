const contextMenu = (state = { showMenu: false, baseTitle: "New Base", color: "#E1E1E1" }, action) => {
  switch (action.type) {
    case 'SHOW_CONTEXT_MENU':
      return Object.assign({}, state, {showMenu: !state.showMenu})
    case 'CHANGE_BASE_NAME':
      return Object.assign({}, state, {baseTitle: action.title});
    case 'CHANGE_BASE_COLOR':
      return Object.assign({}, state, {color: action.color});
    
    default:
      return state
  }
};
export default contextMenu