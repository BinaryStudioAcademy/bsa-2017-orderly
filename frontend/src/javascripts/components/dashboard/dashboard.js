import Tools from './tools/tools';
import { connect } from 'react-redux';
import { getBaseById, addTable, switchTable, closeMenu,
	setActive, togglePopup, openMenu, getRecordsByTableId } from './dashboardActions';

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps, 'ownProps')
	return ({
		base: state.dashboardReducer.base,
		tables: state.dashboardReducer.tables,
		baseId: ownProps.params.baseId,
		currentTableId: ownProps.params.tableId,
		addPopupIsOpen: state.dashboardReducer.addPopupIsOpen
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
	getRecordsByTableId: getRecordsByTableId
};

const Dashboard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tools);

export default Dashboard;