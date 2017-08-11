import { all, fork } from 'redux-saga/effects';
import userProfileSaga from '../components/userProfile/userProfileSaga';
import dashboardSaga from '../components/dashboard/dashboardSaga';
import signUpSaga from '../components/auth/login/signUp/signUpSaga';
import signInSaga from '../components/auth/login/signIn/signInSaga';

export default function* root() {
    yield all([
        fork(signUpSaga),
        fork(signInSaga),
        fork(userProfileSaga),
        fork(dashboardSaga)
    ]);
}