import { takeLatest, call, put, takeEvery } from 'redux-saga/effects';
import R from 'ramda';
import { getTablesByIds, getBase, getTables, addTable } from './dashboardApi';

function* fetchBaseById(action) {
    try {
        const payload = {};
        payload.base = yield call(getBase, action._id);
        payload.tables = yield call(getTablesByIds, payload.base.tables);
        yield put({ type: 'GET_BASE_AND_TABLES_SUCCEEDED', payload});
    } catch (err) {
        yield put({ type: 'GET_BASE_AND_TABLES_FAILED', message: err.message});
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

// function* fetchTablesByBase(action) {
//     try {
//         const tables = yield call(getTablesByIds, action.base.tables);
//         yield put({ type: 'GET_TABLES_BY_IDS_SUCCEEDED', tables: tables});
//     } catch (err) {
//         yield put({ type: 'GET_TABLES_BY_IDS_FAILED', message: err.message});
//     }
// }

function* addingTable(action) {
    try {
        const table = yield call(addTable, action.name);
        yield put({ type: 'ADD_TABLE_SUCCEEDED', tables: [table] });

    } catch (err) {
        yield put({ type: 'ADD_TABLE_FAILED', message: err.message});
    }
}

function* dashboardSaga() {
    yield takeEvery('GET_BASE', fetchBaseById);
    yield takeEvery('GET_TABLES', fetchAllTables);
    yield takeEvery('ADD_TABLE', addingTable);
    // yield takeEvery('GET_BASE_SUCCEEDED', fetchTablesByBase);
}

export default dashboardSaga;