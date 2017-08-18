import Tools from './tools/tools';
import { connect } from 'react-redux';
import { getBaseById, addTable, switchTable, closeMenu, checkTableName,
	setActive, togglePopup, openMenu, setTabsModal, updateTable,
	selectRecord, activateRecord, changeRecord, blurRecord, blurRecordComponent } from './dashboardActions';
import { addField } from '../view/viewActions';

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps, 'ownProps');
	return ({
		base: state.dashboardReducer.base,
		tables: state.dashboardReducer.tables,
		activeModal: state.dashboardReducer.activeModal,
		baseId: ownProps.params.baseId,
		currentTableId: ownProps.params.tableId,
		addPopupIsOpen: state.dashboardReducer.addPopupIsOpen,
		renameIsError: state.dashboardReducer.renameIsError,
        selectedRecordId: state.dashboardReducer.selectedRecordId,
        activeRecordId: state.dashboardReducer.activeRecordId
	});
}

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
	addField: addField,
    selectRecord: selectRecord,
    activateRecord: activateRecord,
    changeRecord: changeRecord,
    blurRecord: blurRecord,
    blurRecordComponent: blurRecordComponent
};

const Dashboard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tools);

export default Dashboard;