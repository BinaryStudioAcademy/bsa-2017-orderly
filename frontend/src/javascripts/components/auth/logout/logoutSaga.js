import { LOGOUT } from './logoutActions';
import { call, takeEvery } from 'redux-saga/effects';
import { logoutService } from './logoutService';

function* logout() {
    yield call(logoutService.logout);
}

function* logoutSaga() {
    yield takeEvery(LOGOUT, logout);
}

export default logoutSaga;