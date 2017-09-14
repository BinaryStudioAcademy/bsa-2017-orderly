import React from 'react';
import { Modal, Input } from 'semantic-ui-react';
;

let renameInput = '';

const ModalBody = ({ activeModal, team }) => {
	renameInput = team.name;
	switch (activeModal) {
		case 'settings': return (<div>settings</div>)
		case 'rename': return (<Input onChange={ (event) => {
										renameInput = event.target.value;
									}}
		                              placeholder={renameInput}
		                              fluid />)
		case 'delete': return (<Modal.Content>
									<p>Are you want to delete this team?</p>
								</Modal.Content>)
	}
}

export {
	ModalBody,
	renameInput
}