import Tools from './tools/tools';
import { connect } from 'react-redux';
import { addTable, switchTable, getTables } from './dashboardActions';

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps, 'ownProps');
    return ({
        tables: state.dashboardReducer.tables,
        current: ownProps.params._id
    });
};

const mapDispatchToProps = {
    addTableClick: addTable,
    switchTableClick: switchTable,
    getAllTables: getTables
};

const Dashboard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tools);

export default Dashboard;