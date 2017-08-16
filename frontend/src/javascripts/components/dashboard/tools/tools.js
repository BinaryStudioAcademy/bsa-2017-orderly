import React, { Component } from 'react';
import Header from './header/header';
import Tabs from './tabs/tabs';
import View from '../../view/view';
import {formatFieldsRecords} from "../dashboardService";

class Tools extends Component {
    constructor(props) {
        super(props);
        this.props = props
    }

    // '5989fdcfe598fa16594f6276/5990a99c30136b6cc878adba' - id test base
    // dashboard/5989fdcfe598fa16594f6276/5991d6a37ee0f860cdbf6d6c
    componentWillMount() {
        this.props.getBaseCurrent(this.props.baseId, this.props.currentTableId);
    }

    render() {
        let currentTable = this.props.tables.filter((t) => t._id === this.props.currentTableId).pop();
        let fieldsRecords;
        if (currentTable) {
            fieldsRecords = formatFieldsRecords(currentTable.fields, currentTable.records);
        }
        return (
            <div onClick={() => {
                // this.props.closeMenu();
            }}>
                <Header base={this.props.base}/>
                <Tabs base={this.props.base}
                    tables={this.props.tables}
                    addPopupIsOpen={this.props.addPopupIsOpen}
                    currentTableId={this.props.currentTableId}
                    openMenu={this.props.openMenu}
                    closeMenu={this.props.closeMenu}
                    switchTableClick={this.props.switchTableClick}
                    togglePopup={this.props.togglePopup}
                    addTableClick={this.props.addTableClick}/>
                <View currentTable={currentTable} fieldsRecords={fieldsRecords}/>
            </div>
        );
    }
}

export default Tools;