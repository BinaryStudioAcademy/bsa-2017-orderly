export const addNewBase = (teamId) => {
  return {
    type: 'ADD_NEW_BASE',
	teamId: teamId
  }
}

export const toggleTeamPopup = (teamId, isShow) => {
	return {
		type: 'TOGGLE_TEAM_POPUP',
		teamId: teamId,
		isShow: isShow
	}
}

export const getCollaborators = (teamId, usersIds) => {
	return  {
		type: 'GET_COLLABORATORS',
		teamId: teamId,
		usersIds: usersIds
	}
}

export const setTeamModal = (typeOfActivity) => {
	return {
		type: 'SET_TEAM_MODAL_ACTIVITY',
		typeOfActivity: typeOfActivity
	}
}

export const addNewTeam = (userId) => {
	return {
		type: 'ADD_NEW_TEAM',
		userId: userId
	}
}

export const updateTeam = (data, teamId) => {
	return {
		type: 'UPDATE_TEAM',
		data: data,
		teamId: teamId
	}
}

export const deleteTeam = (teamId) => {
	return {
		type: 'DELETE_TEAM',
		teamId: teamId
	}
}

export const getBasesByTeam = (teamId) => {
	return {
		type: 'GET_BASES_BY_TEAM',
		teamId: teamId
	}
}

export const getTeamsByUser = ({ _id }) => {
	return {
		type: 'GET_TEAMS_BY_USER',
		userId: _id
	}
}

export const changeBaseParam = (value, typeAction, _id) =>{
    return {
      type: 'CHANGE_BASE_PARAM',
      typeAction,
      value,
      _id
    };
}

export const showContextMenu = (data, type, _id) => {
  if (type ==='show') {
    return {
      type: 'OPEN_CONTEXT_MENU',
      _id
    }
  }
}

export const changeActiveShareModal = (teamId) => {
	return {
		type: 'CHANGE_SHARE_MODAL',
		teamId: teamId
	}
}

export const showUserPopup = (userAndTeamId) => {
	return {
		type: 'SHOW_USER_POPUP',
		userId: userAndTeamId
	}
}

export const deleteBase = (data, type, _id) => {
  return {
    type: 'DELETE_BASE',
    _id
  };
}
