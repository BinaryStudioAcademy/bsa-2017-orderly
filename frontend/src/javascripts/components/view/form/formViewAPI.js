import axios from 'axios';
const url = '/api';
const urlNoAuth = 'http://localhost:2020/formShare/';
import R from 'ramda';

export const updateView = (action) => {
    return axios.put(url + '/view/form/' + action.viewId + '/fields', action)
        .then((response) => response)
        .catch(R.tap(console.error));
};

export const getTableById = (action) => {
    return fetch(urlNoAuth + action.tableId, {method: 'GET'})
        .then((response) => response.json())
        .catch(R.tap(console.error));
}

export const getViewById = (action) => {
    return fetch(urlNoAuth + action.tableId +'/'+ action.viewId, {method: 'GET'})
        .then((response) => response.json())
        .catch(R.tap(console.error));
}

export const updateTableFromForm = (action) => {
    return fetch(urlNoAuth + action.tableId, {
        method: 'PUT',
        headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
        body: JSON.stringify(action.table)})
        .then((response) => response.json())
        .catch(R.tap(console.error));
}
    