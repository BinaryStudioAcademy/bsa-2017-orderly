export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR';
export const FORGOT_PASSWORD_RESPONSE = 'FORGOT_PASSWORD_RESPONSE';

export function performForgot(email) {
    return {
        type: FORGOT_PASSWORD,
        email: email
    };
}