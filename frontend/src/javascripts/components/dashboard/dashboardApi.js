import R from 'ramda';
const url = 'http://localhost:2020/api';

const getBase = (_id) =>
    fetch(url + '/base/' + _id)
        .then((response) => response.json())
        .catch(R.tap(console.error));

const getTables = () =>
    fetch(url + '/tables')
        .then((response) => response.json())
        .catch(R.tap(console.error));

const addTable = (name) =>
    fetch(url + '/tables', {
        method: 'POST',
        body: JSON.stringify(name),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
        .then((response) => response.json())
        .catch(R.tap(console.error));

export {
    getBase,
    getTables,
    addTable
};