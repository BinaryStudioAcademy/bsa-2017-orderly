import React from 'react';
import { Icon, Image, Label } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

import UserProfile from '../../../userProfile/userProfile';
import avatar from '../../../../../images/avatar.png';
import './header.scss';

const Header = ({ base, user }) => (
    <header className='dashboard_header'>
        <Icon link name='trophy'
              onClick={() => {
              	browserHistory.push('/')
              }}
              size='big'/>
        <div className='label'>
            <Label as='a'
                size='big'
                color={'orange'}>{base.name}</Label>
        </div>
        <div className='info'>
            <Icon link name='help circle' size='large'/>
            <Icon link name='grid layout' size='large'/>
            <Icon link name='bell' size='large' />
            <Image src={avatar} avatar />
            <UserProfile/>
        </div>
    </header>
);

export default Header;
