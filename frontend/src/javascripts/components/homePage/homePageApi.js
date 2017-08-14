import axios from 'axios';
import R from 'ramda';

const url = 'http://localhost:2020/api';

const getBases = () =>
    axios(url + '/base/')
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

export {
    getBases,
    addBase
};