import {call, put, takeEvery, select} from 'redux-saga/effects';
import {
    getTablesByIds, getBase, addTable, addFieldsToTable,
    updateBaseByNewTable, getRecordsByTableId, updateTable, addRecord
} from './dashboardApi';
import {browserHistory} from 'react-router';

const getDashboardReducer = (state) => state.dashboardReducer;

function* fetchBaseById(action) {
    try {
        const payload = {};
        payload.base = yield call(getBase, action._id);
        payload.tableId = action.tableId;
        yield put({type: 'GET_BASE_SUCCEEDED', payload});
    } catch (err) {
        yield put({type: 'GET_BASE_AND_TABLES_FAILED', message: err.message});
    }
}

function* fetchTablesByBase(action) {
    try {
        const tables = yield call(getTablesByIds, action.payload.base.tables);
        yield put({type: 'GET_TABLES_BY_IDS_SUCCEEDED', tables: tables});
        yield put({type: 'SET_ACTIVE_TAB', tableId: action.payload.tableId});
    } catch (err) {
        yield put({type: 'GET_TABLES_BY_IDS_FAILED', message: err.message});
    }
}

function* addingTable(action) {
    try {
        const payload = {};
        payload.baseId = action.baseId;
        payload.table = yield call(addTable, action.name);
        yield put({type: 'ADD_TABLE_SUCCEEDED', payload});
    } catch (err) {
        yield put({type: 'ADD_TABLE_FAILED', message: err.message});
    }
}

function* addTableToBase(action) {
    try {
        const base = yield call(updateBaseByNewTable, action.payload);
        yield put({type: 'ADD_TABLE_TO_BASE_SUCCEEDED', base: base});
        yield put({type: 'SET_ACTIVE_TAB', tableId: action.payload.table._id});
        browserHistory.push(`/dashboard/${base._id}/${action.payload.table._id}`);
    } catch (err) {
        yield put({type: 'ADD_TABLE_TO_BASE_FAILED', message: err.message});
    }
}

function* addNewField(action) {
    try {
        const payload = {};
        payload.tableId = action.tableId;
        payload.table = yield call(addFieldsToTable, payload);
        yield put({type: 'ADD_FIELD_SUCCEEDED', payload});
    } catch (err) {
        yield put({type: 'ADD_FIELD_FAILED', message: err.message});
    }
}

function* changeTable(action) {
    try {
        const payload = {};
        payload._id = action.tableId;
        payload.body = action.newData;
        const changedTable = yield call(updateTable, payload);
        yield put({type: 'RENAME_TABLE_SUCCEEDED', changedTable});
    } catch (err) {
        yield put({type: 'RENAME_TABLE_FAILED', message: err.message});
    }
}

function* addNewRecord(action) {
    try {
        const payload = {};
        payload.tableId = action.tableId;
        payload.table = yield call(addRecord, payload);
        console.log('SAGA_------------');
        console.log(payload);
        yield put({type: 'ADD_RECORD_SUCCEEDED', payload});
    } catch (err) {
        yield put({type: 'ADD_RECORD_FAILED', message: err.message});
    }
}

function* changeTableRecord(action) {
    try {
        yield put({type: 'PERFORM_CHANGE_RECORD', tableId: action.tableId, recordId: action.recordId, data: action.data});
        const dashboardReducer = yield select(getDashboardReducer);
        let table = dashboardReducer.tables.filter((t) => t._id === action.tableId).pop();
        yield put({type: 'UPDATE_TABLE', tableId: action.tableId, newData: table});
    } catch (err) {
        yield put({type: 'UPDATE_TABLE_FAILED', message: err.message});
    }
}

function* dashboardSaga() {
    yield takeEvery('GET_BASE', fetchBaseById);
    yield takeEvery('ADD_TABLE', addingTable);
    yield takeEvery('GET_BASE_SUCCEEDED', fetchTablesByBase);
    yield takeEvery('ADD_TABLE_SUCCEEDED', addTableToBase);
    yield takeEvery('ADD_FIELD', addNewField);
    yield takeEvery('UPDATE_TABLE', changeTable);
    yield takeEvery('ADD_RECORD', addNewRecord);
    yield takeEvery('CHANGE_RECORD', changeTableRecord);
}

export default dashboardSaga;