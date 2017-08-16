import React from 'react';
import { List } from 'semantic-ui-react';

import './tabPopup.scss';

let hidingStyle = (isOpen) => ({
    display: isOpen ? 'block' : 'none'
});

const TabPopup = ({isOpen, table}) => (
    <List className='tab_popup' style={hidingStyle(isOpen)}>
	    <List.Item className='list_menu' onClick={() => {
	    	console.log('rename');
	    }}>
		    <List.Icon name='pencil'/>
		    <List.Content>Rename table</List.Content>
	    </List.Item>
	    <List.Item className='list_menu' onClick={() => {
		    console.log('edit description');
	    }}>
		    <List.Icon name='info circle'/>
		    <List.Content>Edit description</List.Content>
	    </List.Item>
	    <List.Item className='list_menu' onClick={() => {
		    console.log('duplicate');
	    }}>
		    <List.Icon name='copy'/>
		    <List.Content>Duplicate table</List.Content>
	    </List.Item>
	    <List.Item className='list_menu' onClick={() => {
		    console.log('delete');
	    }}>
		    <List.Icon name='trash outline'/>
		    <List.Content>Delete table</List.Content>
	    </List.Item>
    </List>
);

export default TabPopup;
