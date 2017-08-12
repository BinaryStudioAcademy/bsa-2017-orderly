import axios from 'axios';
const loginUrl = '/auth/login';
const currentUserUrl = '/api/user/me';

const login = (user) =>
    axios.post(loginUrl, user)
        .then((response) => response.data)
        .catch((error) => error);

const getCurrentUser = () =>
    axios.get(currentUserUrl)
        .then((response) => response.data)
        .catch((error) => error);

export {
    login,
    getCurrentUser
};