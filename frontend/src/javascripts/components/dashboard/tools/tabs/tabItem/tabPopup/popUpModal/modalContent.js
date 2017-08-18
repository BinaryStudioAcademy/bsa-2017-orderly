import React from 'react';
import { Modal, Input } from 'semantic-ui-react';
import R from 'ramda';

import { debounce } from '../../../../../dashboardService';
let renameInput;

const checkValidName = debounce((value, tablesNames, checkRenameFunc) => {
	if (!value || R.contains(R.toLower(value), tablesNames)) checkRenameFunc(true);
	else checkRenameFunc(false);
}, 150);

const ModalBody = ({activeModal, renameIsError, tablesNames, checkTableName}) => {
	switch (activeModal) {
		case 'rename': return (<Input error={renameIsError} fluid
			              onChange={(event) => {
				              renameInput = event.target.value;
				              checkValidName(renameInput, tablesNames, checkTableName);
			              }}
			              placeholder='enter new name...'/>)
		case 'edit description': return (<Input error={renameIsError} fluid
		                                        onChange={(event) => {
			                                        renameInput = event.target.value;
			                                        console.log(renameInput)
		                                        }}
		                                        placeholder='enter new description...'/>)
		case 'duplicate': return (<Modal.Content>
									<p>Are you sure you want to duplicate this table?</p>
								</Modal.Content>)
		case 'delete': return (<Modal.Content>
								<p>Are you sure you want to delete this table?</p>
								</Modal.Content>)
		default: return (<div></div>)
}}




export {
	ModalBody,
	renameInput
};