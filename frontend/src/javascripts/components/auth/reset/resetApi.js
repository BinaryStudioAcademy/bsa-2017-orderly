import axios from 'axios';

const reset = ({token, password}) =>
    axios.post('/auth/reset/'+ token, {password: password})
        .then((response) => response.data)
        .catch((error) => error.data);

export {
    reset
};