let initialState = {
  showMenuforBase: 0,
  showMenu: false,
  bases: []
}
const baseStore = (state = initialState, action) => {

  switch (action.type) {
    case 'GET_BASES_SUCCESS':
      return Object.assign({}, state, {bases: action.bases})
    
    case 'DELETE_BASE':
      return Object.assign(
        {}, 
        state, 
        {bases: state.bases.filter(base => base._id !== action._id)}
        );

    case 'ADD_NEW_BASE_SUCCESS':
      return Object.assign(
        {}, 
        state, 
        {bases: [...state.bases, action.payload.base]}
        );

    case 'SHOW_CONTEXT_MENU':
      return Object.assign(
          {}, 
          state, 
          {showMenuforBase: action._id, showMenu: !state.showMenu}
        );

    case 'CHANGE_BASE_PARAM_SUCCESS':
      let bases = state.bases.map(value => Object.assign({}, value))

      let currentBaseIndex = bases.findIndex(base=>{
        return base._id === action.base._id
      })
      
      let currentBase = action.base;
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