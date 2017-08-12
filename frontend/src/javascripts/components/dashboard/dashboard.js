import Tools from './tools/tools';
import { connect } from 'react-redux';
import { getBaseById, addTable, switchTable, getTables } from './dashboardActions';

const mapStateToProps = (state, ownProps) => ({
    base: state.dashboardReducer.base,
    tables: state.dashboardReducer.tables,
    currentBase: ownProps.params
});

const mapDispatchToProps = {
    addTableClick: addTable,
    switchTableClick: switchTable,
    getAllTables: getTables,
    getBaseCurrent: getBaseById
};

const Dashboard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tools);

export default Dashboard;