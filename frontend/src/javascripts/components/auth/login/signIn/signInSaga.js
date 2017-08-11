import { LOGIN_USER, LOGIN_USER_RESPONSE, LOGIN_USER_ERROR } from './signInActions';
import { call, put, takeEvery } from 'redux-saga/effects';
import { login } from './signInApi';
import { signInService } from './signInService';

function* fetchLogin(action) {
    try {
        const response = yield call(login, {email: action.email, password: action.password});
        yield put({ type: LOGIN_USER_RESPONSE, data: response });
        yield call(signInService.tryLogin, response);
    } catch (err) {
        console.warn(err);
        yield put({type: LOGIN_USER_ERROR, message: err.message});
    }
}

function* loginSaga() {
    yield takeEvery(LOGIN_USER, fetchLogin);
}

export default loginSaga;