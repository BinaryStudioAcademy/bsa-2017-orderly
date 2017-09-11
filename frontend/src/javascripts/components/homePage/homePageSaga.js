import { call, put, takeEvery} from 'redux-saga/effects';
import { getTablesByIds } from '../dashboard/dashboardApi';
import R from 'ramda';
import { addBaseToTeam, updateBaseById, updateTeam,
		deleteBase, getTeamsByUserId, getBasesByTeam,
		deleteTeam, addTeam, getCollaborators, getAllUsers,
		addCollaborator, deleteCollaborator, updateCollaboratorRole, cloneBaseToTeam, addBaseToTeamSpreadSheet } from './homePageApi';

function* gettingBasesByTeam(action) {
	try {
		const payload = {};
		payload.teamId = action.teamId;
		payload.bases = yield call(getBasesByTeam, action.teamId)
		yield put( {type: 'GET_BASES_BY_TEAM_SUCCEEDED', payload} )
	} catch (err) {
		yield put({ type: 'GET_BASES_BY_TEAM_FAILED', message: err.message})
	}
}

function* addingBase(action) {
    try {
        const team = yield call(addBaseToTeam, action.teamId);
        yield put({ type: 'ADD_NEW_BASE_TO_TEAM_SUCCEEDED', team: team });
    } catch (err) {
        yield put({ type: 'ADD_NEW_BASE_TO_TEAM_FAILED', message: err.message});
    }
}


function* cloneBase(action) {
    try {
        const payload = {};
        payload.base = action.base;
        payload.teamId = action.teamId;

        let team = yield call(cloneBaseToTeam, payload);

        yield put({ type: 'ADD_NEW_BASE_TO_TEAM_SUCCEEDED', team: team});
    } catch (err) {
        yield put({ type: 'CLONE_NEW_BASE_TO_TEAM_FAILED', message: err.message});
    }
}

function* addingBaseFromSpreadsheet(action) {
    try {
    	const payload = {};
    	payload.teamId = action.teamId;
    	payload.table = Object.assign({}, action.table);
    	payload.base = action.base;
        const team = yield call(addBaseToTeamSpreadSheet, payload);
        yield put({ type: 'ADD_NEW_BASE_TO_TEAM_SUCCEEDED', team: team });
    } catch (err) {
        yield put({ type: 'ADD_NEW_BASE_TO_TEAM_FAILED', message: err.message});

    }
}

function* deleteBaseById(action) {
	try {
		const deletedBase = yield call(deleteBase, action._id)
		yield put({type: 'DELETE_BASE_SUCCESS', deletedBase})
	} catch (err) {
		yield put({type: 'DELETE_BASE_FAILED', message: err.message})
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

function* getTeams(action) {
	try {
		const teams = yield call(getTeamsByUserId, action.userId);
		yield put({ type: 'GET_TEAMS_BY_USER_SUCCEEDED', teams: teams });
	} catch (err) {
		yield put({ type: 'GET_TEAMS_BY_USER_FAILED', message: err.message});
	}
}

function* updatingTeam(action) {
	try {
		const team = yield call(updateTeam, action.data, action.teamId);
		yield put({ type: 'UPDATE_TEAM_SUCCEEDED', team: team });
	} catch (err) {
		yield put({ type: 'UPDATE_TEAM_FAILED', message: err.message });
	}
}

function* deletingTeam(action) {
	try {
		const deletedTeam = yield call(deleteTeam, action.teamId);
		yield put({ type: 'DELETE_TEAM_SUCCEEDED', team: deletedTeam })
	} catch (err) {
		yield put({ type: 'DELETE_TEAM_FAILED', message: err.message })
	}
}

function* addingTeam(action) {
	try {
		const addedTeam = yield call(addTeam, action.userId);
		yield put({ type: 'ADD_NEW_TEAM_SUCCEEDED', team: addedTeam});
	} catch (err) {
		yield put({ type: 'ADD_NEW_TEAM_FAILED', message: err.message });
	}
}

function* gettingCollaborators(action) {
	try {
		const payload = {};
		payload.teamId = action.teamId;
		payload.collaborators = yield call(getCollaborators, action.usersIds);
		yield put({ type: 'GET_COLLABORATORS_SUCCEEDED', payload });
	} catch (err) {
		yield put ({ type: 'GET_COLLABORATORS_FAILED', message: err.message })
	}
}

function* gettingUsers() {
	try {
		const users = yield call(getAllUsers);
		yield put({ type: 'GET_ALL_USERS_SUCCEEDED', users: users })
	} catch (err) {
		yield put({ type: 'GET_ALL_USERS_FAILED', message: err.message});
	}
}

function* addingCollaborator(action) {
	try {
		const addObject = {
			teamId: action.teamId,
			userId: action.userId,
			role: action.role,
			message: action.message
		}
		const team = yield call(addCollaborator, addObject)
		yield put({ type: 'UPDATE_TEAM_SUCCEEDED', team: team })
		yield put({
			type: 'GET_COLLABORATORS',
			teamId: action.teamId,
			usersIds: R.pluck('userId', team.collaborators)
		})
	} catch (err) {
		yield put({ type: 'UPDATE_TEAM_FAILED', message: err.message});
	}
}

function* deletingCollaborators(action) {
	try {
		const deleteObject = {
			teamId: action.teamId,
			userId: action.userId
		}
		const team = yield call(deleteCollaborator, deleteObject);
		yield put({ type: 'UPDATE_TEAM_SUCCEEDED', team: team })
	} catch (err) {
		yield put({ type: 'UPDATE_TEAM_FAILED', message: err.message});
	}
}

function* updatingCollaboratorRole(action) {
	try {
		const updatingObject = {
			teamId: action.teamId,
			userId: action.userId,
			role: action.role
		}
		const team = yield call(updateCollaboratorRole, updatingObject)
		yield put({ type: 'UPDATE_TEAM_SUCCEEDED', team: team })
	} catch (err) {
		yield put({ type: 'UPDATE_TEAM_FAILED', message: err.message});
	}
}

function* homePageSaga() {
    yield takeEvery('ADD_NEW_BASE', addingBase);
    yield takeEvery('CHANGE_BASE_PARAM', updateBase);
    yield takeEvery('DELETE_BASE', deleteBaseById);
    yield takeEvery('GET_TEAMS_BY_USER', getTeams);
    yield takeEvery('GET_BASES_BY_TEAM', gettingBasesByTeam);
    yield takeEvery('UPDATE_TEAM', updatingTeam);
    yield takeEvery('DELETE_TEAM', deletingTeam);
    yield takeEvery('ADD_NEW_TEAM', addingTeam);
    yield takeEvery('GET_COLLABORATORS', gettingCollaborators);
    yield takeEvery('GET_ALL_USERS', gettingUsers);
	yield takeEvery('ADD_COLLABORATOR', addingCollaborator);
	yield takeEvery('DELETE_COLLABORATOR', deletingCollaborators);
	yield takeEvery('UPDATE_COLLABORATOR_ROLE', updatingCollaboratorRole);
	yield takeEvery('CLONE_BASE', cloneBase);
	yield takeEvery('CSV_PARSED_SPREADSHEET', addingBaseFromSpreadsheet);
}

export default homePageSaga;