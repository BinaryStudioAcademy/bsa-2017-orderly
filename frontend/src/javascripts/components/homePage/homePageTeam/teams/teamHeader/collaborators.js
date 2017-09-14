import React from 'react';
import R from 'ramda';

import CollaboratorItem from './collaboratorItem';

const Collaborators = ({ team, collaborators, showUserPopup, isShowUserPopup }) => {
	if (R.isEmpty(collaborators)) return (<div></div>)
	else return (
		<div className='team_collaborators'>
			{R.map(user => CollaboratorItem(team, user, R.path([team._id, user.userId], collaborators), showUserPopup,
					isShowUserPopup)
				)(R.path(['collaborators'], team) || [])}
		</div>

	)
}


export default Collaborators;

