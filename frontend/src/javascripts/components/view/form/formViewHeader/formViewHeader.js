import React, {Component} from 'react';
import {Icon, Button} from 'semantic-ui-react';
import {viewIcons} from '../../../configuration/viewTypes';
import {browserHistory} from 'react-router';
import ExtraMenu from './headerMenu/extraMenu';
import PopupShareForm from './formSharePopUp'
import './formViewHeader.scss';

export default class FormViewHeader extends Component{

    handlePreview = (viewId, viewType) => {
        browserHistory.push(`/${this.props.currentTable._id}/${this.props.currentViewId}`)
    }

    render() {
        return (
            <div className="formView__header">
                <div id="header__view-type">
                    <Icon name={viewIcons.form} id="view-type__icon" size="large"/>
                    <span id="view-type__name">Form View</span>
                </div>
                <Button.Group>
                    <PopupShareForm tableId={this.props.currentTable._id} viewId={this.props.currentViewId}/>
                    <Button basic onClick={this.handlePreview}>
                        <Icon name='eye'/>
                        <span className="menu__text">Preview</span>
                    </Button>
                    <ExtraMenu
                        deleteView={this.props.deleteView}
                        viewsCount={this.props.viewsCount}
                    />
                </Button.Group>
                <Icon name="search" id="header__search" size='large'/>
            </div>
        );
    }
}