import React, {Component} from 'react';
import Header from './header/header';
import Tabs from './tabs/tabs';
import View from '../../view/view';

import {onGetCoworkersList, tableAddSuccess, shareDeleteTable, shareUpdateTable,
        shareAddingNewRecord, sharingUpdateFieldMeta, sharingRemoveField, sharingRemoveRecord} from '../../../app/socket';
import { getRoleByUserId } from '../dashboardService'

class Tools extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.isRecordSelected = this.isRecordSelected.bind(this);
        this.isRecordActive = this.isRecordActive.bind(this);
        this.activateRecordHandler = this.activateRecordHandler.bind(this);
        this.keyPressRecordHandler = this.keyPressRecordHandler.bind(this);
        this.keyPressSimpleRecordHandler = this.keyPressSimpleRecordHandler.bind(this);
        this.blurRecordHandler = this.blurRecordHandler.bind(this);
        this.blurRecordComponentHandler = this.blurRecordComponentHandler.bind(this);
        this.keyPressCommentHandler = this.keyPressCommentHandler.bind(this);
        this.changeCheckboxHandler = this.changeCheckboxHandler.bind(this);
        this.mouseDownRecordItemHandler = this.mouseDownRecordItemHandler.bind(this);
        this.mouseOverRecordItemHandler = this.mouseOverRecordItemHandler.bind(this);

        this.state = {
            currentUserRole: ''
        }

    }

    componentWillMount() {
        this.props.getBaseCurrent(this.props.baseId, this.props.currentTableId);
        this.props.getUser();
        this.props.getMembersByBaseId(this.props.baseId)

    }

    componentWillReceiveProps(nextProps) {
		    this.setState({currentUserRole: getRoleByUserId(R.path(['_id'], nextProps.user), nextProps.members)})
    }

    componentDidMount() {

        const _this = this;
        onGetCoworkersList((coworkersByTables) => {
            _this.props.getCoworkersList(coworkersByTables, _this.props.currentTableId);
        });

        tableAddSuccess((table) => {
            _this.props.addTableSucceed(table, _this.props.baseId)
        })

	    shareDeleteTable(tableId => {
	        _this.props.deleteTableSuccess(tableId)
        })

        shareUpdateTable(table => {
            _this.props.updateTableSuccess(table)
        })

        shareAddingNewRecord(table => {
            _this.props.addRecordSuccess(table)
        })

	    sharingUpdateFieldMeta(table => {
	        _this.props.updateFieldSucceeded(table)
        })

	    sharingRemoveField(table => {
	        _this.props.deleteFieldSuccess(table)
        })

	    sharingRemoveRecord(table => {
	        _this.props.deleteRecordSuccess(table)
        })

	    this.context.router.listenBefore((location, done) => {
            if (!location.pathname.startsWith('/dashboard/' + _this.props.baseId + '/')) {
                _this.props.disconnectSocket();
            }
            done(location);
        });

        window.addEventListener("beforeunload", (event) => {
            _this.props.disconnectSocket();
        });

        window.addEventListener("keydown", (event) => {
            if (event.keyCode === 17) {
                _this.props.shiftKeyDown();
            }
        });

        window.addEventListener("keyup", (event) => {
            if (event.keyCode === 17) {
                _this.props.shiftKeyUp();
            }
        });

        window.addEventListener("mouseup", (event) => {
            const isRecordItemClicked = this.hasParentClass(event.target, ['table-cell-inner', 'modals']);
            _this.props.mouseUpRecordItem(isRecordItemClicked);
        });
    }

    hasParentClass(element, classNameList) {
        do {
            if (element.classList) {
                for (let i = 0; i < classNameList.length; i++) {
                    if (element.classList.contains(classNameList[i])) {
                        return true;
                    }
                }
            }
            element = element.parentNode;
        } while (element);
        return false;
    }

    isRecordSelected(id) {
        return this.props.selectedRecordItemId === id;
    }

    isRecordActive(id) {
        return this.props.activeRecordItemId === id;
    }

    activateRecordHandler(id) {
	    if (this.props.currentRole !== 'readOnly') this.props.activateRecord(id);
    }

    keyPressRecordHandler(id) {
        if (!this.isRecordActive(id) && this.props.currentRole !== 'readOnly') {
            this.props.changeRecord(this.props.currentTableId, id, '', this.props.user);
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
        if (!this.props.isShiftKeyPressed) {
            this.props.blurRecord(this.props.currentTableId, id);
        }
    }

    blurRecordComponentHandler(id, value) {
	    if (this.props.currentRole !== 'readOnly')
	    	this.props.changeRecord(this.props.currentTableId, id, value, this.props.user);
        this.props.blurRecordComponent(this.props.currentTableId, id);
    }

    keyPressCommentHandler(userId, recordId, tableId, comment) {
        this.props.addComment(userId, recordId, tableId, comment);
    }

    changeCheckboxHandler(id, value) {
        this.props.changeRecord(this.props.currentTableId, id, value, this.props.user);
    }

    mouseDownRecordItemHandler(event, id, recordIndex, fieldIndex) {
        if (event.shiftKey && this.props.selectedRecordItemId && !this.props.selectedRecordItemList.length) {
            this.props.setSelectRecordItems(this.props.selectedRecordItemId, id, this.props.currentTableId)
        } else {
            if (event.shiftKey && this.props.selectedRecordItemId ) {
                this.props.setSelectRecordItems(this.props.selectedRecordItemId, id, this.props.currentTableId)
            } else {
                this.props.mouseDownRecordItem(this.props.currentTableId, id, recordIndex, fieldIndex);
            }
        }
    }

    mouseOverRecordItemHandler(event, id, recordIndex, fieldIndex) {
        if (this.props.isMouseDownPressed && event.shiftKey) {
            this.props.mouseOverRecordItem(this.props.currentTableId, id, recordIndex, fieldIndex);
        }
    }

    render() {
        const currentTable = R.find(R.propEq('_id', this.props.currentTableId))(this.props.tables);
        const recordData = {
            isRecordSelected: this.isRecordSelected,
            isRecordActive: this.isRecordActive,
            activateRecordHandler: this.activateRecordHandler,
            keyPressRecordHandler: this.keyPressRecordHandler,
            keyPressSimpleRecordHandler: this.keyPressSimpleRecordHandler,
            blurRecordHandler: this.blurRecordHandler,
            blurRecordComponentHandler: this.blurRecordComponentHandler,
            changeCheckboxHandler: this.changeCheckboxHandler,
            mouseDownRecordItemHandler: this.mouseDownRecordItemHandler,
            mouseOverRecordItemHandler: this.mouseOverRecordItemHandler
        };
        return (
            <div onClick={event => {
                // this.props.closeMenu();
            }}>
                <Header base={this.props.base}
                        currentRole={this.props.currentRole}
                        tables={this.props.tables}
                        user={this.props.user}
                        members={this.props.members}
                        menu={this.props.menu}
                        handleClick={this.props.handleClick}/>
                <Tabs base={this.props.base}
                      currentRole={this.props.currentRole}
                      members={this.props.members}
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
                      collaborators={this.props.collaborators}
                      user={this.props.user}/>
                {currentTable &&
                <View currentRole = {this.props.currentRole}
                      currentTable={currentTable}
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
                      currentView={currentTable.currentView}
                      addRecord={this.props.addRecord}
                      addField={this.props.addField}
                      changeFieldType={this.props.changeFieldType}
                      changeFieldName={this.props.changeFieldName}
                      updateViewHideField={this.props.updateViewHideField}
                      changeFieldOptions={this.props.changeFieldOptions}
                      deleteField={this.props.deleteField}
                      deleteRecord={this.props.deleteRecord}
                      changeView={this.props.changeView}
                      addView={this.props.addView}
                      deleteView={this.props.deleteView}
                      addFilter={this.props.addFilter}
                      updateFilter={this.props.updateFilter}
                      removeFilter={this.props.removeFilter}
                      removeAllFilters={this.props.removeAllFilters}
                      addSort={this.props.addSort}
                      updateSort={this.props.updateSort}
                      removeSort={this.props.removeSort}
                      removeAllSorts={this.props.removeAllSorts}
                      setSelectFieldRecordItems={this.props.setSelectFieldRecordItems}
                      appendSelectFieldRecordItems={this.props.appendSelectFieldRecordItems}
                      setSelectAllRecordItems={this.props.setSelectAllRecordItems}
                      selectedRecordItemList={this.props.selectedRecordItemList}
                />
                }
            </div>
        );
    }
}

Tools.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Tools;