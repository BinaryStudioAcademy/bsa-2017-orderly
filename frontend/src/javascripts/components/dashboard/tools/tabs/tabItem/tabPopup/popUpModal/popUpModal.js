import React from 'react';
import { Modal, Button } from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import R from 'ramda';

import { setName } from '../../../../../dashboardService';
import { ModalBody, renameInput, descriptionInput, isRecordCopy } from './modalContent';


const PopUpModal = ({table, tables, activeModal, setTabsModal, tablesNames, renameIsError, tableIdActiveModal,
	                    checkTableName, updateTable, deleteTable, addTableClick, base, setTableIdToActiveModal,
	                    switchTableClick}) =>  (
	<Modal className='table_modal'
	       size='mini'
		   dimmer={false}
		   onClose={() => { setTabsModal(''); }}
		   open={Boolean(activeModal) && tableIdActiveModal === table._id}>
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
						setTabsModal('')
						if (!renameIsError && activeModal === 'rename') {
							updateTable({name: renameInput}, table._id);
							setTabsModal('');
							return;
						}
						if (activeModal === 'edit description') {
							updateTable({description: descriptionInput}, table._id);
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
								let table = R.pick(['name', 'description'], tableCopy);
								table.fields = [
									{
										description: "description",
										name: "default",
										type: "text"
									}
								];
								table.records = [
									{
										record_data: [
											{
												data: ''
											}
										]
									}
								];
								addTableClick({
									table: table,
									baseId: base._id
								})
							}
							setTabsModal('');
							return;
						}
						if (activeModal === 'delete') {
							deleteTable(table._id);
							setTabsModal('');
							console.log(tables[0]._id, 'first table')
							switchTableClick(tables[0]._id)
							browserHistory.push(`/dashboard/${base._id}/${tables[0]._id}`)
							return;
						}
					}}/>
		</Modal.Actions>
	</Modal>
);

export default PopUpModal;