import React, {Component} from 'react';
import Header from './header/header';
import Tabs from './tabs/tabs';
import View from '../../view/view';
import R from 'ramda';

import socket from '../../../app/socketIO';

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
        this.keyPressCommentHandler = this.keyPressCommentHandler.bind(this);
    }

    componentWillMount() {
        this.props.getBaseCurrent(this.props.baseId, this.props.currentTableId);
        this.props.getUser();
    }

    componentDidMount() {
        const _this = this;
        socket.on('server-get-coworkers-list', function (coworkers) {
            _this.props.getCoworkersList(coworkers);
        });
    }

    isRecordSelected(id) {
        return this.props.selectedRecordItemId == id;
    }

    isRecordActive(id) {
        return this.props.activeRecordItemId == id;
    }

    selectRecordHandler(id) {
        this.props.selectRecord(id);
    }

    activateRecordHandler(id) {
        this.props.activateRecord(id);
    }

    keyPressRecordHandler(id) {
        if (!this.isRecordActive(id)) {
            this.props.changeRecord(this.props.currentTableId, id, '', this.props.user);
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
        this.props.changeRecord(this.props.currentTableId, id, value, this.props.user);
        this.props.blurRecordComponent(id);
    }

    keyPressCommentHandler(userId, recordId, tableId, comment) {
        this.props.addComment(userId, recordId, tableId, comment);
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
            blurRecordComponentHandler: this.blurRecordComponentHandler
        };
        return (
            <div onClick={() => {
                // this.props.closeMenu();
            }}>
                <Header base={this.props.base} 
                        user={this.props.user} 
                        menu={this.props.menu}
                        handleClick={this.props.handleClick}  />
                <Tabs base={this.props.base}
                      tableIdActiveModal={this.props.tableIdActiveModal}
                      setTableIdToActiveModal={this.props.setTableIdToActiveModal}
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
                      addTableClick={this.props.addTableClick}
                      coworkers={this.props.coworkers}/>
                <View currentTable={currentTable}
                      recordData={recordData}
                      openRecordDialog={this.props.openRecordDialog}
                      recordDialogIndex={this.props.recordDialogIndex}
                      keyPressCommentHandler={this.keyPressCommentHandler}
                      user={this.props.user}
                      onChangeSearch={this.props.changeSearch}
                      searchMatchedRecordItemIdList={this.props.searchMatchedRecordItemIdList}
                      searchFoundIndex={this.props.searchFoundIndex}
                      onChangeSearchFoundIndex={this.props.changeSearchFoundIndex}
                      onCloseSearch={this.props.closeSearch}
                      onToggleSearch={this.props.toggleSearch}
                      searchBlockOpen={this.props.searchBlockOpen}/>
            </div>
        );
    }
}

export default Tools;