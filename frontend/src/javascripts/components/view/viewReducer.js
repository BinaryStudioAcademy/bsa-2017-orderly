import {CHANGE_VIEW, TOGGLE_SELECTOR, GET_FIELDS} from "./viewActions";

const MOCK_VIEWS = [
    {id: 1, type: 'grid', name: 'Grid view'},
    {id: 2, type: 'kanban', name: 'Kanban chan'},
    {id: 3, type: 'form', name: 'Formal'},
    {id: 4, type: 'gallery', name: 'Gallery'},
];

const initialState = {
    currentView: 1,
    showSelector: false,
    views: MOCK_VIEWS
};

export default function viewReducer(state = initialState, action) {
    switch (action.type){
        case TOGGLE_SELECTOR: {
            return {...state, showSelector: !state.showSelector};
        }
        case CHANGE_VIEW: {
            return {...state, currentView: action.viewId};
        }
        case GET_FIELDS: {
            return {...state, fields: action.fields};
        }
        default:
            return state;
    }
}