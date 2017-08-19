import React, {Component} from 'react';
import Header from './header/header';
import Tabs from './tabs/tabs';
import View from '../../view/view';
import {formatFieldsRecords} from "../dashboardService";

class Tools extends Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.isRecordSelected = this.isRecordSelected.bind(this);
        this.isRecordActive = this.isRecordActive.bind(this);
        this.selectRecordHandler = this.selectRecordHandler.bind(this);
        this.activateRecordHandler = this.activateRecordHandler.bind(this);
        this.keyDownRecordHandler = this.keyDownRecordHandler.bind(this);
        this.keyDownSimpleRecordHandler = this.keyDownSimpleRecordHandler.bind(this);
        this.changeRecordHandler = this.changeRecordHandler.bind(this);
        this.blurRecordHandler = this.blurRecordHandler.bind(this);
        this.blurRecordComponentHandler = this.blurRecordComponentHandler.bind(this);
        this.expandRecordHandler = this.expandRecordHandler.bind(this);
    }

    componentWillMount() {
        this.props.getBaseCurrent(this.props.baseId, this.props.currentTableId);
    }

    isRecordSelected(id) {
        return this.props.selectedRecordId == id;
    }

    isRecordActive(id) {
        return this.props.activeRecordId == id;
    }

    selectRecordHandler(id) {
        this.props.selectRecord(id);
    }

    activateRecordHandler(id) {
        this.props.activateRecord(id);
    }

    keyDownRecordHandler(id, e) {
        if (!this.isRecordActive(id)) {
            this.changeRecordHandler(id, '');
            this.props.activateRecord(id);
        }
    }

    keyDownSimpleRecordHandler(id, e) {
        this.keyDownRecordHandler(id, e);
        if (this.isRecordActive(id)) {
            if (e.keyCode === 13) {
                this.blurRecordComponentHandler(id);
            }
        }
    }

    changeRecordHandler(id, value) {
        this.props.changeRecord(this.props.currentTableId, id, value);
    }

    blurRecordHandler(id) {
        this.props.blurRecord(id);
    }

    blurRecordComponentHandler(id) {
        this.props.blurRecordComponent(id);
    }

    expandRecordHandler(id) {
        //this.props.expandRecord(id);
    }

    render() {
        let currentTable = this.props.tables.filter((t) => t._id === this.props.currentTableId).pop();
        let fieldsRecords;
        if (currentTable) {
            fieldsRecords = formatFieldsRecords(currentTable.fields, currentTable.records);
        }
        const fieldEvents = {
            isRecordSelected: this.isRecordSelected,
            isRecordActive: this.isRecordActive,
            selectRecordHandler: this.selectRecordHandler,
            activateRecordHandler: this.activateRecordHandler,
            keyDownRecordHandler: this.keyDownRecordHandler,
            keyDownSimpleRecordHandler: this.keyDownSimpleRecordHandler,
            changeRecordHandler: this.changeRecordHandler,
            blurRecordHandler: this.blurRecordHandler,
            blurRecordComponentHandler: this.blurRecordComponentHandler,
            expandRecordHandler: this.expandRecordHandler
        }

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
                      deleteTable={this.props.deleteTable}
                      addTableClick={this.props.addTableClick}/>
                <View currentTable={currentTable} fieldsRecords={fieldsRecords} fieldEvents={fieldEvents}/>
            </div>
        );
    }
}

export default Tools;