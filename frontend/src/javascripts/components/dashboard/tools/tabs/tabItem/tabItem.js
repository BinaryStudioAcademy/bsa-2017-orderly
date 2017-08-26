import React from 'react';
import { Button, Icon, Popup } from 'semantic-ui-react';
import { Link } from 'react-router';
import R from 'ramda';

import TabPopup from './tabPopup/tabPopup';
import './tabItem.scss';

let currentTable;

const TabItem = (base, currentTableId, table, switchTableClick, openMenu,
                 closeMenu, activeModal, setTabsModal, tables, renameIsError, checkTableName,
                updateTable, deleteTable, addTableClick, tableIdActiveModal, setTableIdToActiveModal) => (
    <div className='tab_btn' key={table._id}>
        <Link to={`/dashboard/${base._id}/${table._id}`}>
            <Button inverted className={table.description ? 'pr-30' : ''}
                active={table.isActive}
                onContextMenu={(evt) => {
                    evt.preventDefault();
                    evt.stopPropagation();
                    currentTable = table
                    openMenu(table._id);
                    setTimeout(closeMenu, 3000)
                }}
                onClick={() => {
                    closeMenu();
                    switchTableClick(table._id);} }>
                {table.name}
            </Button>
        </Link>
	    {((description) => {
		    if (description) return (<Popup
			    trigger={<Icon link name='info circle'
			                   className='desc_button'
			                   onClick={() => {
				                   currentTable = table
				                   setTableIdToActiveModal(table._id)
				                   setTabsModal('edit description');
			                   }}
			                   icon='add' />}
			    content={table.description}
			    inverted />)
	    })(table.description)}

	    <TabPopup isOpen={table.isMenuOpen}
	              tableIdActiveModal={tableIdActiveModal}
	              switchTableClick={switchTableClick}
	              setTableIdToActiveModal={setTableIdToActiveModal}
                  activeModal={activeModal}
                  setTabsModal={setTabsModal}
                  tables={tables}
                  renameIsError={renameIsError}
                  checkTableName={checkTableName}
                  updateTable={updateTable}
                  deleteTable={deleteTable}
                  addTableClick={addTableClick}
                  base={base}
                  table={currentTable ? currentTable : table}/>
	</div>
);

export default TabItem;