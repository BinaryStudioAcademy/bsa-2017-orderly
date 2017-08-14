import { call, put, takeEvery} from 'redux-saga/effects';
import * as signUpApi from './signUpApi';
import { browserHistory } from 'react-router';
import { SIGN_UP_ACTION, SIGN_UP_PROCESS, SIGN_UP_ERROR } from "./signUpActions";

function* fetchUser(action) {
    try {
        const signUp = yield call(signUpApi.fetchSignUp, action);
        yield put({type: SIGN_UP_PROCESS, result: signUp});
        if (!signUp.success) {
            yield put({type: SIGN_UP_ERROR, errors: signUp.errors, message: signUp.message});
        } else {
            browserHistory.push('/');
        }
    } catch (e) {
        yield put({type: SIGN_UP_ERROR, message: e.message});
    }
}

function* signUpSaga() {
    yield takeEvery(SIGN_UP_ACTION, fetchUser);
}

export default signUpSaga;