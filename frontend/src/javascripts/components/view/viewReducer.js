import {CHANGE_VIEW} from "./viewActions";

const initialState = {
    records: [],
    fields: [],
    views: []
};

export default function viewReducer(state = initialState, action) {
    switch (action.type){
    case CHANGE_VIEW: {
        return {...state, currentView: action.viewId};
    }
    default:
        return state;
    }
}