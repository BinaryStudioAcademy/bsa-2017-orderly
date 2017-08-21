import axios from 'axios';
import R from 'ramda';

const url = '/api';

const getBase = (_id) =>
    axios.get(url + '/base/' + _id)
        .then((response) => response.data)
        .catch(R.tap(console.error));

const getTablesByIds = (ids) =>
    axios.get(url + '/tables/ids/' + ids.join(':'))
        .then((response) => response.data)
        .catch(R.tap(console.error));

const addTable = (name) =>
    axios.post(url + '/tables', {name: name})
        .then((response) => response.data)
        .catch(R.tap(console.error));

const updateBaseByNewTable = (payload) =>
    axios.put(url + '/base/' + payload.baseId + '/tables/' + payload.table._id)
        .then((response) => response.data)
        .catch(R.tap(console.error));

const updateTable = ({ _id, body }) =>
	axios.put(url + '/tables/' + _id, body)
		.then((response) => response.data)
		.catch(R.tap(console.error));

const addFieldsToTable = ({tableId}) => {
    axios.post(url + '/tables/' + tableId + '/fields/', {
        name: 'default',
        type: 'text',
    })
        .then((response) => response.data)
        .catch(R.tap(console.error));

    return axios.put(url + '/tables/' + tableId + '/records/', {data: ''})
        .then((table) => table.data)
        .catch(R.tap(console.error));
};

const addRecord = ({tableId}) => {
    return axios.put(url + '/tables/' + tableId + '/fields/', {data: ''})
        .then((response) => response.data)
        .catch(R.tap(console.error));
};

const deleteTable = (tableId) =>
	axios.delete(url + '/tables/' + tableId)
		.then((response) => response.data)
		.catch(R.tap(console.error));

const updateField = (payload) => {
    return axios.put(url + '/tables/' + payload.tableId + '/fields/' + payload.fieldId, payload)
        .then((response) => response)
        .catch(R.tap(console.error));
};

export {
    getBase,
    getTablesByIds,
    addTable,
    updateBaseByNewTable,
	updateTable,
    addFieldsToTable,
    addRecord,
	deleteTable,
    updateField
};