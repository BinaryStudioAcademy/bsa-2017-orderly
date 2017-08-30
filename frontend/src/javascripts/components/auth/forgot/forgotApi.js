import axios from 'axios';

const forgot = (email) =>
    axios.post('/auth/forgot', {email: email})
        .then((response) => response.data)
        .catch((error) => error.data);

export {
    forgot
};