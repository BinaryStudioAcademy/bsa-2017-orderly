import axios from 'axios';
const loginUrl = '/auth/login';
const currentUserUrl = '/api/user/me';

const login = (user) =>
    axios.post(loginUrl, user)
        .then((response) => response.data)
        .catch((error) => error.data);

const getCurrentUser = () =>
    axios.get(currentUserUrl)
        .then((response) => response.data)
        .catch((error) => error.data);

export {
    login,
    getCurrentUser
};