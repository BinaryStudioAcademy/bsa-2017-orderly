import axios from 'axios';
import R from 'ramda';

const url = 'http://localhost:2020/api';

const addBaseToTeam = (teamId) =>
	axios.post(url + '/team/' + teamId + '/base')
		.then((response) => response.data)
		.catch(R.tap(console.error));

const cloneBaseToTeam = (payload) =>
	axios.post(url + '/team/' + payload.teamId + '/baseClone', payload)
		.then((response) => response.data)
		.catch(R.tap(console.error))

const addBaseToTeamSpreadSheet = (payload) =>
	axios.post(url + '/team/' + payload.teamId + '/spreadsheet', payload)
		.then((response) => response.data)
		.catch(R.tap(console.error))

const deleteBase = (_id) =>
    axios.delete(url + '/base/' + _id)
        .then((response) => response.data)
        .catch(R.tap(console.error));

const updateBaseById = (_id, typeAction, value) =>
    axios.put(url + '/base/' + _id, {[typeAction]: value})
        .then((response) => response.data)
        .catch(R.tap(console.error));

const getTeamsByUserId = (_id) =>
    axios.get(url + '/team/user/' + _id)
	    .then((response) => response.data)
	    .catch(R.tap(console.error));

const getBasesByTeam = (teamId) =>
	axios.get(url + '/team/' + teamId + '/base')
		.then((response) => response.data)
		.catch(R.tap(console.error))

const getCollaborators = (usersIds) =>
	axios.get(url + '/user/ids/' + usersIds.join(':'))
		.then((response) => response.data)
		.catch(R.tap(console.error))

const updateTeam = (data, teamId) =>
	axios.put(url + '/team/' + teamId, data)
		.then((response) => response.data)
		.catch(R.tap(console.error))


const deleteTeam = (teamId) =>
	axios.delete(url + '/team/' + teamId)
		.then((response) => response.data)
		.catch(R.tap(console.error))

const getAllUsers = () =>
	axios.get(url + '/user')
		.then(response => response.data)
		.catch(R.tap(console.error))

const addCollaborator = (data) =>
	axios.put(url + '/team/' + data.teamId + '/collaborators/',
				R.dissoc('teamId', data))
		.then(response => response.data)
		.catch(R.tap(console.error))

const deleteCollaborator = ({ teamId, userId }) =>
	axios.delete(url + '/team/' + teamId + '/collaborators/' + userId)
		.then(response => response.data)
		.catch(R.tap(console.error))

const updateCollaboratorRole = ({ teamId, userId, role }) =>
	axios.put(url + '/team/' + teamId + '/collaborators/' + userId,
				{role: role})
		.then(response => response.data)
		.catch(R.tap(console.error))

const addTeam = (userId) =>
	axios.post(url + '/team/', { owner: userId,
											collaborators: [
												{
													userId: userId,
													role: 'owner'
												}
											]
										})
		.then((response) => response.data)
		.catch(R.tap(console.error))

export {
	addBaseToTeam,
	updateTeam,
	deleteTeam,
	getAllUsers,
	addTeam,
	getBasesByTeam,
    updateBaseById,
    deleteBase,
	getCollaborators,
	deleteCollaborator,
	updateCollaboratorRole,
	addCollaborator,
	getTeamsByUserId,
	cloneBaseToTeam,
	addBaseToTeamSpreadSheet
};