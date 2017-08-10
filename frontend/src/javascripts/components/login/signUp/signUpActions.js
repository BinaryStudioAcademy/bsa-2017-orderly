export const SIGN_UP_ACTION = 'SIGN_UP';
export const SIGN_UP_PROCESS = 'SIGN_UP_PROCESS';

export function signUp(formData) {
    return {
        type: SIGN_UP_ACTION,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
    };
}
