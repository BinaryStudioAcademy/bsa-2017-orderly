import { all, fork } from 'redux-saga/effects';
import userProfileSaga from '../components/userProfile/userProfileSaga';
import dashboardSaga from '../components/dashboard/dashboardSaga';
import signUpSaga from '../components/auth/signUp/signUpSaga';
import loginSaga from '../components/auth/login/loginSaga';
import logoutSaga from '../components/auth/logout/logoutSaga';
import viewSaga from '../components/view/viewSaga';

export default function* root() {
    yield all([
        fork(signUpSaga),
        fork(loginSaga),
        fork(logoutSaga),
        fork(userProfileSaga),
        fork(dashboardSaga),
        fork(viewSaga),
    ]);
}