import axios from 'axios';
const baseTableId = '/api/tables/5992e6d173640e30de3a5117';
const fieldApiUrl = `/fields`;

export const addFieldApi = () => {
    const newField = {type: 'text', name: 'New Field'};
    return axios.post(`${baseTableId}${fieldApiUrl}`, newField)
        .then((response) => response.data)
        .catch((err) => console.log(err));
};