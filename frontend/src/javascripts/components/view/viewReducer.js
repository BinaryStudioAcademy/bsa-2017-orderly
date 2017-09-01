import {TOGGLE_SELECTOR, TOGGLE_FIELD_MENU} from "./viewActions";

const initialState = {
    showSelector: false,
    showFieldMenu: false,
};

export default function viewReducer(state = initialState, action) {
    switch (action.type) {
    case TOGGLE_SELECTOR: {
        return {...state, showSelector: !state.showSelector};
    }
    case TOGGLE_FIELD_MENU: {
        return {...state, showFieldMenu: !state.showFieldMenu};
    }
    default:
        return state;
    }
}