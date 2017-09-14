import { LOGOUT } from './logoutActions';
import { call, takeEvery, select } from 'redux-saga/effects';
import { logoutService } from './logoutService';
import { disconnect } from '../../../app/socket';

const getUserProfileReducer = (state) => state.userProfile;

function* logout() {
    const userProfileReducer = yield select(getUserProfileReducer);
    yield call(disconnect, userProfileReducer.user);
    yield call(logoutService.logout);
}

function* logoutSaga() {
    yield takeEvery(LOGOUT, logout);
}

export default logoutSaga;