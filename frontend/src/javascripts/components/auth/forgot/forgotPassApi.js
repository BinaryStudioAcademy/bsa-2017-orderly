import axios from 'axios';
const forgotUrl = '/auth/forgot';

const forgot = (email) =>
    axios.post(forgotUrl, email)
        .then((response) => response.data)
        .catch((error) => error.data);

export {
    forgot
};