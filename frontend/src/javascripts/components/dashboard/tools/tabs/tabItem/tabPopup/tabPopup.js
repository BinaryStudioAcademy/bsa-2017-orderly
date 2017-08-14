import React from 'react';
import { List } from 'semantic-ui-react';

import './tabPopup.scss';

let hidingStyle = (isOpen) => {
	return {
		display: isOpen ? 'block' : 'none'
	};
};

const TabPopup = ({isOpen}) => (
    <List className='tab_popup' style={hidingStyle(isOpen)}>
	    <List.Item>
		    <List.Icon name='pencil'/>
		    <List.Content>Rename table</List.Content>
	    </List.Item>
	    <List.Item>
		    <List.Icon name='info circle'/>
		    <List.Content>Edit description</List.Content>
	    </List.Item>
	    <List.Item>
		    <List.Icon name='copy'/>
		    <List.Content>Duplicate table</List.Content>
	    </List.Item>
	    <List.Item>
		    <List.Icon name='trash outline'/>
		    <List.Content>Delete table</List.Content>
	    </List.Item>
    </List>
);

export default TabPopup;
