import Tools from './tools/tools';
import { connect } from 'react-redux';
import { getBaseById, addTable, switchTable, getTables } from './dashboardActions';
import R from 'ramda';

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps, 'ownProps')
	return ({
		base: state.dashboardReducer.base,
		tables: state.dashboardReducer.tables,
		baseId: ownProps.params.baseId,
		currentTableId: ownProps.params.tableId
	});
}

const mapDispatchToProps = {
    addTableClick: addTable,
    switchTableClick: switchTable,
    // getAllTables: getTables,
    getBaseCurrent: getBaseById
};

const Dashboard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tools);

export default Dashboard;