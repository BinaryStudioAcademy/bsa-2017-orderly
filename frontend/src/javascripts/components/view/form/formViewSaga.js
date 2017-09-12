import { call, put, takeEvery} from 'redux-saga/effects';

import { updateView } from './formViewAPI';

function* updateForm(action) {
    try {
        const form = yield call(updateView, action);
        yield put( {type: 'CHANGE_FIELD_STATUS_SUCCEEDED', form: form} )
    } catch (err) {
        yield put({ type: 'CHANGE_FIELD_STATUS_FAILED', message: err.message})
    }
}

function* formSaga() {
    yield takeEvery('INCLUDE_FIELD', updateForm);
    yield takeEvery('EXCLUDE_FIELD', updateForm);
    yield takeEvery('INCLUDE_ALL', updateForm);
    yield takeEvery('EXCLUDE_ALL', updateForm);
}

export default formSaga;