import {call, put, takeEvery} from 'redux-saga/effects';
import {ADD_COLUMN} from "./grid/gridActions";
import {addColumn} from './viewApi';

function* addNewColumn(action) {
    try {
        const result = yield call(addColumn, action._id);
    } catch (err) {
        yield put({type: 'ADD_COLUMN_FAILED', message: err.message});
    }
}

function* viewSaga() {
    yield takeEvery(ADD_COLUMN, addNewColumn);
}

export default viewSaga;