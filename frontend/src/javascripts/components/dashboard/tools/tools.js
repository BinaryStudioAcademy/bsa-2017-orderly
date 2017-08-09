import React from 'react';
import R from 'ramda';
import { Button } from 'semantic-ui-react';

import Header from './header/header';
import Tabs from './tabs/tabs';
import Menu from './menu/menu';
import Workflow from './workflow/workflow';

const tools = ({tables, current, addTableClick, switchTableClick, getAllTables}) => (
    <div>
        <Button onClick={() => getAllTables()}>get tables</Button>
        <Header/>
        <Tabs tables={tables}
            current={current}
            switchTableClick={switchTableClick}
            addTableClick={addTableClick}/>
        <Menu/>
        <Workflow table={R.find((table) => table._id == current)(tables)}/>
    </div>
);

export default tools;