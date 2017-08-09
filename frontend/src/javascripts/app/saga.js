import { all, fork } from 'redux-saga/effects';
import userProfileSaga from '../components/userProfile/userProfileSaga';
import dashboardSaga from '../components/dashboard/dashboardSaga';

export default function* root() {
    yield all([
        fork(userProfileSaga),
        fork(dashboardSaga)
    ]);
}