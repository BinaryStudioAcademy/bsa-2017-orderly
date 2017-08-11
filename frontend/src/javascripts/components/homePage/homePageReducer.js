const homePageStore = (state = { bases: [{ id: 0, name: "New Base", color: "#C3C8B7", icon:"plus", showMenu: false } ]}, action) => {
  switch (action.type) {
    case 'ADD_NEW_BASE':
      return Object.assign(
        {}, 
        state, 
        {bases: [...state.bases, { id: action.id, name: action.name, color: "#C3C8B7", icon:"plus", showMenu: false }]}
        );
      case 'SHOW_CONTEXT_MENU':
        return Object.assign(
          {}, 
          state, 
          {bases: state.bases.map(base =>
            (base.id === action.id) 
              ? { id: base.id, name: base.name, color: "#C3C8B7", icon:"plus", showMenu: !base.showMenu}
              : base
          )}
        )

    default:
      return state
  }
};
export default homePageStore