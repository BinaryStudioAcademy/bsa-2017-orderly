import React from 'react';
import { Modal, Input } from 'semantic-ui-react';
import R from 'ramda';

import { debounce } from '../../../../../dashboardService';
let renameInput;

// const ModalBody = (activeModal) => (
// 	switch (activeModal) {
// 		case 'rename':
// 			return 'rename';
// 		case 'edit description':
// 			return 'Edit description';
// 		case 'duplicate':
// 			return 'Duplicate table';
// 		case 'delete':
// 			return 'Delete table';
// 	}
// );

const checkValidName = debounce((value, tablesNames, checkRenameFunc) => {
	if (!value || R.contains(R.toLower(value), tablesNames)) checkRenameFunc(true);
	else checkRenameFunc(false);
}, 150);


const ModalBody = ({activeModal, renameIsError, tablesNames, checkTableName}) => {
	switch (activeModal) {
		case 'rename': return (<Input error={renameIsError} fluid
			              onChange={(event) => {
				              renameInput = event.target.value;
				              console.log(renameInput)
				              checkValidName(renameInput, tablesNames, checkTableName);
			              }}
			              placeholder='enter new name...'/>)
		case 'edit description': return (<div></div>)
		case 'duplicate': return (<div></div>)
		case 'delete': return (<Modal.Content>
								<p>Are you sure you want to delete this table?</p>
								</Modal.Content>)
		default: return (<div></div>)
}}




export {
	ModalBody,
	renameInput
};