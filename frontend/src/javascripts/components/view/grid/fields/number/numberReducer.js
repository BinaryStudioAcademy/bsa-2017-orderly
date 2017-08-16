import { SELECTED_FIELD, ACTIVATE_FIELD, ACTIVATE_CLEAR_FIELD,
    CHANGE_FIELD, BLUR_FIELD, BLUR_COMPONENT } from './numberActions';

const initState = {
    value: '',
    selected: false,
    active: false,
    precisionValue: 2,
    typeInteger: true
};

function numberReducer(state = initState, action) {
    switch (action.type) {
        case SELECTED_FIELD:
            return {...state, ...{selected: !state.active}};

        case ACTIVATE_FIELD:
            return {...state, ...{active: true}};

        case ACTIVATE_CLEAR_FIELD:
            return {...state, ...{value: '', active: true}};

        case CHANGE_FIELD:{
            return {...state, ...{value: action.data}};
        }

        case BLUR_FIELD:{
            return {...state, ...{selected: false}};
        }

        case BLUR_COMPONENT:{
            return {...state, ...{active: false}};
        }

        default:
            return state;
    }
}

export default numberReducer;