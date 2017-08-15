import axios from 'axios';
import R from 'ramda';
const url = '/api';

const getBase = (_id) =>
    axios.get(url + '/base/' + _id)
        .then((response) => response.data)
        .catch(R.tap(console.error));

const getTablesByIds = (ids) =>
    axios.get(url + '/tables/ids/' + ids.join(':'))
        .then( (response) => response.data)
        .catch(R.tap(console.error))

const addTable = (name) =>
    axios.post(url + '/tables', {name: name})
        .then((response) => response.data)
	    .catch(R.tap(console.error))

const updateBaseByNewTable = (payload) =>
    axios.put(url + '/base/' + payload.baseId + '/tables/' + payload.table._id)
        .then((response) => response.data)
        .catch(R.tap(console.error));

export {
    getBase,
    getTablesByIds,
    addTable,
    updateBaseByNewTable
};