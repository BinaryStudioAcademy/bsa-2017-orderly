import React, {Component} from 'react';
import {Icon, Button} from 'semantic-ui-react';
import {viewIcons} from '../../../configuration/viewTypes';
import {Link} from 'react-router';
import ExtraMenu from './headerMenu/extraMenu';
import PopupShareForm from './formSharePopUp'
import './formViewHeader.scss';

export default class FormViewHeader extends Component{

    render() {
        return (
            <div className="formView__header">
                <div className="btn-form-menu first-butn">
                    <Icon name={viewIcons.form} id="view-type__icon" size="large"/>
                    <span id="view-type__name">Form View</span>
                </div>
                    <PopupShareForm tableId={this.props.currentTable._id} viewId={this.props.currentViewId}/>
                    <Link  target="_blank" to={`/${this.props.currentTable._id}/${this.props.currentViewId}`}>
                        <div className='btn-form-menu'>
                            <Icon name='eye'/>
                            <span className="menu__text">Preview</span>
                        </div>
                    </Link>
                    <ExtraMenu
                        deleteView={this.props.deleteView}
                        viewsCount={this.props.viewsCount}
                    />
            </div>
        );
    }
}