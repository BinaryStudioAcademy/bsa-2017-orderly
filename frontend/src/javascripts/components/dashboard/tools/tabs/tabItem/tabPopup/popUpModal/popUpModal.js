import React from 'react';
import { Modal, Button } from 'semantic-ui-react';
import R from 'ramda';

import { setName } from '../../../../../dashboardService';
import { ModalBody, renameInput, descriptionInput, isRecordCopy } from './modalContent';


const PopUpModal = ({table, activeModal, setTabsModal, tablesNames, renameIsError,
	                    checkTableName, updateTable, deleteTable, addTableClick, base}) =>  (
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
			           activeModal={activeModal}
						table={table}/>
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
						if (!renameIsError && activeModal === 'rename') {
							updateTable({name: renameInput}, table._id);
							setTabsModal('');
							return;
						}
						if (activeModal === 'edit description') {
							updateTable({description: descriptionInput}, table._id)
							setTabsModal('');
							return;
						}
						if (activeModal === 'duplicate') {
							let tableCopy = table;
							tableCopy.name = table.name + ' copy'
							if (isRecordCopy) {
								addTableClick({
									table: R.pick(['name', 'description', 'records',
													'fields', 'views'], tableCopy),
									baseId: base._id
								})
							} else {
								addTableClick({
									table: R.pick(['name', 'description'], tableCopy),
									baseId: base._id
								})
							}
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