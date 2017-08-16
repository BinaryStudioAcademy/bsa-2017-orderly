import Tools from './tools/tools';
import { connect } from 'react-redux';
import { getBaseById, addTable, switchTable, closeMenu, checkRenameInput,
	setActive, togglePopup, openMenu, setTabsModal } from './dashboardActions';

const mapStateToProps = (state, ownProps) => ({
    base: state.dashboardReducer.base,
    tables: state.dashboardReducer.tables,
    activeModal: state.dashboardReducer.activeModal,
    renameIsError: state.dashboardReducer.renameIsError,
    baseId: ownProps.params.baseId,
    currentTableId: ownProps.params.tableId,
    addPopupIsOpen: state.dashboardReducer.addPopupIsOpen,
});

const mapDispatchToProps = {
    addTableClick: addTable,
    switchTableClick: switchTable,
    getBaseCurrent: getBaseById,
    setActive: setActive,
    togglePopup: togglePopup,
    openMenu: openMenu,
    closeMenu: closeMenu,
    setTabsModal: setTabsModal,
    checkRenameInput: checkRenameInput
};

const Dashboard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tools);

export default Dashboard;