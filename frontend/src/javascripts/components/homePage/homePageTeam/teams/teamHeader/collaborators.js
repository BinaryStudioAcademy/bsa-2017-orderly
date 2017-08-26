import React from 'react';
import R from 'ramda';

let temporaryKey = 0;

const Collaborators = ({team}) => (
	<div className='team_collaborators'>
		{R.map( collaborator => <span key={collaborator._id || ++temporaryKey}>{collaborator.email}</span>)(team.collaborators || [])}
	</div>
)

export default Collaborators;

