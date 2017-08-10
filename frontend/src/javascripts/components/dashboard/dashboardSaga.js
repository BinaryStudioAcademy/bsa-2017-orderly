import { call, put, takeEvery } from 'redux-saga/effects';
import { getBase, getTables, addTable } from './dashboardApi';

function* fetchBaseById(action) {
    try {
        const base = yield call(getBase, action._id);
        yield put({ type: 'GET_BASE_SUCCEEDED', base: base});
    } catch (err) {
        yield put({ type: 'GET_BASE_FAILED', message: err.message});
    }
}

function* fetchAllTables() {
    try {
        const tables = yield call(getTables);
        yield put({ type: 'GET_TABLES_SUCCEEDED', tables: tables});
    } catch (err) {
        yield put({ type: 'GET_TABLES_FAILED', message: err.message});
    }
}

function* fetchTable(action) {
    try {
        const table = yield call(addTable, action.name);
        yield put({ type: 'ADD_TABLE_SUCCEEDED', tables: [table] });

    } catch (err) {
        console.warn(err);
        yield put({ type: 'ADD_TABLE_FAILED', message: err.message});
    }
}

function* dashboardSaga() {
    yield takeEvery('GET_BASE', fetchBaseById);
    yield takeEvery('GET_TABLES', fetchAllTables);
    yield takeEvery('ADD_TABLE', fetchTable);
}

export default dashboardSaga;