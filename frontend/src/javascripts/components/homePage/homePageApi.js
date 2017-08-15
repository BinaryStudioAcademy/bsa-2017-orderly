import axios from 'axios';
import R from 'ramda';

const url = 'http://localhost:2020/api';

const getBases = () =>
    axios.get(url + '/base/')
        .then((response) => response.data)
        .catch(R.tap(console.error));

const addBase = (name) =>
    axios.post(url + '/base', {name: name})
        .then((response) => response.data)
        .catch(R.tap(console.error));

const updateBaseById = (_id, typeAction, value) =>
    axios.put(url + '/base/' + _id, {[typeAction]: value})
        .then((response) => response.data)
        .catch(R.tap(console.error));

export {
    getBases,
    addBase,
    updateBaseById
};