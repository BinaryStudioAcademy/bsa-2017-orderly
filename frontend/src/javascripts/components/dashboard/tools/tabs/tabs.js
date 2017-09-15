import React from 'react';
import { Icon, Label } from 'semantic-ui-react';
;
import AddTabBtn from './addTabBtn/addTabBtn';
import TabItem from './tabItem/tabItem';
import Coworkers from './coworkers/coworkers';
import './tabs.scss';

const Tabs = ({ base, tables, addPopupIsOpen, currentTableId, renameIsError,
    addTableClick, switchTableClick, togglePopup, openMenu, closeMenu,
    activeModal, setTabsModal, checkTableName, updateTable, deleteTable,
    coworkers, user, tableIdActiveModal, setTableIdToActiveModal, members}) => (
    <div className='tabs_panel' style={{backgroundColor:`${base.color}`}}>
        <div className='btn_block'>
            <div className='tabs_block'>
                { R.map( (table) => {
                    if (table._id !== 0 ) return TabItem(base, currentTableId, table, switchTableClick, openMenu,
                                        closeMenu, activeModal, setTabsModal, tables, renameIsError, checkTableName,
                                        updateTable, deleteTable, addTableClick, tableIdActiveModal, setTableIdToActiveModal);
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
            <Coworkers coworkers={coworkers}
                       members={members}
                       currentUser={user}/>
            {/*<Label color={'grey'}*/}
                   {/*className='share_btn'*/}
                   {/*as='a'*/}
                   {/*circular>SHARE</Label>*/}
            {/*<Icon inverted link*/}
                {/*className='header-icon'*/}
                {/*name='history'*/}
                {/*size='large'/>*/}
        </div>
    </div>
);

export default Tabs;