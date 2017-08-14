import axios from 'axios';
import R from 'ramda';

const url = 'http://localhost:2020/api';

const getBase = (_id) =>
    axios(url + '/base/' + _id)
        .then((response) => response.json())
        .catch(R.tap(console.error));

const addBase = (name) =>
    axios(url + '/base', {
        method: 'POST',
        body: JSON.stringify({name: name}),
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
        .then((response) => response.json())
        .catch(R.tap(console.error));

// function callAddBaseApi(newBase) {
//     return axios.post(basesUrl, newBase)
//         .then((response) => response.data)
//         .catch((error) => error.data);
// }

export const fetchGetBase = (newBase) => getBase(newBase);
export const fetchAddBase = (newBase) => addBase(newBase);