import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as contextMenuApi from './contextMenuApi'

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

export default contextMenuSaga;