const homePage = (state = { bases: [{ id:  0, name: "New Base", color: "#D0FF51", icon:"plus" } ], showMenu: false}, action) => {
  switch (action.type) {
    case 'ADD_NEW_BASE':
      return Object.assign(
        {}, 
        state, 
        {bases: [...state.bases, { id: action.id, name: action.name, color: "#D0FF51", icon:"plus" }]}
        );

    default:
      return state
  }
};
export default homePage