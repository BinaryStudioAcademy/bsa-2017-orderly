import {GET_USER_NAME_REQUESTED, GET_USER_NAME_SUCCEEDED, CHANGE_USER_NAME_COLOR, GET_CURRENT_USER_SUCCEEDED} from './userProfileActions';

let initialState = {
    name: 'John Doe',
    color: 'green',
    user: null
};

export default function userProfile(state = initialState, action) {
    switch (action.type) {
    case CHANGE_USER_NAME_COLOR:
        return Object.assign({}, state, {
            color: action.color
        });

    case GET_USER_NAME_SUCCEEDED:
        return Object.assign({}, state, {
            name: action.user.name
        });

    case GET_CURRENT_USER_SUCCEEDED:
        return Object.assign({}, state, {
            user: action.user
        });

    default:
        return state;
    }
}