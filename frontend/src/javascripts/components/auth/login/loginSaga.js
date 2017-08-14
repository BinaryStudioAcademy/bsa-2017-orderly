import { LOGIN_USER, LOGIN_USER_RESPONSE, LOGIN_USER_ERROR, REDIRECT_LOGGED_IN_USER } from './loginActions';
import { call, put, takeEvery } from 'redux-saga/effects';
import { login } from './loginApi';
import { loginService } from './loginService';

function* fetchLogin(action) {
    try {
        const response = yield call(login, {email: action.email, password: action.password});
        yield put({ type: LOGIN_USER_RESPONSE, data: response });
        yield call(loginService.login, response);
    } catch (err) {
        console.warn(err);
        yield put({ type: LOGIN_USER_ERROR, message: err.message });
    }
}

function* redirectLoggedInUser() {
    yield call(loginService.redirectLoggedInUser);
}

function* loginSaga() {
    yield takeEvery(LOGIN_USER, fetchLogin);
    yield takeEvery(REDIRECT_LOGGED_IN_USER, redirectLoggedInUser);
}

export default loginSaga;