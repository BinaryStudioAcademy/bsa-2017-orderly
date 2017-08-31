import React from 'react';
import { Icon, Button } from 'semantic-ui-react';
import R from 'ramda';
import AddTabBtn from './addTabBtn/addTabBtn';
import TabItem from './tabItem/tabItem';
import Coworkers from './coworkers/coworkers';
import ExportCSV from '../../csvFile/csvFileExport'
import ImportCSV from '../../csvFile/csvFileImport'
import './tabs.scss';

const Tabs = ({ base, tables, addPopupIsOpen, currentTableId, renameIsError,
    addTableClick, switchTableClick, togglePopup, openMenu, closeMenu,
    activeModal, setTabsModal, checkTableName, updateTable, deleteTable,
    coworkers, tableIdActiveModal, setTableIdToActiveModal}) => (
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
            <Coworkers coworkers={coworkers}/>
            <Button className='share_btn header-icon' size='mini'>share</Button>
            <Icon inverted link className='header-icon' name='history' size='large'/>
            <ImportCSV currentTableId={currentTableId} tables={tables}/>
            <ExportCSV currentTableId={currentTableId} tables={tables} />
        </div>
    </div>
);

export default Tabs;
