import React from 'react';
import {Header, Icon} from 'semantic-ui-react';

const InDeveloping = () => (
    <Header as='h2'
        style={{marginTop: 0, paddingTop: '10px'}}
        textAlign='center'>
        <Icon name='settings'/>
        In developing...
    </Header>
);

export default InDeveloping;