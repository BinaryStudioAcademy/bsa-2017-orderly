import {call, put, takeEvery} from 'redux-saga/effects';
import {ADD_FIELD} from "./viewActions";
import {addFieldApi} from './viewApi';

// function* addNewField(action) {
//     try {
//         const result = yield call(addFieldApi);
//         yield put({type: 'ADD_FIELD_SUCCEED', fields: result.fields});
//     } catch (err) {
//         yield put({type: 'ADD_FIELD_FAILED', message: err.message});
//     }
// }

function* viewSaga() {
    // yield takeEvery(ADD_FIELD, addNewField);
}

export default viewSaga;