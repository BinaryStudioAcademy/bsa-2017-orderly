import { call, put, takeEvery} from 'redux-saga/effects';
import * as addBaseApi from './homePageApi';
import { browserHistory } from 'react-router';

function* addingBase(action) {
    try {
        const payload = {};
        //payload.baseId = action.baseId;
        payload.base = yield call(addBase, action.name);
        yield put({ type: 'ADD_NEW_BASE', payload });
    } catch (err) {
        yield put({ type: 'ADD_NEW_BASE_FAILED', message: err.message});
    }
}

// function* fetchBase(action) {
//     try {
//         const addBase = yield call(addBaseApi.fetchAddBase, action);
//         yield put({type: 'ADD_NEW_BASE', result: addBase});
//         // if (!addBase.success) {
//         //     yield put({type: SIGN_UP_ERROR, errors: signUp.errors, message: signUp.message});
//         // } 
//     } catch (e) {
//         yield put({type: SIGN_UP_ERROR, message: e.message});
//     }
// }

function* addBaseSaga() {
    yield takeEvery(ADD_NEW_BASE, fetchBase);
}

export default addBaseSaga;