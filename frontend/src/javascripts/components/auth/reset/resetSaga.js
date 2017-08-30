import { RESET_PASSWORD, RESET_PASSWORD_ERROR, RESET_PASSWORD_RESPONSE, REDIRECT_USER } from './resetActions';
import { call, put, takeEvery } from 'redux-saga/effects';
import { reset } from './resetApi';
import { loginService } from '../login/loginService';

function* fetchResetPassword(action) {
    try {
        const response = yield call(reset, {token: action.token, password: action.password});
        yield put({ type: RESET_PASSWORD_RESPONSE, data: response });
        yield call(loginService.login, response);
    } catch (err) {
        console.warn(err);
        yield put({ type: RESET_PASSWORD_ERROR, message: err.message });
    }
}

function* redirectUser() {
    yield call(loginService.redirectLoggedInUser);
}

function* resetSaga() {
    yield takeEvery(RESET_PASSWORD, fetchResetPassword);
    yield takeEvery(REDIRECT_USER, redirectUser);
}

export default resetSaga;