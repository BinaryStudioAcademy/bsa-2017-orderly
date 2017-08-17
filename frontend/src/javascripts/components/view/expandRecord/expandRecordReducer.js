import { CHANGE_FIELD_DATA } from './expandRecordActions';

const initState = {
    value: ''
};

function expandRecordReducer(state = initState, action) {
    switch (action.type) {

    case CHANGE_FIELD_DATA:
        return {...state, ...action.data};

    default:
        return state;
    }
}

export default expandRecordReducer;