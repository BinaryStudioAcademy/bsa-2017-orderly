const contextMenu = (state = { showMenu: false, name: "New Base", color: "#D0FF51", icon:"plus" }, action) => {
  switch (action.type) {
    case 'SHOW_CONTEXT_MENU':
      return Object.assign({}, state, {showMenu: !state.showMenu})
    case 'CHANGE_BASE_NAME':
      return Object.assign({}, state, {name: action.name});
    case 'CHANGE_BASE_COLOR':
      return Object.assign({}, state, {color: action.color});
    case 'CHANGE_BASE_ICON':
      return Object.assign({}, state, {icon: action.icon});

    default:
      return state
  }
};
export default contextMenu