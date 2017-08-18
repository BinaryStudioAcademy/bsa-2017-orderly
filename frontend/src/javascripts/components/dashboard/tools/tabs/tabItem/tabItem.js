import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router';
import TabPopup from './tabPopup/tabPopup';
import './tabItem.scss';

let currentTable;

const TabItem = (base, currentTableId, table, switchTableClick, openMenu,
                 closeMenu, activeModal, setTabsModal, tables, renameIsError, checkTableName,
                updateTable, deleteTable) => (
    <div className='tab_btn' key={table._id}>
        <Link to={`/dashboard/${base._id}/${table._id}`}>
            <Button inverted
                active={table.isActive}
                onContextMenu={(evt) => {
                    evt.preventDefault();
                    evt.stopPropagation();
                    currentTable = table
                    openMenu(table._id);
                }}
                onClick={() => {
                    closeMenu();
                    switchTableClick(table._id);} }>
                {table.name}
            </Button>
        </Link>
        <TabPopup isOpen={table.isMenuOpen}
                  activeModal={activeModal}
                  setTabsModal={setTabsModal}
                  tables={tables}
                  renameIsError={renameIsError}
                  checkTableName={checkTableName}
                  updateTable={updateTable}
                  deleteTable={deleteTable}
                  table={currentTable ? currentTable : table}/>
    </div>

);

export default TabItem;