import React from 'react';
import { Icon, Button } from 'semantic-ui-react';
import R from 'ramda';
import AddTabBtn from './addTabBtn/addTabBtn';
import TabItem from './tabItem/tabItem';

import './tabs.scss';

const Tabs = ({ base, tables, currentTableId, addTableClick, switchTableClick}) => (
    <div className='tabs_panel'>
        <div className='btn_block'>
            {console.log(currentTableId, 'currentTable')}
            <div className='tabs_block'>
                { R.map( (table) => {
                    if (table._id !== 0 ) return TabItem(base, currentTableId, table, switchTableClick);
                } )(tables) }
            </div>
            <div className='add_btn'>
                <AddTabBtn addTableClick={addTableClick}/>
            </div>
        </div>
        <div className='history'>
            <Button className='share_btn' size='mini'>share</Button>
            <Icon inverted link name='history' size='large'/>
        </div>
    </div>
);

export default Tabs;
