import axios from 'axios';

const url = '/api';

export const getBase = (_id) =>
    axios.get(url + '/base/' + _id)
        .then((response) => response.data)
        .catch(R.tap(console.error));

export const getTablesByIds = (ids) =>
    axios.get(url + '/tables/ids/' + ids.join(':'))
        .then((response) => response.data)
        .catch(R.tap(console.error));

export const getTableById = (tableId) =>
	axios.get(url + '/tables/' + tableId)
		.then(response => response.data)
		.catch(R.tap(console.error));

export const addTable = (table) =>
    axios.post(url + '/tables', table)
        .then((response) => response.data)
        .catch(R.tap(console.error));

export const updateBaseByNewTable = (payload) =>
    axios.put(url + '/base/' + payload.baseId + '/tables/' + payload.table._id)
        .then((response) => response.data)
        .catch(R.tap(console.error));

export const updateTable = ({ _id, body }) =>
	axios.put(url + '/tables/' + _id, body)
		.then((response) => response.data)
		.catch(R.tap(console.error));

export const updateTableCSV = (payload) =>
    axios.put(url + '/tables/csv/' + payload._id, payload)
        .then((response) => response.data)
        .catch(R.tap(console.error));


export const addFieldsToTable = ({tableId, currentViewId}) => {
    return axios.post(url + '/tables/' + tableId + '/fields/', {
        field: {
            name: 'Text line',
            type: 'text',
        },
        currentViewId: currentViewId,
    }).then(() => axios.put(url + '/tables/' + tableId + '/records/',
            {data: {data: '', currentView: currentViewId}}
        ))
        .then((table) => table.data)
        .catch(R.tap(console.error));
};

export const addRecord = ({tableId}) => {
    return axios.put(url + '/tables/' + tableId + '/fields/', {data: ''})
        .then((response) => response.data)
        .catch(R.tap(console.error));
};

export const deleteTable = (tableId) =>
	axios.delete(url + '/tables/' + tableId)
		.then((response) => response.data)
		.catch(R.tap(console.error));

export const updateField = (payload) => {
    return axios.put(url + '/tables/' + payload.tableId + '/fields/' + payload.fieldId, payload)
        .then((response) => response)
        .catch(R.tap(console.error));
};

export const deleteFieldRecords = (payload) => {
    return axios.delete(url + '/tables/' + payload.tableId + '/fields/' + payload.fieldId,
        {data: {currentView: payload.currentView}})
        .then((response) => response)
        .catch(R.tap(console.error));
};

export const deleteRecord = (payload) => {
    return axios.delete(url + '/tables/' + payload.tableId + '/records/' + payload.recordId)
        .then((response) => response)
        .catch(R.tap(console.error));
};

export const uploadFile = ({data, typeOfFile, record_dataId, tableId}) =>
	axios.post(`/files/attachment/${record_dataId}/${typeOfFile}/${tableId}`, data)
		.then(response => response.data)
		.catch(R.tap(console.error));

export const deleteFile = ({typeOfFile, record_dataId, tableId, fileNamesStr}) =>
	axios.delete(`/files/attachment/${record_dataId}/${typeOfFile}/${tableId}/${fileNamesStr}`)
		.then(response => response.data)
		.catch(R.tap(console.error));

export const addView = ({tableId, viewType}) => {
    return axios.post(url + '/tables/' + tableId + '/views', {tableId, viewType})
        .then((response) => response.data)
        .catch(R.tap(console.error));
};

export const getTableView = ({tableId, viewId, viewType}) => {
    return axios.get(url + '/tables/' + tableId + '/views/' + viewId + '/' + viewType)
        .then((response) => response.data)
        .catch(R.tap(console.error));
};

export const deleteView = ({tableId, viewId, viewType}) => {
    return axios.delete(url + '/tables/' + tableId + '/views/' + viewId + '/' + viewType)
        .then((response) => response.data)
        .catch(R.tap(console.error));
};

export const updateKanban = (kanbanView) =>
	axios.put(url + '/view/kanban/' + kanbanView._id, R.dissoc('_id', kanbanView))
		.then((response) => response.data)
		.catch(R.tap(console.error));

export const getMembersByBaseId = (baseId) =>
	axios.get(url + '/team/' + baseId + '/members')
		.then(response => response.data)
		.catch(R.tap(console.error));

export const addFilter = (payload) => {
    return axios.post(url + '/tables/' + payload.tableId + '/views/' + payload.viewType + '/' +
        payload.viewId + '/fields/' + payload.fieldId + '/' + payload.fieldIndex + '/filters/')
        .then((response) => response)
        .catch(R.tap(console.error));
};

export const updateFilter = (payload) => {
    return axios.put(url + '/tables/' + payload.tableId + '/views/' + payload.viewType + '/' +
        payload.viewId + '/fields/' + payload.fieldId + '/' + payload.fieldIndex + '/filters/' + payload.filterId,
        {data: {condition: payload.condition, query: payload.filterQuery}})
        .then((response) => response)
        .catch(R.tap(console.error));
};

export const removeFilter = (payload) => {
    return axios.delete(url + '/tables/' + payload.tableId + '/views/' + payload.viewType + '/' +
        payload.viewId + '/filters/' + payload.filterId)
        .then((response) => response)
        .catch(R.tap(console.error));
};

export const removeAllFilters = (payload) => {
    return axios.delete(url + '/tables/' + payload.tableId + '/views/' + payload.viewType + '/' +
        payload.viewId + '/filters')
        .then((response) => response)
        .catch(R.tap(console.error));
};

export const addSort = (payload) => {
    return axios.post(url + '/tables/' + payload.tableId + '/views/' + payload.viewType + '/' +
        payload.viewId + '/fields/' + payload.fieldId + '/sorts', {sortOption: payload.sortOption})
        .then((response) => {
            console.log('IN AXIOS API');
            console.log(response);
            return response;
        })
        .catch(R.tap(console.error));
};

export const updateSort = (payload) => {
    return axios.put(url + '/tables/' + payload.tableId + '/views/' + payload.viewType + '/' +
        payload.viewId + '/fields/' + payload.fieldId + '/sorts/' + payload.sortId,
        {sortOption: payload.sortOption})
        .then((response) => response)
        .catch(R.tap(console.error));
};

export const removeSort = (payload) => {
    return axios.delete(url + '/tables/' + payload.tableId + '/views/' + payload.viewType + '/' +
        payload.viewId + '/sorts/' + payload.sortId)
        .then((response) => response)
        .catch(R.tap(console.error));
};

export const removeAllSorts = (payload) => {
    return axios.delete(url + '/tables/' + payload.tableId + '/views/' + payload.viewType + '/' +
        payload.viewId + '/sorts')
        .then((response) => response)
        .catch(R.tap(console.error));
};

export const updateViewHideFields = (action) => {
    return axios.put(url + '/tables/' + action.tableId + '/views/'+ action.viewType + '/' + action.viewId + '/fields/' + action.fieldId, action)
        .then((response) => response)
        .catch(R.tap(console.error));
};