import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as contextMenuApi from './contextMenuApi'

// worker Saga: will be fired on GET_USER_NAME_REQUESTED actions
function* fetchBase(action) {
  try {
    const contextMenu = yield call(contextMenuApi.fetchBase, action.baseId);
    yield put({type: "GET_BASE_NAME_SUCCEEDED", base: base});
  } catch (e) {
    console.log(e)
    yield put({type: "GET_BASE_NAME_FAILED", message: e.message});
  }
}


Starts fetchUser on each dispatched `GET_BASE_NAME_REQUESTED` action.
Allows concurrent fetches of user.

function* userProfileSaga() {
  yield takeEvery("GET_BASE_NAME_REQUESTED", fetchBase);
}

/*
Alternatively you may use takeLatest.

Does not allow concurrent fetches of user. If "GET_USER_NAME_REQUESTED" gets
dispatched while a fetch is already pending, that pending fetch is cancelled
and only the latest one will be run.
*/

// function* mySaga() {
//  yield takeLatest("GET_USER_NAME_REQUESTED", fetchUser);
// }

export default contextMenuSaga;