export const SIGN_UP_ACTION = 'SIGN_UP';

export function signUp(formData) {
    console.log('ACTION FIRE');
    console.log(formData);
    return {
        type: SIGN_UP_ACTION,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
    };
}
