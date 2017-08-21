import React, {Component} from 'react';
import Header from './header/header';
import Tabs from './tabs/tabs';
import View from '../../view/view';
import R from 'ramda';

class Tools extends Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.isRecordSelected = this.isRecordSelected.bind(this);
        this.isRecordActive = this.isRecordActive.bind(this);
        this.selectRecordHandler = this.selectRecordHandler.bind(this);
        this.activateRecordHandler = this.activateRecordHandler.bind(this);
        this.keyPressRecordHandler = this.keyPressRecordHandler.bind(this);
        this.keyPressSimpleRecordHandler = this.keyPressSimpleRecordHandler.bind(this);
        this.blurRecordHandler = this.blurRecordHandler.bind(this);
        this.blurRecordComponentHandler = this.blurRecordComponentHandler.bind(this);
        this.expandRecordHandler = this.expandRecordHandler.bind(this);
    }

    componentWillMount() {
        this.props.getBaseCurrent(this.props.baseId, this.props.currentTableId);
        this.props.getUser();
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

    keyPressRecordHandler(id) {
        if (!this.isRecordActive(id)) {
            this.props.changeRecord(this.props.currentTableId, id, '');
            this.props.activateRecord(id);
        }
    }

    keyPressSimpleRecordHandler(id, e) {
        this.keyPressRecordHandler(id, e);
        if (this.isRecordActive(id)) {
            if (e.charCode === 13) {
                this.blurRecordComponentHandler(id, e.target.value);
            }
        }
    }

    blurRecordHandler(id) {
        this.props.blurRecord(id);
    }

    blurRecordComponentHandler(id, value) {
        this.props.changeRecord(this.props.currentTableId, id, value);
        this.props.blurRecordComponent(id);
    }

    expandRecordHandler(id) {
        //this.props.expandRecord(id);
    }

    render() {
        const currentTable = R.find(R.propEq('_id', this.props.currentTableId))(this.props.tables);
        const recordData = {
            isRecordSelected: this.isRecordSelected,
            isRecordActive: this.isRecordActive,
            selectRecordHandler: this.selectRecordHandler,
            activateRecordHandler: this.activateRecordHandler,
            keyPressRecordHandler: this.keyPressRecordHandler,
            keyPressSimpleRecordHandler: this.keyPressSimpleRecordHandler,
            blurRecordHandler: this.blurRecordHandler,
            blurRecordComponentHandler: this.blurRecordComponentHandler,
            expandRecordHandler: this.expandRecordHandler
        };
        return (
            <div onClick={() => {
                this.props.closeMenu();
            }}>
                <Header base={this.props.base} user={this.props.user}/>
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
                <View currentTable={currentTable}
                      recordData={recordData}/>
            </div>
        );
    }
}

export default Tools;