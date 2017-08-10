import { all, fork } from 'redux-saga/effects';
import userProfileSaga from '../components/userProfile/userProfileSaga';
import dashboardSaga from '../components/dashboard/dashboardSaga';
import signUpSaga from '../components/login/signUp/signUpSaga';

export default function* root() {
    yield all([
        fork(signUpSaga),
        fork(userProfileSaga),
        fork(dashboardSaga),
    ]);
}