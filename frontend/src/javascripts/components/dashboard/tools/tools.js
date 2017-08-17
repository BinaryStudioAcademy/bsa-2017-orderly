import React, { Component } from 'react';
import R from 'ramda';

import Header from './header/header';
import Tabs from './tabs/tabs';
import Menu from './menu/menu';
import Workflow from '../../workflow/workflow';

class Tools extends Component {
    constructor(props) {
        super(props);
        this.props = props
    }

    componentWillMount() {
        this.props.getBaseCurrent(this.props.baseId, this.props.currentTableId);
    }

    render() {
        return (
            <div onClick={() => {
                this.props.closeMenu();
            }}>
                <Header base={this.props.base}/>
                <Tabs base={this.props.base}
		              activeModal={this.props.activeModal}
		              setTabsModal={this.props.setTabsModal}
		              tables={this.props.tables}
		              addPopupIsOpen={this.props.addPopupIsOpen}
		              currentTableId={this.props.currentTableId}
		              openMenu={this.props.openMenu}
		              closeMenu={this.props.closeMenu}
		              switchTableClick={this.props.switchTableClick}
		              togglePopup={this.props.togglePopup}
		              renameIsError={this.props.renameIsError}
		              checkTableName={this.props.checkTableName}
		              updateTable={this.props.updateTable}
		              addTableClick={this.props.addTableClick}/>
                <Menu/>
                <Workflow currentTableId={this.props.currentTableId}/>
            </div>
        );
    }
}

export default Tools;