import React from 'react';

import Collaborators from './collaborators';

const ShareBlock = ({team, collaborators, showUserPopup, isShowUserPopup}) => (
	<div className='share_block'>
		<Collaborators collaborators={collaborators}
		               isShowUserPopup={isShowUserPopup}
	                   showUserPopup={showUserPopup}
		               team={team}/>
		<div className='share_btn'>SHARE</div>
	</div>
)

export default ShareBlock;