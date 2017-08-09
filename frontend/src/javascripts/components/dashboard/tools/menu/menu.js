import React from 'react';
import { Dropdown, Button, Icon, Input } from 'semantic-ui-react';
import './menu.scss';

const views = [{'text': 'Grid', "value": 'grid'},
    {'text': 'Form', "value": 'form'},
    {'text': 'Calendar', "value": 'calendar'},
    {'text': 'Gallery', "value": 'gallery'},
    {'text': 'Kanban','value': 'kanban'}];

const Menu = () => (
    <div className='table_menu'>
        <Dropdown selection options={views} defaultValue={views[0]['value']}/> {' '}
        <Button basic><Icon name='hide'/>Hide fields</Button>
        <Button basic><Icon name='filter'/>Filter</Button>
        <Button basic><Icon name='browser'/>Group</Button>
        <Button basic><Icon name='sort content ascending'/>Sort</Button>
        <Button basic icon='external'/>
        <Button basic icon='ellipsis horizontal'/>
        {' '}
        <Input
            icon={{ name: 'search', link: true }}
            placeholder='Search...'
        />
    </div>
);

export default Menu;
