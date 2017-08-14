export const SIGN_UP_ACTION = 'SIGN_UP_ACTION';
export const CHANGE_SIGN_UP_FORM = 'CHANGE_SIGN_UP_FORM';
export const SIGN_UP_PROCESS = 'SIGN_UP_PROCESS';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';

export function signUp(formData) {
    return {
        type: SIGN_UP_ACTION,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
    };
}

export function changeSignUpForm(formField) {
    return {
        type: CHANGE_SIGN_UP_FORM,
        field: formField
    };
}
