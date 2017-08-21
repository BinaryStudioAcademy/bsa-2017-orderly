import {TOGGLE_FIELD_MENU} from "./gridActions";

const initialState = {
    showFieldMenu: false
};

export default function gridReducer(state = initialState, action) {
    switch (action.type){
    case TOGGLE_FIELD_MENU: {
        return {...state, showFieldMenu: !state.showFieldMenu};
    }
    default:
        return state;
    }
}
