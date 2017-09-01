import React from 'react';

import ShareModal from './shareModal/shareModal';

import Collaborators from './collaborators';

const ShareBlock = ({team, collaborators, showUserPopup, isShowUserPopup, activeShareModal,
	                changeActiveShareModal, allUsers, getAllUsers, addCollaborator, deleteCollaborator,
                    updateCollaboratorRole}) => (
	<div className='share_block'
	     onClick={() => {
		     changeActiveShareModal(team._id)
	     }}
	     >
		<Collaborators collaborators={collaborators}
		               isShowUserPopup={isShowUserPopup}
	                   showUserPopup={showUserPopup}
		               team={team}/>
		<div className='share_btn'>SHARE</div>
		<ShareModal team={team}
		            updateCollaboratorRole={updateCollaboratorRole}
		            deleteCollaborator={deleteCollaborator}
		            addCollaborator={addCollaborator}
                    allUsers={allUsers}
		            getAllUsers={getAllUsers}
		            collaborators={collaborators}
		            activeShareModal={activeShareModal}
		            changeActiveShareModal={changeActiveShareModal}/>
	</div>
)

export default ShareBlock;