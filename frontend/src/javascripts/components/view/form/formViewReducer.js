import {INCLUDE_FIELD, EXCLUDE_FIELD} from "./formViewActions";

const initialState = {
    included: [],
};

export default function formReducer(state = initialState, action) {
    switch (action.type) {
    case INCLUDE_FIELD: {
        return {...state, included: state.included.concat(action.fieldId)};
    }
    case EXCLUDE_FIELD: {
        return {...state, included: state.included.filter((f) => f !== action.fieldId)};
    }
    default:
        return state;
    }
}
