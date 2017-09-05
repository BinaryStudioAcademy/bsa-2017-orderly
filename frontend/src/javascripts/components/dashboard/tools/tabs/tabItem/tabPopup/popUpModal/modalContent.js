import React from 'react';
import { Modal, Input, Checkbox } from 'semantic-ui-react';
import R from 'ramda';
import { debounce } from 'throttle-debounce';

let renameInput;
let descriptionInput = '';
let isRecordCopy = false;

const checkValidName = debounce(150, (value, tablesNames, checkRenameFunc) => {
	if (!value || R.contains(R.toLower(value), tablesNames)) checkRenameFunc(true);
	else checkRenameFunc(false);
});

const ModalBody = ({activeModal, renameIsError, tablesNames, checkTableName, table}) => {
	renameInput = table.name;
	descriptionInput = table.description;
	switch (activeModal) {
		case 'rename': return (<Input error={renameIsError} fluid
			              onChange={(event) => {
				              renameInput = event.target.value;
				              checkValidName(renameInput, tablesNames, checkTableName);
			              }}
			              placeholder={renameInput}/>)
		case 'edit description': return (<Input fluid
		                                        onChange={(event) => {
		                                        	descriptionInput = event.target.value;
		                                        }}
		                                        placeholder={descriptionInput ? descriptionInput : 'Enter description...'}/>)
		case 'duplicate': return (<Modal.Content>
									<Checkbox label='Duplicate records'
									          onChange={(event, data) => {
									          	isRecordCopy = data.checked;
									          }}
									          toggle/>
								</Modal.Content>)
		case 'delete': return (<Modal.Content>
								<p>Are you want to delete this table?</p>
								</Modal.Content>)
		default: return (<div></div>)
}}

export {
	ModalBody,
	renameInput,
	descriptionInput,
	isRecordCopy
};