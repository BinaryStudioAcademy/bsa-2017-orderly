import React from 'react';
import R from 'ramda';

import Header from './header/header';
import Tabs from './tabs/tabs';
import Menu from './menu/menu';
import Workflow from './workflow/workflow';

const tools = ({tables, current, router, addTableClick, switchTableClick}) => (
    <div>
        <Header/>
        <Tabs tables={tables}
            router={router}
            current={current}
            switchTableClick={switchTableClick}
            addTableClick={addTableClick}/>
        <Menu/>
        <Workflow table={R.find(R.propEq('id', Number(current)))(tables)}/>
    </div>
);

export default tools;