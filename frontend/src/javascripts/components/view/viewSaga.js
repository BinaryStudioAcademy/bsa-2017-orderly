import {call, put, takeEvery} from 'redux-saga/effects';
import {ADD_FIELD} from "./viewActions";
import {addFieldApi} from './viewApi';

// function* getTableFields(action) {
//     try {
//         const fields = yield call(getFieldsApi, action.tableId);
//         console.log(fields);
//     } catch (err) {
//         yield put({type: 'GET_FIELDS_FAILED', message: err.message});
//     }
// }

function* addNewField(action) {
    try {
        const result = yield call(addFieldApi, action._id);
    } catch (err) {
        yield put({type: 'ADD_COLUMN_FAILED', message: err.message});
    }
}

function* viewSaga() {
    yield takeEvery(ADD_FIELD, addNewField);
}

export default viewSaga;