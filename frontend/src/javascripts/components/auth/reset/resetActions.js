export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';
export const RESET_PASSWORD_RESPONSE = 'RESET_PASSWORD_RESPONSE';

export function performReset(token, password) {
    return {
        type: RESET_PASSWORD,
        token: token,
        password: password
    };
}