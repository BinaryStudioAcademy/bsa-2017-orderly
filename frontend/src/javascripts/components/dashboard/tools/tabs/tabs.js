import React from 'react';
import { Icon, Button } from 'semantic-ui-react';
import R from 'ramda';
import AddTabBtn from './addTabBtn/addTabBtn';
import TabItem from './tabItem/tabItem';

import './tabs.scss';

const Tabs = ({ base, tables, addPopupIsOpen, currentTableId, renameIsError,
    addTableClick, switchTableClick, togglePopup, openMenu, closeMenu,
    activeModal, setTabsModal, checkTableName}) => (
    <div className='tabs_panel'>
        <div className='btn_block'>
            <div className='tabs_block'>
                { R.map( (table) => {
                    if (table._id !== 0 ) return TabItem(base, currentTableId, table, switchTableClick, openMenu,
                                        closeMenu, activeModal, setTabsModal, tables, renameIsError, checkTableName);
                } )(tables) }
            </div>
            <div className='add_btn'>
                <AddTabBtn base={base}
                    togglePopup={togglePopup}
                    addPopupIsOpen={addPopupIsOpen}
                    addTableClick={addTableClick}/>
            </div>
        </div>
        <div className='history'>
            <Button className='share_btn' size='mini'>share</Button>
            <Icon inverted link name='history' size='large'/>
        </div>
    </div>
);

export default Tabs;
