import R from 'ramda';

const setName = (activeModal) => {
	switch (activeModal) {
		case 'settings': return 'Team settings'
		case 'rename': return 'Rename team'
		case 'delete': return 'Delete team'
	}
}

const createCollaboratorsObject = (teamId, users) => {
	let result = {};
	R.forEach( user => {
		if (!result[teamId]) result[teamId] = {}
		result[teamId][user._id] = R.dissoc('_id', user)
	})(users)
	return result
}

const getRolesColor = (role) => {
	switch (role) {
		case 'owner': return {color: '#20c933'}
		case 'creator': return {color: '#4a20cb'}
		case 'editOnly': return {color: '#c9830e'}
		case 'readOnly': return {color: '#c9082a'}
	}
}

export {
	setName,
	createCollaboratorsObject,
	getRolesColor
}