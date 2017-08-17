import React from 'react';
import { Modal, Button, Input } from 'semantic-ui-react';
import R from 'ramda';
import { debounce } from '../../../../../dashboardService';

let renameInput;

const PopUpModal = ({table, activeModal, setTabsModal, tablesNames, renameIsError, checkTableName}) => (
	<Modal size='mini'
	       dimmer={false}
	       closeOnDocumentClick={true}
	       open={Boolean(activeModal)}>
		<Modal.Header>
			Rename table
		</Modal.Header>
		<Modal.Content>
			<Input error={renameIsError} fluid
			       onChange={ (event) => {
				       renameInput = event.target.value;
				       console.log(renameInput)
				       console.log(tablesNames, renameInput, R.contains(R.toLower(renameInput), tablesNames))
				       if (R.contains(R.toLower(renameInput), tablesNames)) checkTableName(true)
				       else checkTableName(false)
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