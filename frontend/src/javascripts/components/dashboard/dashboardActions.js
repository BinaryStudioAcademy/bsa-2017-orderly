const getBaseById = (_id, tableId) => ({
    type: 'GET_BASE',
    _id: _id,
    tableId: tableId
});

const getTables = () => ({
    type: 'GET_TABLES'
});

const togglePopup = () => ({
    type: 'TOGGLE_POPUP'
});

const setActive = (tableId) => ({
    type: 'SET_ACTIVE_TAB',
    tableId: tableId
});

const addTable = ({name, baseId}) => ({
    type: 'ADD_TABLE',
    name: name,
    baseId: baseId
});

const switchTable = (_id) => ({
    type: 'SWITCH_TABLE',
    _id: _id
});

const openMenu = (tableId) => ({
    type: 'OPEN_EDIT_MENU',
    tableId: tableId
});

const closeMenu = () => ({
    type: 'CLOSE_EDIT_MENU'
});

const addTableToBaseById = (baseId) => {
    return {
        type: 'ADD_TABLE_TO_BASE',
        baseId
    };
}

const setTabsModal = (activeModal) => {
	return {
		type: 'SET_TABS_MODAL',
		activeModal: activeModal
	}
}

const checkTableName = (renameIsError) => {
	return {
		type: 'CHECK_TABLE_NAME',
		renameIsError: renameIsError
	}
}

export {
    getBaseById,
    getTables,
    setActive,
    addTable,
    switchTable,
    togglePopup,
    openMenu,
    closeMenu,
	setTabsModal,
	checkTableName,
    addTableToBaseById
};
