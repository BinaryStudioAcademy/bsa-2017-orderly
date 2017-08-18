export const GET_USER_NAME_REQUESTED = 'GET_USER_NAME_REQUESTED';
export const GET_USER_NAME_SUCCEEDED = 'GET_USER_NAME_SUCCEEDED';
export const CHANGE_USER_NAME_FIELD = 'CHANGE_USER_NAME_FIELD';
export const GET_CURRENT_USER_REQUESTED = 'GET_CURRENT_USER_REQUESTED';
export const GET_CURRENT_USER_SUCCEEDED = 'GET_CURRENT_USER_SUCCEEDED';
export const CHANGE_USER_PROFILE_DATA = 'CHANGE_USER_PROFILE_DATA';
export const CHANGE_USER_PROFILE_DATA_SUCCESS = 'CHANGE_USER_PROFILE_DATA_SUCCESS';



export function getCurrentUser() {
    return {
        type: "GET_CURRENT_USER_REQUESTED"
    };
}


export function changeUserData(_id, data) {
    return {
        type: "CHANGE_USER_PROFILE_DATA",
        updateData: {
            firstName: data.firstName,
            lastName: data.lastName,
            gender: data.gender,
            country: data.country,
            city: data.city,
            address: data.address,
            phone: data.phone,
            birthday: data.birthday
        },
        _id
    };
}