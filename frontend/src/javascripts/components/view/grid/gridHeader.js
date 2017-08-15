import React, {Component} from 'react';
import {Icon, Button} from 'semantic-ui-react';
import {viewIcons} from '../../configuration/viewTypes';
import './gridHeader.scss';

export class GridHeader extends Component{
    render() {
        return (
            <div className="view__header">
                <div id="header__view-type">
                    <Icon name={viewIcons.grid} id="view-type__icon" size="large"/>
                    <span id="view-type__name">Grid View</span>
                </div>
                <Button.Group>
                    <Button basic>
                        <Icon name='hide'/>
                        <span className="menu__text">Hide fields</span>
                    </Button>
                    <Button basic>
                        <Icon name='filter'/>
                        <span className="menu__text">Filter</span>
                    </Button>
                    <Button basic>
                        <Icon name='browser'/>
                        <span className="menu__text">Group</span>
                    </Button>
                    <Button basic>
                        <Icon name='sort content ascending'/>
                        <span className="menu__text">Sort</span>
                    </Button>
                    <Button basic icon='external'/>
                    <Button basic icon='ellipsis horizontal'/>
                </Button.Group>
                <Icon name="search" id="header__search" size='large'/>
            </div>
        );
    }
}