import { call, put, takeEvery } from 'redux-saga/effects';
import { getTables, addTable } from './dashboardApi';

function* fetchTables() {
    try {
        const tables = yield call(getTables);
        yield put({ type: 'GET_TABLES_SUCCEEDED', tables: tables});
    } catch (err) {
        yield put({type: 'GET_TABLES_FAILED', message: err.message});
    }
}

function* fetchTable(action) {
    try {
        const table = yield call(addTable, action.name);
        yield put({ type: 'ADD_TABLE_SUCCEEDED', tables: [table] });
    } catch (err) {
        console.warn(err);
        yield put({type: 'ADD_TABLE_FAILED', message: err.message});
    }
}

function* dashboardSaga() {
    yield takeEvery('GET_TABLES', fetchTables);
    yield takeEvery('ADD_TABLE', fetchTable);
}

export default dashboardSaga;