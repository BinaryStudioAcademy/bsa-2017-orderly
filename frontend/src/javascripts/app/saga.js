import { all, fork } from 'redux-saga/effects';
import userProfileSaga from '../components/userProfile/userProfileSaga';
import dashboardSaga from '../components/dashboard/dashboardSaga';
import loginSaga from '../components/auth/login/loginSaga';
import logoutSaga from '../components/auth/logout/logoutSaga';

export default function* root() {
    yield all([
        fork(userProfileSaga),
        fork(dashboardSaga),
        fork(loginSaga),
        fork(logoutSaga)
    ]);
}