import React, {Component} from 'react';
import {Icon, Button} from 'semantic-ui-react';
import {viewIcons} from '../../configuration/viewTypes';
import './formViewHeader.scss';

export default class FormViewHeader extends Component{
    render() {
        return (
            <div className="formView__header">
                <div id="header__view-type">
                    <Icon name={viewIcons.form} id="view-type__icon" size="large"/>
                    <span id="view-type__name">Form View</span>
                </div>
                <Button.Group>
                    <Button basic>
                        <Icon name='external'/>
                        <span className="menu__text">Share form</span>
                    </Button>
                    <Button basic>
                        <Icon name='eye'/>
                        <span className="menu__text">Preview</span>
                    </Button>
                    <Button basic icon='ellipsis horizontal'/>
                </Button.Group>
                <Icon name="search" id="header__search" size='large'/>
            </div>
        );
    }
}