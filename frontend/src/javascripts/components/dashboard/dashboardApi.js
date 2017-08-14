import axios from 'axios';
import R from 'ramda';
const url = '/api/tables';

const getTables = () =>
    axios.get(url)
        .then( (responce) => responce.data)
        .catch(R.tap(console.error));

const addTable = (name) =>
    axios.post(url, name)
        .then((responce) => responce.data)
        .catch(R.tap(console.error));

export {
    getTables,
    addTable
};