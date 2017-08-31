import Tools from './tools/tools';
import {connect} from 'react-redux';
import {
    getBaseById, addTable, switchTable, closeMenu, checkTableName,
    setActive, togglePopup, openMenu, setTabsModal, updateTable, addRecord, addField, deleteTable,
    selectRecord, activateRecord, changeRecord, blurRecord, blurRecordComponent,
    changeFieldType, openRecordDialog, addComment, getCoworkersList, setTableIdToActiveModal,
    changeView, sortRecords, filterRecords, removeFilter, changeFieldName, deleteRecord, deleteField
} from './dashboardActions';
import {getCurrentUser} from '../userProfile/userProfileActions';

const mapStateToProps = (state, ownProps) => {
    return ({
        base: state.dashboardReducer.base,
        menu: state.baseStore.showMenuforBase,
        tables: state.dashboardReducer.tables,
        activeModal: state.dashboardReducer.activeModal,
        baseId: ownProps.params.baseId,
        currentTableId: ownProps.params.tableId,
        addPopupIsOpen: state.dashboardReducer.addPopupIsOpen,
        renameIsError: state.dashboardReducer.renameIsError,
        selectedRecordId: state.dashboardReducer.selectedRecordId,
        activeRecordId: state.dashboardReducer.activeRecordId,
        recordDialogIndex: state.dashboardReducer.recordDialogIndex,
        coworkers: state.dashboardReducer.coworkers,
        tableIdActiveModal: state.dashboardReducer.tableIdActiveModal,
        user: state.userProfile.user,
        filteredRecords: state.dashboardReducer.filteredRecords
    });
};

const mapDispatchToProps = {
    addTableClick: addTable,
    switchTableClick: switchTable,
    getBaseCurrent: getBaseById,
    setActive: setActive,
    togglePopup: togglePopup,
    openMenu: openMenu,
    closeMenu: closeMenu,
    setTabsModal: setTabsModal,
    checkTableName: checkTableName,
    updateTable: updateTable,
    deleteTable: deleteTable,
    addRecord: addRecord,
    addField: addField,
    selectRecord: selectRecord,
    activateRecord: activateRecord,
    changeRecord: changeRecord,
    blurRecord: blurRecord,
    blurRecordComponent: blurRecordComponent,
    changeFieldType: changeFieldType,
    openRecordDialog: openRecordDialog,
    addComment: addComment,
    getUser: getCurrentUser,
    getCoworkersList: getCoworkersList,
    setTableIdToActiveModal: setTableIdToActiveModal,
    changeView: changeView,
    sortRecords: sortRecords,
    filterRecords: filterRecords,
    removeFilter: removeFilter,
    changeFieldName: changeFieldName,
    deleteField: deleteField,
    deleteRecord: deleteRecord,
};

const Dashboard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tools);

export default Dashboard;