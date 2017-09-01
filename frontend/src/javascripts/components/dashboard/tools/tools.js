import React, {Component} from 'react';
import Header from './header/header';
import Tabs from './tabs/tabs';
import View from '../../view/view';
import R from 'ramda';
import {onGetCoworkersList} from '../../../app/socket';

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
        onGetCoworkersList((coworkersByTables) => {
            _this.props.getCoworkersList(coworkersByTables, _this.props.currentTableId);
        });

        this.context.router.listenBefore((location, done) => {
            if (!location.pathname.startsWith('/dashboard/' + _this.props.baseId + '/')) {
                _this.props.disconnectSocket();
            }
            done(location);
        });

        window.addEventListener("beforeunload", (event) => {
            _this.props.disconnectSocket();
        });
    }

    isRecordSelected(id) {
        return this.props.selectedRecordItemId === id;
    }

    isRecordActive(id) {
        return this.props.activeRecordItemId === id;
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
                        handleClick={this.props.handleClick}/>
                <Tabs base={this.props.base}
                      currentTableId={this.props.currentTableId}
                      tables={this.props.tables}
                      tableIdActiveModal={this.props.tableIdActiveModal}
                      setTableIdToActiveModal={this.props.setTableIdToActiveModal}
                      activeModal={this.props.activeModal}
                      setTabsModal={this.props.setTabsModal}
                      addPopupIsOpen={this.props.addPopupIsOpen}
                      openMenu={this.props.openMenu}
                      closeMenu={this.props.closeMenu}
                      switchTableClick={this.props.switchTableClick}
                      togglePopup={this.props.togglePopup}
                      renameIsError={this.props.renameIsError}
                      checkTableName={this.props.checkTableName}
                      updateTable={this.props.updateTable}
                      deleteTable={this.props.deleteTable}
                      addTableClick={this.props.addTableClick}
                      coworkers={this.props.coworkers}
                      user={this.props.user}/>
                {currentTable &&
                <View currentTable={currentTable}
                      tables={this.props.tables}
                      recordData={recordData}
                      openRecordDialog={this.props.openRecordDialog}
                      recordDialogIndex={this.props.recordDialogIndex}
                      keyPressCommentHandler={this.keyPressCommentHandler}
                      uploadAttachment={this.props.uploadAttachment}
                      deleteFile={this.props.deleteFile}
                      user={this.props.user}
                      onChangeSearch={this.props.changeSearch}
                      searchMatchedRecordItemIdList={this.props.searchMatchedRecordItemIdList}
                      searchFoundIndex={this.props.searchFoundIndex}
                      onChangeSearchFoundIndex={this.props.changeSearchFoundIndex}
                      onToggleSearch={this.props.toggleSearch}
                      searchBlockOpen={this.props.searchBlockOpen}
                      currentView={currentTable.views[0].view._id}
                      addRecord={this.props.addRecord}
                      addField={this.props.addField}
                      changeFieldType={this.props.changeFieldType}
                      changeFieldName={this.props.changeFieldName}
                      deleteField={this.props.deleteField}
                      deleteRecord={this.props.deleteRecord}
                      changeView={this.props.changeView}
                      sortRecords={this.props.sortRecords}
                      filterRecords={this.props.filterRecords}
                      filteredRecords={this.props.filteredRecords}
                      removeFilter={this.props.removeFilter}/>
                }
            </div>
        );
    }
}

Tools.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Tools;