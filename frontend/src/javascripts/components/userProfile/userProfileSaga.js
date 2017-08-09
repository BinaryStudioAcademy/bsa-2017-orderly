import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as userApi from './userApi'

// worker Saga: will be fired on GET_USER_NAME_REQUESTED actions
function* fetchUser(action) {
	try {
		const user = yield call(userApi.fetchUser, action.userId);
		yield put({type: "GET_USER_NAME_SUCCEEDED", user: user});
	} catch (e) {
		console.log(e)
		yield put({type: "GET_USER_NAME_FAILED", message: e.message});
	}
}

/*
Starts fetchUser on each dispatched `GET_USER_NAME_REQUESTED` action.
Allows concurrent fetches of user.
*/
function* userProfileSaga() {
	yield takeEvery("GET_USER_NAME_REQUESTED", fetchUser);
}

/*
Alternatively you may use takeLatest.

Does not allow concurrent fetches of user. If "GET_USER_NAME_REQUESTED" gets
dispatched while a fetch is already pending, that pending fetch is cancelled
and only the latest one will be run.
*/

// function* mySaga() {
// 	yield takeLatest("GET_USER_NAME_REQUESTED", fetchUser);
// }

export default userProfileSaga;