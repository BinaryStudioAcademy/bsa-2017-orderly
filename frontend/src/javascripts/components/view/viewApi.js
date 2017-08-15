import axios from 'axios';
const fieldApiUrl = '/fields';

export const addColumn = (_id) =>
    axios.post(fieldApiUrl + _id)
        .then((response) => response.data)
        .catch((err) => console.log(err));
