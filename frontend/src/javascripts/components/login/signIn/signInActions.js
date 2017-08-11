export const LOGIN_USER = 'LOGIN_USER';
export const CHANGE_USER_DATA = 'CHANGE_USER_DATA';
export const LOGIN_USER_RESPONSE = 'LOGIN_USER_RESPONSE';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';

export function performLogin(data) {
    return {
        type: LOGIN_USER,
        email: data.email,
        password: data.password
    };
}

export function changeUserData(data) {
    return {
        type: CHANGE_USER_DATA,
        data: data
    };
}
