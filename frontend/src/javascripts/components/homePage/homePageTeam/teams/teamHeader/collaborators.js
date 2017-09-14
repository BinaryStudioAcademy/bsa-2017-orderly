import React from 'react';
;

import CollaboratorItem from './collaboratorItem';

const Collaborators = ({ team, collaborators, showUserPopup, isShowUserPopup }) => {
	if (R.isEmpty(collaborators)) return (<div></div>)
	else return (
		<div className='team_collaborators'>
			{R.map(user =>
				CollaboratorItem(team, user, collaborators[team._id][user.userId], showUserPopup,
								isShowUserPopup)
				)(team.collaborators || [])}
		</div>

	)
}


export default Collaborators;

