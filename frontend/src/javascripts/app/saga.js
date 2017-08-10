import { all, fork } from 'redux-saga/effects';
import userProfileSaga from '../components/userProfile/userProfileSaga'; 

export default function* root() {
  yield all([
    fork(userProfileSaga)
  ])
}