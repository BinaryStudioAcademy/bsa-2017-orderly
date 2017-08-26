import React from 'react';

import Collaborators from './collaborators';

const ShareBlock = ({team}) => (
	<div className='share_block'>
		<Collaborators team={team}/>
		<div className='share_btn'>SHARE</div>
	</div>
)

export default ShareBlock;