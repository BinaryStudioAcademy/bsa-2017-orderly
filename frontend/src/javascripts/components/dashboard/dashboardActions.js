const getBaseById = (_id, tableId) => {
    return {
        type: 'GET_BASE',
        _id: _id,
        tableId: tableId
    };
};

const getTables = () => {
    return {
        type: 'GET_TABLES'
    };
};

const togglePopup = () => {
    return {
        type: 'TOGGLE_POPUP'
    };
};

const setActive = (tableId) => {
    return {
        type: 'SET_ACTIVE_TAB',
        tableId: tableId
    };
};

const addTable = ({name, baseId}) => {
    return {
        type: 'ADD_TABLE',
        name: name,
        baseId: baseId
    };
};

const switchTable = (_id) => {
    return {
        type: 'SWITCH_TABLE',
        _id: _id
    };
};

const openMenu = (tableId) => {
    return {
        type: 'OPEN_EDIT_MENU',
        tableId: tableId
    };
};

const closeMenu = () => {
    return {
        type: 'CLOSE_EDIT_MENU'
    };
};

const setTabsModal = (activeModal) => {
	return {
		type: 'SET_TABS_MODAL',
		activeModal: activeModal
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
	setTabsModal
};
