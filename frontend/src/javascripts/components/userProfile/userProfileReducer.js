let initialState = {
    user: null,
    files: null
};

export default function userProfile(state = initialState, action) {
    switch (action.type) {
    case "CHANGE_USER_PROFILE_DATA_SUCCESS":      
      return Object.assign(
        {}, 
        state, 
        {user: action.user}
      )
    case "UPLOAD_USER_AVATAR":      
      return Object.assign(
        {}, 
        state, 
        {files: { file: action.data}}
      )

    case "GET_CURRENT_USER_SUCCEEDED":
        return Object.assign({}, state, {
            user: action.user
        });

    default:
        return state;
    }
}