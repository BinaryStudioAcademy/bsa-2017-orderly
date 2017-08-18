import {CHANGE_USER_PROFILE_DATA, CHANGE_USER_PROFILE_DATA_SUCCESS, GET_USER_NAME_REQUESTED, GET_USER_NAME_SUCCEEDED, CHANGE_USER_NAME_COLOR, GET_CURRENT_USER_SUCCEEDED} from './userProfileActions';

let initialState = {
    user: null
};

export default function userProfile(state = initialState, action) {
    switch (action.type) {
    case "CHANGE_USER_PROFILE_DATA_SUCCESS":      
      return Object.assign(
        {}, 
        state, 
        {user: action.user}
      )

    case "GET_CURRENT_USER_SUCCEEDED":
        return Object.assign({}, state, {
            user: action.user
        });

    default:
        return state;
    }
}