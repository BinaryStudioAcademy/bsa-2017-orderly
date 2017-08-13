import React from 'react';
import {Icon, Button} from 'semantic-ui-react';
import {viewIcons} from '../../configuration/viewTypes';
import './grid.scss';

export const GridHeader = () => {
    return (
        <div className="view__header">
                <Icon name="caret down" size="large"/>
            <div id="header__view-type">
                <Icon name={viewIcons.grid} size="large"/>
                Grid View
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
            <Icon name="search" id="header__search"/>
        </div>
    );
};