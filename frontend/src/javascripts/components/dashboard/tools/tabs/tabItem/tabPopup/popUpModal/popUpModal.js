import React from 'react';
import { Modal, Button, Input } from 'semantic-ui-react';
import R from 'ramda';

import { setName } from '../../../../../dashboardService';
import { ModalBody, renameInput } from './modalContent';


const PopUpModal = ({table, activeModal, setTabsModal, tablesNames, renameIsError,
	                    checkTableName, updateTable, deleteTable}) =>  (
	<Modal size='mini'
		   dimmer={false}
		   onClose={() => { setTabsModal(''); }}
		   open={Boolean(activeModal)}>
		<Modal.Header>
			{setName(activeModal)}
		</Modal.Header>
		<Modal.Content>
			<ModalBody renameIsError={renameIsError}
			           renameInput={renameInput}
			           tablesNames={tablesNames}
			           checkTableName={checkTableName}
			           activeModal={activeModal} />


		</Modal.Content>
		<Modal.Actions>
			<Button negative onClick={ () => {
                setTabsModal('');
            }}>
				No
			</Button>
			<Button positive
			        icon='checkmark'
			        labelPosition='right'
			        content='Yes'
					onClick={() => {
						if (!renameIsError && activeModal == 'rename') {
							console.log(renameInput, 'iiiiiiiiiiiiiiiiiiiiiiiiiii')
							updateTable({name: renameInput},  table._id);
							setTabsModal('');
							return;
						}
						if (activeModal === 'delete') {
							deleteTable(table._id);
							setTabsModal('');
							return;
						}
					}}/>
		</Modal.Actions>
	</Modal>
);

export default PopUpModal;