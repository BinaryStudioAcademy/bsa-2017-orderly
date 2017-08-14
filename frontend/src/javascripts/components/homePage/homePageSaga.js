import { call, put, takeEvery} from 'redux-saga/effects';
import * as addBaseApi from './homePageApi';
import { browserHistory } from 'react-router';
import { addBase } from './homePageApi';


function* addingBase(action) {
    try {
        const payload = {};
        payload.baseId = action.baseId;
        payload.base = yield call(addBase, action.name);
        yield put({ type: 'ADD_NEW_BASE_SUCCESS', payload });
    } catch (err) {
        yield put({ type: 'ADD_NEW_BASE_FAILED', message: err.message});
    }
}

function* addBaseSaga() {
    yield takeEvery('ADD_NEW_BASE', addingBase);
}

export default addBaseSaga;