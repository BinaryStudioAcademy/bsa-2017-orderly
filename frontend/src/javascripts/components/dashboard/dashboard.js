import Tools from './tools/tools';
import { connect } from 'react-redux';
import { getBaseById, addTable, switchTable, getTables } from './dashboardActions';

const mapStateToProps = (state, ownProps) => {
    return ({
        base: state.dashboardReducer.base,
        tables: state.dashboardReducer.tables,
        current: ownProps.params._id
    });
};

const mapDispatchToProps = {
    addTableClick: addTable,
    switchTableClick: switchTable,
    getAllTables: getTables,
    getBaseById: getBaseById
};

const Dashboard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tools);

export default Dashboard;