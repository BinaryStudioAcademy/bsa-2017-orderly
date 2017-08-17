import React from 'react';
import { Modal, Button, Input } from 'semantic-ui-react';
import R from 'ramda';

import { debounce, setName } from '../../../../../dashboardService';

let renameInput;

const checkValidName = debounce((value, tablesNames, checkRenameFunc) => {
    if (!value || R.contains(R.toLower(value), tablesNames)) checkRenameFunc(true);
    else checkRenameFunc(false);
}, 150);

const PopUpModal = ({table, activeModal, setTabsModal, tablesNames, renameIsError,
                    checkTableName, updateTable}) => (
	<Modal size='mini'
		   dimmer={false}
		   onClose={() => { setTabsModal(''); }}
		   open={Boolean(activeModal)}>
		<Modal.Header>
			{setName(activeModal)}
		</Modal.Header>
		<Modal.Content>
			<Input error={renameIsError} fluid
				   onChange={(event) => {
                       renameInput = event.target.value;
                       checkValidName(renameInput, tablesNames, checkTableName);
                   }}
				   placeholder='enter new name...'/>
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
						if (!renameIsError) {
							updateTable({name: renameInput},  table._id)
							setTabsModal('')
						}
					}}/>
		</Modal.Actions>
	</Modal>
);

export default PopUpModal;