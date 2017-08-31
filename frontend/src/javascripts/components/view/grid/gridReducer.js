import {TOGGLE_FIELD_MENU, CHANGE_FIELD_OPTIONS} from "./gridActions";

const initialState = {
    showFieldMenu: false, 
    fieldOptionsSS: []
};

export default function gridReducer(state = initialState, action) {
    switch (action.type){
    case TOGGLE_FIELD_MENU: {
        console.log('GRID REDUCER FIELD MENU SHOW');
        return {...state, showFieldMenu: !state.showFieldMenu};
    }
    case CHANGE_FIELD_OPTIONS: {
        return Object.assign(
            {}, 
            state, 
            { fieldOptionsSS: action.fieldOptions }
        )
    }
    default:
        return state;
    }
}
