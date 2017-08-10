import { call, put, takeEvery} from 'redux-saga/effects';
import * as signUpApi from './signUpApi';
import { SIGN_UP_ACTION } from "./signUpActions";

// worker Saga: will be fired on GET_USER_NAME_REQUESTED actions
function* fetchUser(action) {
    console.log(action);
    try {
        const credentials = yield call(signUpApi.fetchSignUp, action);
        yield put({type: "SIGN_UP_SUCCESS", credentials: credentials});
    } catch (e) {
        console.log(e);
        yield put({type: "SIGN_UP_FAILED", message: e.message});
    }
}

/*
Starts fetchUser on each dispatched `GET_USER_NAME_REQUESTED` action.
Allows concurrent fetches of user.
*/
function* signUpSaga() {
    yield takeEvery(SIGN_UP_ACTION, fetchUser);
}

export default signUpSaga;