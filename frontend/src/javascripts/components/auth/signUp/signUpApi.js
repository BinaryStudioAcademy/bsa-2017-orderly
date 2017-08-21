import axios from 'axios';
const signUpUrl = '/auth/signup';

function callAddUserApi(credentials) {
    return axios.post(signUpUrl, credentials)
        .then((response) => response.data)
        .catch((error) => error.data);
}

export const fetchSignUp = (credentials) => callAddUserApi(credentials);