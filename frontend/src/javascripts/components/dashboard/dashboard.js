import Tools from './tools/tools';
import { connect } from 'react-redux';
import { getBaseById, addTable, switchTable, closeMenu, checkTableName,
	setActive, togglePopup, openMenu, setTabsModal, updateTable } from './dashboardActions';

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps, 'ownProps')
	return ({
		base: state.dashboardReducer.base,
		tables: state.dashboardReducer.tables,
		activeModal: state.dashboardReducer.activeModal,
		baseId: ownProps.params.baseId,
		currentTableId: ownProps.params.tableId,
		addPopupIsOpen: state.dashboardReducer.addPopupIsOpen,
		renameIsError: state.dashboardReducer.renameIsError
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
	updateTable: updateTable

};

const Dashboard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tools);

export default Dashboard;