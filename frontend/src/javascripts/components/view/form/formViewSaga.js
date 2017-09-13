import { call, put, takeEvery} from 'redux-saga/effects';
import { updateView, getTableById, getViewById, updateTableFromForm } from './formViewAPI';

function* updateForm(action) {
    try {
        const form = yield call(updateView, action);
        yield put( {type: 'UPDATE_FORM_SUCCEEDED', form: form.data} )
    } catch (err) {
        yield put({ type: 'UPDATE_FORM_FAILED', message: err.message})
    }
}

function* getTableAndView(action) {
    try {
        const payload = {};
        payload.table = yield call(getTableById, action);
        payload.view =  yield call(getViewById, action);
        yield put({type: 'GET_CURRENT_TABLE_AND_VIEW_SUCCEEDED', payload});
    } catch (err) {
        yield put({type: 'GET_CURRENT_TABLE_AND_VIEW_FAILED', message: err.message});
    }
}


function* addNewRecordFromForm(action) {
    try {
        const table = yield call(updateTableFromForm, action);
        yield put({type: 'UPDATE_TABLE_FROM_FORM_SUCCEEDED', table});
    } catch (err) {
        yield put({type: 'UPDATE_TABLE_FROM_FORM_FAILED', message: err.message});
    }
}

function* formSaga() {
    yield takeEvery('INCLUDE_FIELD', updateForm);
    yield takeEvery('EXCLUDE_FIELD', updateForm);
    yield takeEvery('INCLUDE_ALL', updateForm);
    yield takeEvery('EXCLUDE_ALL', updateForm);
    yield takeEvery('CHANGE_FORM_NAME', updateForm);
    yield takeEvery('CHANGE_FORM_DESCRIPTION', updateForm);
    yield takeEvery('GET_CURRENT_TABLE_AND_VIEW', getTableAndView);
    yield takeEvery('UPDATE_TABLE_BY_FORM_DATA', addNewRecordFromForm);
}

export default formSaga;