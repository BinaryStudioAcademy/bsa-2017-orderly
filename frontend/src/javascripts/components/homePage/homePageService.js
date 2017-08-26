import R from 'ramda';

const setName = (activeModal) => {
	switch (activeModal) {
		case 'settings': return 'Team settings'
		case 'rename': return 'Rename team'
		case 'delete': return 'Delete team'
	}
}

const createCollaboratorsObject = (teamId, users) => {
	let result;
	R.forEach( user => {
		result = R.assocPath([`${teamId}`, `${user._id}`], R.dissoc('_id', user), {})
	})(users)
	return result
}

export {
	setName,
	createCollaboratorsObject
}