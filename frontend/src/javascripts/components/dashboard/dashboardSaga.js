import { call, put, takeEvery } from 'redux-saga/effects';
import R from 'ramda';
import { getTableById, getBase, getTables, addTable } from './dashboardApi';

function* fetchBaseById(action) {
    try {
        const base = yield call(getBase, action._id);
        if (base.tables && base.tables.length > 0) {
            console.log(base.tables, '----------- after receive base ------');
            R.forEach((id) => {
                fetchTableById(id);
            })(base.tables);
        }

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

function* fetchTableById(id) {
    try {
        const table = yield call(getTableById, id);
        yield put({ type: 'GET_TABLE_BY_ID_SUCCEEDED', table: [table]});
    } catch (err) {
        yield put({ type: 'GET_TABLE_BY_ID_FAILED', message: err.message});
    }
}

function* addingTable(action) {
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
    yield takeEvery('ADD_TABLE', addingTable);

}

export default dashboardSaga;