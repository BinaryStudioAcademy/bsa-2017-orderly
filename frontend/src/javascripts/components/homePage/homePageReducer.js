const baseStore = (state = { 
    bases: 
    [{ id: 0, name: "New Base", color: "#C3C8B7", icon:"code", showMenu: false }]}, action) => {

  switch (action.type) {
    case 'ADD_NEW_BASE_SUCCESS':
      return Object.assign(
        {}, 
        state, 
        {bases: [...state.bases, { id: action.id, name: action.name, color: "#C3C8B7", icon:"code", showMenu: false }]}
        );
      
        case 'CHANGE_BASE_PARAM':
          let bases = state.bases.map(value => Object.assign({}, value))

          let currentBaseIndex = bases.findIndex(base=>{
            return base.id === action.id
          })
          
          let currentBase = bases[currentBaseIndex];
           if (action.typeAction === "showMenu") {
            currentBase[action.typeAction] = !currentBase.showMenu;
          } else {
            currentBase[action.typeAction] = action.value;
          }
          
          bases[currentBaseIndex] = currentBase;
          
          return Object.assign(
            {}, 
            state, 
            {bases}
          )
    
    default:
      return state
  }
}

export default baseStore