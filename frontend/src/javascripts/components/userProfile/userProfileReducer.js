import { GET_USER_NAME_REQUESTED, GET_USER_NAME_SUCCEEDED, CHANGE_USER_NAME_COLOR } from './userProfileActions';

let initialState = {
    name: 'John Doe',
    color: 'green'
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

    default:
        return state;
    }
}