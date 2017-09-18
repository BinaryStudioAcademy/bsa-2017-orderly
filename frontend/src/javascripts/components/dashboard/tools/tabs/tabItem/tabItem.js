import React from 'react';
import { Icon, Popup } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

import TabPopup from './tabPopup/tabPopup';
import './tabItem.scss';

let currentTable;

const TabItem = (base, currentTableId, table, switchTableClick, openMenu,
                 closeMenu, activeModal, setTabsModal, tables, renameIsError, checkTableName,
                updateTable, deleteTable, addTableClick, tableIdActiveModal, setTableIdToActiveModal,
                 currentRole) => (
    <div className='tab_btn'
         key={table._id}>
	    <input id={'tab' + table._id}
	           checked={table.isActive}
	           name='tab_btns'
	           value={table._id}
	           type='radio'/>
	    <label onContextMenu={(evt) => {
	    	        if (currentRole !== 'readOnly') {
			            evt.preventDefault();
			            evt.stopPropagation();
			            currentTable = table
			            openMenu(table._id);
			            setTimeout(closeMenu, 3000)
		            }
			    }}
	           onClick={() => {
		           closeMenu();
		           switchTableClick(table._id);
		           browserHistory.push(`/dashboard/${base._id}/${table._id}`)} }
	           className={table.description ? 'pr-30' : ''}
	           htmlFor={'tab' + table._id}>

               {table.name}
               <Icon name='caret down' color='grey'
                   onClick={(evt) => {
	                   if (currentRole !== 'readOnly') {
		                   evt.preventDefault();
		                   evt.stopPropagation();
		                   currentTable = table
		                   openMenu(table._id);
		                   setTimeout(closeMenu, 3000)
	                   }
                    }}
                />
               </label>
	    {((description) => {
		    if (description) return (<Popup
			    trigger={<Icon link name='info circle'
			                   className='desc_button'
			                   onClick={() => {
				                   if (currentRole !== 'readOnly') {
					                   currentTable = table
					                   setTableIdToActiveModal(table._id)
					                   setTabsModal('edit description');
				                   }
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