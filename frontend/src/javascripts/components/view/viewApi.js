import axios from 'axios';
const baseTableId = '59936bd905728d627827c5ef';
const fieldApiUrl = `/fields`;

export const addFieldApi = (body) => {
    axios.post(`${baseTableId}${fieldApiUrl}`, body)
        .then((response) => response.data)
        .catch((err) => console.log(err));
};
//
// export const getFieldsApi = (tableId) => {
//     axios.get(`${tableId}${fieldApiUrl}`)
//         .then((fields) => fields)
//         .catch((err) => console.log(err));
// };
