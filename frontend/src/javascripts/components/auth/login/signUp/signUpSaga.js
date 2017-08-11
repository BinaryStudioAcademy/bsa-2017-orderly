import { call, put, takeEvery} from 'redux-saga/effects';
import * as signUpApi from './signUpApi';
import { SIGN_UP_ACTION, SIGN_UP_PROCESS } from "./signUpActions";

function* fetchUser(action) {
    try {
        const signUp = yield call(signUpApi.fetchSignUp, action);
        yield put({type: SIGN_UP_PROCESS, result: signUp});
    } catch (e) {
        console.log(e);
        yield put({type: "SIGN_UP_FAILED", message: e.message});
    }
}

function* signUpSaga() {
    yield takeEvery(SIGN_UP_ACTION, fetchUser);
}

export default signUpSaga;