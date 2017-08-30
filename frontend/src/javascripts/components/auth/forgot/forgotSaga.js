import { FORGOT_PASSWORD, FORGOT_PASSWORD_ERROR, FORGOT_PASSWORD_RESPONSE } from './forgotActions';
import { call, put, takeEvery } from 'redux-saga/effects';
import { forgot } from './forgotApi';

function* fetchForgotPassword(action) {
    try {
        const response = yield call(forgot, {email: action.email});
        yield put({ type: FORGOT_PASSWORD_RESPONSE, data: response });
    } catch (err) {
        console.warn(err);
        yield put({ type: FORGOT_PASSWORD_ERROR, error: err.error });
    }
}

function* loginSaga() {
    yield takeEvery(FORGOT_PASSWORD, fetchForgotPassword);
}

export default loginSaga;