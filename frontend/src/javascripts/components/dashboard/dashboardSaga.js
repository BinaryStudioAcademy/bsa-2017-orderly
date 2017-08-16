import { call, put, takeEvery } from 'redux-saga/effects';
import { getTablesByIds, getBase, addTable, updateBaseByNewTable } from './dashboardApi';
import { browserHistory } from 'react-router';

function* fetchBaseById(action) {
    try {
        const payload = {};
        payload.base = yield call(getBase, action._id);
        payload.tableId = action.tableId;
        yield put({ type: 'GET_BASE_SUCCEEDED', payload});
    } catch (err) {
        yield put({ type: 'GET_BASE_AND_TABLES_FAILED', message: err.message});
    }
}

function* fetchTablesByBase(action) {
    try {
	    const tables = yield call(getTablesByIds, action.payload.base.tables);
        yield put({ type: 'GET_TABLES_BY_IDS_SUCCEEDED', tables: tables});
        yield put({ type: 'SET_ACTIVE_TAB', tableId: action.payload.tableId})
    } catch (err) {
        yield put({ type: 'GET_TABLES_BY_IDS_FAILED', message: err.message});
    }
}

function* addingTable(action) {
    try {
        const payload = {};
        payload.baseId = action.baseId;
        payload.table = yield call(addTable, action.name);
        yield put({ type: 'ADD_TABLE_SUCCEEDED', payload });
    } catch (err) {
        yield put({ type: 'ADD_TABLE_FAILED', message: err.message});
    }
}

function* addTableToBase(action) {
    try {
        console.log(action.payload, '-----------payload')
        const base = yield call(updateBaseByNewTable, action.payload);
        yield put({ type: 'ADD_TABLE_TO_BASE_SUCCEEDED', base: base});
	    yield put({ type: 'SET_ACTIVE_TAB', tableId: action.payload.table._id});
	    browserHistory.push(`/dashboard/${base._id}/${action.payload.table._id}`);
    } catch (err) {
        yield put({ type: 'ADD_TABLE_TO_BASE_FAILED', message: err.message});
    }
}

function* dashboardSaga() {
    yield takeEvery('GET_BASE', fetchBaseById);
    yield takeEvery('ADD_TABLE', addingTable);
    yield takeEvery('GET_BASE_SUCCEEDED', fetchTablesByBase);
    yield takeEvery('ADD_TABLE_TO_BASE', addTableToBase);
}

export default dashboardSaga;