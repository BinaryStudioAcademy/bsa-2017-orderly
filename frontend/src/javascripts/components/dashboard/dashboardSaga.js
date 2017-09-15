import {call, put, takeEvery, select, takeLatest} from 'redux-saga/effects';
import {
    getTablesByIds, getBase, addTable, addFieldsToTable, deleteFile,
    updateBaseByNewTable, addRecord, updateTable, deleteTable, updateField,
    deleteFieldRecords, deleteRecord, filterRecords, uploadFile, addView, deleteView,
    removeFilter, addFilter, updateFilter, getTableById, updateKanban, removeAllFilters,
    getMembersByBaseId, getTableView, addSort
} from './dashboardApi';
import {emitTableCoworker, emitSwitchTableCoworker, disconnect} from '../../app/socket';
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
        if (R.isNil(action.payload.isWillActive)) {
            yield put({type: 'SET_ACTIVE_TAB', tableId: action.payload.table._id});
            browserHistory.push(`/dashboard/${base._id}/${action.payload.table._id}`);
        }
    } catch (err) {
        yield put({type: 'ADD_TABLE_TO_BASE_FAILED', message: err.message});
    }
}

function* addNewField(action) {
    try {
        const payload = {};
        payload.tableId = action.tableId;
        payload.currentViewId = action.currentViewId;
        payload.table = yield call(addFieldsToTable, payload);
        yield put({type: 'ADD_FIELD_SUCCEEDED', payload});
    } catch (err) {
        yield put({type: 'ADD_FIELD_FAILED', message: err});
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
        yield call(emitTableCoworker, userProfileReducer.user, action.tableId);
    } catch (err) {
        yield put({type: 'SEND_TABLE_COWORKER_FAILED', message: err.message});
    }
}

function* sendSwitchTableCoworker(action) {
    try {
        const userProfileReducer = yield select(getUserProfileReducer);
        yield call(emitSwitchTableCoworker, userProfileReducer.user, action.tableId);
    } catch (err) {
        yield put({type: 'SEND_TABLE_COWORKER_FAILED', message: err.message});
    }
}

function* disconnectSocket() {
    try {
        yield call(disconnect);
    } catch (err) {
        yield put({type: 'DISCONNECT_SOCKET_FAILED', message: err.message});
    }
}

function* filterTableRecords(action) {
    try {
        const filtered = yield call(filterRecords, action);
        yield put({
            type: 'FILTER_TABLE_SUCCEEDED',
            table: filtered.data.table,
            filteredRecords: filtered.data.filteredRecords
        });
    } catch (err) {
        yield put({type: 'FILTER_TABLE_FAILED', message: err.message});
    }
}

function* addTableFilter(action) {
    try {
        const updatedFilters = yield call(addFilter, action);
        yield put({
            type: 'ADD_FILTER_SUCCEEDED',
            table: updatedFilters.data,
        });
    } catch (err) {
        yield put({type: 'ADD_FILTER_FAILED', message: err.message});
    }
}

function* updateTableFilter(action) {
    try {
        const updatedFilters = yield call(updateFilter, action);
        yield put({
            type: 'FILTER_TABLE_SUCCEEDED',
            table: updatedFilters.data,
        });
    } catch (err) {
        yield put({type: 'FILTER_TABLE_FAILED', message: err.message});
    }
}

function* removeTableFilter(action) {
    try {
        const updatedFilters = yield call(removeFilter, action);
        yield put({
            type: 'REMOVE_FILTER_SUCCEEDED',
            table: updatedFilters.data,
        });
    } catch (err) {
        yield put({type: 'REMOVE_FILTER_FAILED', message: err.message});
    }
}

function* removeAllTableFilters(action) {
    try {
        const updatedFilters = yield call(removeAllFilters, action);
        yield put({
            type: 'REMOVE_ALL_FILTERS_SUCCEEDED',
            table: updatedFilters.data,
        });
    } catch (err) {
        yield put({type: 'REMOVE_ALL_FILTERS_FAILED', message: err.message});
    }
}

function* uploadingFiles(action) {
    try {
        const changedTable = yield call(uploadFile, action);
        yield put({type: 'RENAME_TABLE_SUCCEEDED', changedTable});
    } catch (err) {
        yield put({type: 'UPLOAD_FILES_FAILED', message: err.message});
    }
}

function* deletingFile(action) {
    try {
        const changedTable = yield call(deleteFile, action);
        yield put({type: 'RENAME_TABLE_SUCCEEDED', changedTable});
    } catch (err) {
        yield put({type: 'DELETE_FILE_FAILED', message: err.message});
    }
}

function* addTableView(action) {
    try {
        const payload = {};
        payload.tableId = action.tableId;
        payload.viewType = action.viewType;
        payload.table = yield call(addView, payload);
        yield put({type: 'ADD_VIEW_SUCCEEDED', ...payload});
    } catch (err) {
        yield put({type: 'ADD_VIEW_FAILED', message: err.message});
    }
}

function* deleteTableView(action) {
    try {
        const table = yield call(deleteView, action);
        yield put({type: 'DELETE_VIEW_SUCCEEDED', table});
    } catch (err) {
        yield put({type: 'DELETE_VIEW_FAILED', message: err.message});
    }
}

function* updatingKanban(action) {
    try {
        yield call(updateKanban, action.kanban);
        const changedTable = yield call(getTableById, action.tableId);
        yield put({type: 'RENAME_TABLE_SUCCEEDED', changedTable});
    } catch (err) {
        yield put({type: 'UPDATE_KANBAN_VIEW_FAILED', message: err.message});
    }
}

function* gettingMembersByBaseId(action) {
    try {
        const members = yield call(getMembersByBaseId, action.baseId);
        yield put({type: 'GET_MEMBERS_BY_BASE_ID_SUCCESSED', members});
    } catch (err) {
        yield put({type: 'GET_MEMBERS_BY_BASE_ID_FAILED', message: err.message});
    }
}

function* changeTableView(action) {
    try {
        const payload = {};
        payload.tableId = action.tableId;
        payload.viewId = action.viewId;
        payload.viewType = action.viewType;
        payload.table = yield call(getTableView, payload);
        yield put({type: 'CHANGE_VIEW_SUCCEEDED', payload});
    } catch (err) {
        yield put({type: 'CHANGE_VIEW_FAILED', message: err});
    }
}

function* addTableSort(action) {
    try {
        const updatedSort = yield call(addSort, action);
        yield put({
            type: 'ADD_SORT_SUCCEEDED',
            table: updatedSort.data,
        });
    } catch (err) {
        yield put({type: 'ADD_SORT_FAILED', message: err.message});
    }
}

function* dashboardSaga() {
    yield takeEvery('GET_BASE', fetchBaseById);
    yield takeEvery('ADD_TABLE', addingTable);
    yield takeEvery('ADD_VIEW', addTableView);
    yield takeEvery('DELETE_VIEW', deleteTableView);
    yield takeEvery('GET_BASE_SUCCEEDED', fetchTablesByBase);
    yield takeEvery('ADD_TABLE_SUCCEEDED', addTableToBase);
    yield takeEvery('ADD_FIELD', addNewField);
    yield takeEvery('UPDATE_TABLE', changeTable);
    yield takeEvery('CSV_PARSED', changeTable);
    yield takeEvery('CHANGE_FIELD_TYPE', changeTable);
    yield takeEvery('ADD_RECORD', addNewRecord);
    yield takeLatest('CHANGE_RECORD', changeTableRecord);
    yield takeEvery('DELETE_TABLE', removeTable);
    yield takeEvery('ADD_COMMENT', addNewComment);
    yield takeEvery('CHANGE_FIELD_TYPE', updateFieldMeta);
    yield takeEvery('CHANGE_FIELD_NAME', updateFieldMeta);
    yield takeEvery('CHANGE_FIELD_DISPLAY', updateFieldMeta);
    yield takeEvery('CHANGE_FIELD_OPTIONS', updateFieldMeta);
    yield takeEvery('DELETE_FIELD', removeField);
    yield takeEvery('DELETE_RECORD', removeRecord);
    yield takeEvery('SET_ACTIVE_TAB', sendTableCoworker);
    yield takeEvery('CHANGE_VIEW', changeTableView);
    yield takeEvery(['SWITCH_TABLE', 'SET_ACTIVE_TAB'], sendSwitchTableCoworker);
    yield takeEvery('DISCONNECT_SOCKET', disconnectSocket);
    yield takeEvery('FILTER_TABLE', filterTableRecords);
    yield takeEvery('ADD_FILTER', addTableFilter);
    yield takeEvery('UPDATE_FILTER', updateTableFilter);
    yield takeEvery('REMOVE_FILTER', removeTableFilter);
    yield takeEvery('REMOVE_ALL_FILTERS', removeAllTableFilters);
    yield takeEvery('UPLOAD_FILES', uploadingFiles);
    yield takeEvery('DELETE_FILE', deletingFile);
    yield takeEvery('UPDATE_KANBAN_VIEW', updatingKanban);
    yield takeEvery('GET_MEMBERS_BY_BASE_ID', gettingMembersByBaseId);
    yield takeEvery('ADD_SORT', addTableSort);
}

export default dashboardSaga;