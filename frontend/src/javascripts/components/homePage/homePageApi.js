import axios from 'axios';
import R from 'ramda';

const url = 'http://localhost:2020/api';

const addBaseToTeam = (teamId) =>
	axios.post(url + '/team/' + teamId + '/base')
		.then((response) => response.data)
		.catch(R.tap(console.error));

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

const updateTeam = (data, teamId) =>
	axios.put(url + '/team/' + teamId, data)
		.then((response) => response.data)
		.catch(R.tap(console.error))

const deleteTeam = (teamId) =>
	axios.delete(url + '/team/' + teamId)
		.then((response) => response.data)
		.catch(R.tap(console.error))

export {
	addBaseToTeam,
	updateTeam,
	deleteTeam,
	getBasesByTeam,
    updateBaseById,
    deleteBase,
	getTeamsByUserId
};