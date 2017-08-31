import {call, put, takeEvery, select, takeLatest} from 'redux-saga/effects';
import {
    getTablesByIds, getBase, addTable, addFieldsToTable,
    updateBaseByNewTable, addRecord, updateTable, deleteTable, updateField,
    deleteFieldRecords, deleteRecord, emitTableCoworker, filterRecords, uploadFile
} from './dashboardApi';
import {browserHistory} from 'react-router';

const getDashboardReducer = (state) => state.dashboardReducer;
const getUserProfileReducer = (state) => state.userProfile;

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
        payload.table = yield call(addTable, action.table);
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

function* removeTable(action) {
    try {
        const payload = {};
        payload.tableId = action.tableId;
        yield call(deleteTable, payload.tableId);
        yield put({type: 'DELETE_TABLE_SUCCEEDED', payload});
    } catch (err) {
        yield put({type: 'DELETE_TABLE_FAILED', message: err.message});
    }
}

function* addNewRecord(action) {
    try {
        const payload = {};
        payload.tableId = action.tableId;
        payload.table = yield call(addRecord, payload);
        yield put({type: 'ADD_RECORD_SUCCEEDED', payload});
    } catch (err) {
        yield put({type: 'ADD_RECORD_FAILED', message: err.message});
    }
}

function* changeTableRecord(action) {
    try {
        yield put({
            type: 'PERFORM_CHANGE_RECORD',
            tableId: action.tableId,
            recordId: action.recordId,
            data: action.data,
            user: action.user
        });
        const dashboardReducer = yield select(getDashboardReducer);
        let table = dashboardReducer.tables.filter((t) => t._id === action.tableId).pop();
        yield put({type: 'UPDATE_TABLE', tableId: action.tableId, newData: table});
    } catch (err) {
        yield put({type: 'UPDATE_TABLE_FAILED', message: err.message});
    }
}

function* addNewComment(action) {
    try {
        yield put({
            type: 'PERFORM_ADD_COMMENT',
            tableId: action.tableId,
            recordId: action.recordId,
            comment: action.comment,
            userId: action.userId
        });
        const dashboardReducer = yield select(getDashboardReducer);
        let table = dashboardReducer.tables.filter((t) => t._id === action.tableId).pop();
        yield put({type: 'UPDATE_TABLE', tableId: action.tableId, newData: table});
    } catch (err) {
        yield put({type: 'UPDATE_TABLE_FAILED', message: err.message});
    }
}

function* updateFieldMeta(action) {
    try {
        const updatedTable = yield call(updateField, action);
        yield put({type: 'UPDATE_FIELD_SUCCEEDED', table: updatedTable.data});
    } catch (err) {
        yield put({type: 'UPDATE_FIELD_FAILED', message: err.message});
    }
}

function* removeField(action) {
    try {
        const deleted = yield call(deleteFieldRecords, action);
        yield put({type: 'DELETE_FIELD_SUCCEEDED', table: deleted.data});
    } catch (err) {
        yield put({type: 'DELETE_FIELD_FAILED', message: err.message});
    }
}

function* removeRecord(action) {
    try {
        const deleted = yield call(deleteRecord, action);
        yield put({type: 'DELETE_RECORD_SUCCEEDED', table: deleted.data});
    } catch (err) {
        yield put({type: 'DELETE_RECORD_FAILED', message: err.message});
    }
}

function* sendTableCoworker(action) {
    try {
        const userProfileReducer = yield select(getUserProfileReducer);
        yield call (emitTableCoworker, userProfileReducer.user, action.tableId);
    } catch (err) {
        yield put({type: 'SEND_TABLE_COWORKER_FAILED', message: err.message});
    }
}

function* filterTableRecords(action) {
    try {
        const filtered = yield call(filterRecords, action);
        yield put({type: 'FILTER_TABLE_SUCCEEDED', table: filtered.data});
    } catch (err) {
        yield put({type: 'FILTER_TABLE_FAILED', message: err.message});
    }
}

function* uploadingFiles(action) {
	try {
		const changedTable = yield call(uploadFile, action);
		yield put({type: 'RENAME_TABLE_SUCCEEDED', changedTable})
	} catch (err) {
		yield put({type: 'UPLOAD_FILES_FAILED'})
	}
}

function* dashboardSaga() {
    yield takeEvery('GET_BASE', fetchBaseById);
    yield takeEvery('ADD_TABLE', addingTable);
    yield takeEvery('GET_BASE_SUCCEEDED', fetchTablesByBase);
    yield takeEvery('ADD_TABLE_SUCCEEDED', addTableToBase);
    yield takeEvery('ADD_FIELD', addNewField);
    yield takeEvery('UPDATE_TABLE', changeTable);
    yield takeEvery('CSV_PARSED', changeTable);
    yield takeEvery('ADD_RECORD', addNewRecord);
    yield takeLatest('CHANGE_RECORD', changeTableRecord);
    yield takeEvery('DELETE_TABLE', removeTable);
    yield takeEvery('ADD_COMMENT', addNewComment);
    yield takeEvery('CHANGE_FIELD_TYPE', updateFieldMeta);
    yield takeEvery('CHANGE_FIELD_NAME', updateFieldMeta);
    yield takeEvery('DELETE_FIELD', removeField);
    yield takeEvery('DELETE_RECORD', removeRecord);
    yield takeEvery(['SET_ACTIVE_TAB', 'SWITCH_TABLE'], sendTableCoworker);
    yield takeEvery('FILTER_RECORDS', filterTableRecords);
    yield takeEvery('UPLOAD_FILES', uploadingFiles)
}

export default dashboardSaga;