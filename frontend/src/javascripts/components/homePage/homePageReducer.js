const baseStore = (state = { bases: [{ id: 0, name: "New Base", color: "#C3C8B7", icon:"code", showMenu: false }]}, action) => {
  switch (action.type) {
    case 'ADD_NEW_BASE':
      return Object.assign(
        {}, 
        state, 
        {bases: [...state.bases, { id: action.id, name: action.name, color: "#C3C8B7", icon:"code", showMenu: false }]}
        );
        case 'ADD_BASE_ERROR': {
          return {...state, errors: action.errors, success: false, message: action.message};
          }
      case 'SHOW_CONTEXT_MENU':
        return Object.assign(
          {}, 
          state, 
          {bases: state.bases.map(base =>
            (base.id === action.id) 
              ? { id: base.id, name: base.name, color: base.color, icon:base.icon, showMenu: !base.showMenu}
              : base
          )}
        )
        case 'CHANGE_BASE_COLOR':
        return Object.assign(
          {}, 
          state, 
          {bases: state.bases.map(base =>
            (base.id === action.id) 
              ? { id: base.id, name: base.name, color: action.color, icon:base.icon, showMenu: base.showMenu}
              : base
          )}
        )
        case 'CHANGE_BASE_ICON':
        return Object.assign(
          {}, 
          state, 
          {bases: state.bases.map(base =>
            (base.id === action.id) 
              ? { id: base.id, name: base.name, color: base.color, icon:action.icon, showMenu: base.showMenu}
              : base
          )}
        )
        case 'CHANGE_BASE_NAME':
        return Object.assign(
          {}, 
          state, 
          {bases: state.bases.map(base =>
            (base.id === action.id) 
              ? { id: base.id, name: action.name, color: base.color, icon:base.icon, showMenu: base.showMenu}
              : base
          )}
        )
    default:
      return state
  }
}

export default baseStore