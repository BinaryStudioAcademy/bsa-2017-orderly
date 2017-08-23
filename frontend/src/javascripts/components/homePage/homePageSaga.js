import {call, put, takeEvery} from 'redux-saga/effects';
import {addBase, getBases, updateBaseById, deleteBase} from './homePageApi';

function* getAllBases(action) {
    try {
        const bases = yield call(getBases);
        yield put({type: 'GET_BASES_SUCCESS', bases: bases});
    } catch (err) {
        yield put({type: 'GET_BASES_SUCCESS_FAILED', message: err.message});
    }
}

function* addingBase(action) {
    try {
        const payload = {};
        payload.base = yield call(addBase);
        yield put({type: 'ADD_NEW_BASE_SUCCESS', payload});
    } catch (err) {
        yield put({type: 'ADD_NEW_BASE_FAILED', message: err.message});
    }
}

function* deleteBaseById(action) {
    const droped = yield call(deleteBase, action._id);
    try {
        yield put({type: 'DELETE_BASE_SUCCESS', droped});
    } catch (err) {
        yield put({type: 'DELETE_BASE_SUCCESS_FAILED', message: err.message});
    }
}

function* updateBase(action) {
    const baseNeed = yield call(updateBaseById, action._id, action.typeAction, action.value);
    try {
        yield put({type: 'CHANGE_BASE_PARAM_SUCCESS', base: baseNeed});
    } catch (err) {
        yield put({type: 'CHANGE_BASE_PARAM_FAILED', message: err.message});
    }
}

function* homePageSaga() {
    yield takeEvery('ADD_NEW_BASE', addingBase);
    yield takeEvery('GET_BASES', getAllBases);
    yield takeEvery('CHANGE_BASE_PARAM', updateBase);
    yield takeEvery('DELETE_BASE', deleteBaseById);
}

export default homePageSaga;