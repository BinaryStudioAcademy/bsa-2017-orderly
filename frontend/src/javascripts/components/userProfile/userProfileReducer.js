import {CHANGE_USER_PROFILE_DATA, CHANGE_USER_PROFILE_DATA_SUCCESS, GET_USER_NAME_REQUESTED, GET_USER_NAME_SUCCEEDED, CHANGE_USER_NAME_COLOR, GET_CURRENT_USER_SUCCEEDED} from './userProfileActions';

let initialState = {
    user: null
};

export default function userProfile(state = initialState, action) {
    switch (action.type) {
    case "CHANGE_USER_PROFILE_DATA_SUCCESS":        
        console.log(action.user);

        // const data = {
        //     email: state.user.email,
        //     _id: state.user._id,
        //     firstName: action.updateData.firstName || state.user.firstName,
        //     lastName: action.updateData.lastName || state.user.lastName,
        //     gender: action.updateData.gender || state.user.gender,
        //     birthday: action.updateData.birthday || state.user.birthday,
        //     country: action.updateData.country || state.user.country,
        //     city: action.updateData.city || state.user.city,
        //     address: action.updateData.address || state.user.address,
        //     phone: action.updateData.phone || state.user.phone
        // };
      
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