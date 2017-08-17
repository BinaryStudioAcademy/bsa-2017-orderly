export const GET_USER_NAME_REQUESTED = 'GET_USER_NAME_REQUESTED';
export const GET_USER_NAME_SUCCEEDED = 'GET_USER_NAME_SUCCEEDED';
export const CHANGE_USER_NAME_FIELD = 'CHANGE_USER_NAME_FIELD';
export const GET_CURRENT_USER_REQUESTED = 'GET_CURRENT_USER_REQUESTED';
export const GET_CURRENT_USER_SUCCEEDED = 'GET_CURRENT_USER_SUCCEEDED';
export const CHANGE_USER_DATA = 'CHANGE_USER_DATA';



export function getCurrentUser() {
    return {
        type: GET_CURRENT_USER_REQUESTED
    };
}

export function changeUserProfileField(data){
    return {
        type: CHANGE_USER_NAME_FIELD,
        field: data.field
    };
}

export function changeUserData(data) {
    return {
        type: CHANGE_USER_DATA,
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender,
        birthday: data.birthday,
        country: data.country,
        city: data.city,
        address: data.address,
        phone: data.phone,
    };
}