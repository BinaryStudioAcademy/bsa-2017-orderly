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
    case "UPLOAD_USER_AVATAR_SUCCESS":      
        return Object.assign(
            {}, 
            state, 
            { user: action.user }
          )

    case "GET_CURRENT_USER_SUCCEEDED":
        return Object.assign(
            {}, 
            state,
            { user: action.user}
        )

    default:
        return state;
    }
}

