const getBaseById = (_id, tableId) => ({
    type: 'GET_BASE',
    _id: _id,
    tableId: tableId
});

const getTables = () => ({
    type: 'GET_TABLES'
});

const deleteTable = (tableId) => ({
    type: 'DELETE_TABLE',
    tableId: tableId
});

const togglePopup = () => ({
    type: 'TOGGLE_POPUP'
});

const setActive = (tableId) => ({
    type: 'SET_ACTIVE_TAB',
    tableId: tableId
});

const addTable = ({table, baseId}) => ({
    type: 'ADD_TABLE',
    table: table,
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

const updateTable = (newData, tableId) => {
    return {
        type: 'UPDATE_TABLE',
        newData,
        tableId
    }
}

const checkTableName = (renameIsError) => {
    return {
        type: 'CHECK_TABLE_NAME',
        renameIsError: renameIsError
    }
}

const addRecord = (tableId) => {
    return {
        type: 'ADD_RECORD',
        tableId
    };
};

const selectRecord = (recordId) => {
    return {
        type: 'SELECT_RECORD',
        recordId: recordId
    };
}

const activateRecord = (recordId) => {
    return {
        type: 'ACTIVATE_RECORD',
        recordId: recordId
    };
}

const changeRecord = (tableId, recordId, data, user) => {
    return {
        type: 'CHANGE_RECORD',
        tableId: tableId,
        recordId: recordId,
        data: data,
        user: user
    };
}

const blurRecord = (recordId) => {
    return {
        type: 'BLUR_RECORD',
        recordId: recordId
    };
}

const blurRecordComponent = (recordId) => {
    return {
        type: 'BLUR_RECORD_COMPONENT',
        recordId: recordId
    };
}

const changeFieldType = (fieldId, records) => {
    return {
        type: 'CHANGE_FIELD_TYPE',
        fieldId: fieldId,
        records: records
    };
};

const openRecordDialog = (index) => {
    return {
        type: 'OPEN_RECORD_DIALOG',
        index: index,

    };
};

const addComment = (userId, recordId, tableId, comment) => {
    return {
        type: 'ADD_COMMENT',
        userId: userId,
        recordId: recordId,
        tableId: tableId,
        comment: comment
    };
};

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
    addTableToBaseById,
    updateTable,
    addRecord,
    selectRecord,
    activateRecord,
    changeRecord,
    blurRecord,
    blurRecordComponent,
    deleteTable,
    changeFieldType,
    openRecordDialog,
    addComment
};
