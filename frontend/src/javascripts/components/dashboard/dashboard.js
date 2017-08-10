import Tools from './tools/tools';
import { connect } from 'react-redux';
import { addTable, switchTable } from './dashboardActions';


const mapStateToProps = (state, ownProps) => {
    console.log(ownProps, 'ownProps')
    return ({
        tables: state.dashboardReducer.tables,
        current: ownProps.params.id,
        router: state.routing
    });
};

const mapDispatchToProps = {
    addTableClick: addTable,
    switchTableClick: switchTable,
};

const Dashboard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tools);

export default Dashboard;