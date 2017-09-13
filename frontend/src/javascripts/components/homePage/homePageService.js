import R from 'ramda';

const ROLES = ['owner', 'editor', 'readOnly']

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

const createRolesObject = (members) => {
	if (!members) return
	let result = {}
	R.forEach( member => {
		result[member.userId] = {role: member.role}
	})(members)
	return result
}

const getRolesColor = (role) => {
	switch (role) {
		case 'owner': return {color: '#20c933'}
		case 'editor': return {color: '#c9830e'}
		case 'readOnly': return {color: '#c9082a'}
	}
}

const getRolesBackgroundColor = (role) => {
	switch (role) {
		case 'owner': return {backgroundColor: '#20c933'}
		case 'editor': return {backgroundColor: '#c9830e'}
		case 'readOnly': return {backgroundColor: '#c9082a'}
		default : return {display: 'none'}
	}
}

const getRolesForDropdown = () => {
	let idx = 0;

	return R.map( role => {
		let roleName = R.toLower(role)
		return {
			key: ++idx,
			value: role,
			disabled: role === 'owner',
			text: R.toUpper(roleName.charAt(0)) + roleName.slice(1)
		}
	})(ROLES)
}

const filterFunc = R.curry((value, user) =>
	R.test(new RegExp(value, 'i'), user.email)
	|| (user.firstName && R.test(new RegExp(value, 'i'), user.firstName))
	|| (user.lastName && R.test(new RegExp(value, 'i'), user.lastName))
)


export {
	setName,
	filterFunc,
	createCollaboratorsObject,
	getRolesColor,
	getRolesForDropdown,
	createRolesObject,
	getRolesBackgroundColor
}