import React from 'react';
import { List } from 'semantic-ui-react';
import R from 'ramda';

import PopUpModal from './popUpModal/popUpModal';
import './tabPopup.scss';

let hidingStyle = (isOpen) => ({
    display: isOpen ? 'block' : 'none'
});

const TabPopup = ({isOpen, table, activeModal, setTabsModal, deleteTable,
                  tablesNames, tables, renameIsError, checkTableName, updateTable}) => (
	<div>
		<List className='tab_popup' style={hidingStyle(isOpen)}>
			<List.Item className='list_menu' onClick={() => {
				setTabsModal('rename')
			}}>
				<List.Icon name='pencil'/>
				<List.Content>Rename table</List.Content>
			</List.Item>
			<List.Item className='list_menu' onClick={() => {
				setTabsModal('edit description')
			}}>
				<List.Icon name='info circle'/>
				<List.Content>Edit description</List.Content>
			</List.Item>
			<List.Item className='list_menu' onClick={() => {
				setTabsModal('duplicate')
			}}>
				<List.Icon name='copy'/>
				<List.Content>Duplicate table</List.Content>
			</List.Item>
			<List.Item className='list_menu' onClick={() => {
				setTabsModal('delete')
			}}>
				<List.Icon name='trash outline'/>
				<List.Content>Delete table</List.Content>
			</List.Item>
		</List>
		<PopUpModal table={table}
		            tablesNames={R.compose(R.map(R.toLower), R.pluck('name'))(tables)}
		            checkTableName={checkTableName}
		            setTabsModal={setTabsModal}
		            renameIsError={renameIsError}
		            updateTable={updateTable}
		            deleteTable={deleteTable}
		            activeModal={activeModal}/>
	</div>
);

export default TabPopup;
