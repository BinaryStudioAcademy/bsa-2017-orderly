import React from 'react';
import { Modal, Button, Input } from 'semantic-ui-react';
import R from 'ramda';

let renameInput;
let renameIsError = true;

const PopUpModal = ({table, activeModal, setTabsModal, tablesNames}) => (
	<Modal size='mini'
	       onClose={() => { setTabsModal('') }}
	       open={Boolean(activeModal)}>
		<Modal.Header>
			Rename table
		</Modal.Header>
		<Modal.Content>
			<Input error={renameIsError} fluid
			       onChange={(event) => {
			       	renameInput = event.target.value;
			       	console.log(tablesNames, renameInput, R.contains(R.toLower(renameInput), tablesNames))
					if (R.contains(R.toLower(renameInput), tablesNames)) renameIsError = true
				    else renameIsError = false
			       }}
			       placeholder='enter new name...'/>
		</Modal.Content>
		<Modal.Actions>
			<Button negative>
				No
			</Button>
			<Button positive icon='checkmark' labelPosition='right' content='Yes' />
		</Modal.Actions>
	</Modal>
)

export default PopUpModal;