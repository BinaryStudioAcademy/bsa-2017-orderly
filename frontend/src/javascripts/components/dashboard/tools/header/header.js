import React from 'react';
import { Icon, Dropdown, Image } from 'semantic-ui-react';
import avatar from '../../../../../images/avatar.png';
import './header.scss';

const Header = () => (
    <header className='dashboard_header'>
        <Icon name='trophy' inverted size='big'/>
        <div className='dropdown'>
            <Dropdown text='Basename 1'>
                <Dropdown.Menu>
                    <Dropdown.Item text='Basename 2'></Dropdown.Item>
                    <Dropdown.Item text='Basename 3'></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
        <div className='info'>
            <Icon link name='help circle' size='large'/>
            <Icon link name='grid layout' size='large'/>
            <Icon link name='bell' size='large' />
            <Image src={avatar} avatar />
        </div>
    </header>
);

export default Header;