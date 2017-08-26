import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

import { setName } from '../../../homePageService';
import { ModalBody, renameInput } from './modalBody';

const TeamModal = ({activeModal, setTeamModal, team, updateTeam, deleteTeam, currentClickedTeamId}) => (
	<Modal className='team_modal'
	       size='mini'
	       onClose={() => { setTeamModal(''); }}
	       open={Boolean(activeModal) && currentClickedTeamId === team._id}
	       dimmer={false}>
		<Modal.Header>
			{setName(activeModal)}
		</Modal.Header>
		<Modal.Content>
			<ModalBody team={team}
			           activeModal={activeModal} />
		</Modal.Content>
		<Modal.Actions>
			<Button negative onClick={ () => {
				setTeamModal('')
			}}>No</Button>
			<Button positive
					icon='checkmark'
					labelPosition='right'
					content='Yes'
					onClick={() => {
						setTeamModal('');
						if (activeModal === 'rename') {
							updateTeam({name: renameInput}, team._id);
							return;
						}
						if (activeModal === 'delete') {
							deleteTeam(team._id)
							return;
						}
					}}/>
		</Modal.Actions>
	</Modal>
);

export default TeamModal;