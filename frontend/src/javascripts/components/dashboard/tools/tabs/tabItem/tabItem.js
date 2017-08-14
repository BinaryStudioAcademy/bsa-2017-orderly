import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router';
import TabPopup from './tabPopup/tabPopup';
import './tabItem.scss';

const TabItem = (base, currentTable, table, switchTableClick, openMenu, closeMenu) => (
    <div className='tab_btn' key={table._id}>
        <Link to={`/dashboard/${base._id}/${table._id}`}>
            <Button inverted
                active={table.isActive}
                onContextMenu={(evt) => {
                    evt.preventDefault();
                    evt.stopPropagation();
                    openMenu(table._id);
                }}
                onClick={() => {
                    closeMenu();
                    switchTableClick(table._id);} }>
                {table.name}
            </Button>
        </Link>
        <TabPopup isOpen={table.isMenuOpen}/>
    </div>

);

export default TabItem;