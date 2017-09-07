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

const setTableIdToActiveModal = (tableId) => ({
    type: 'SET_TABLE_ID_TO_ACTIVE_MODAL',
    tableId: tableId
});

const addTable = ({table, baseId}) => ({
    type: 'ADD_TABLE',
    table: table,
    baseId: baseId
});

const switchTable = (tableId) => ({
    type: 'SWITCH_TABLE',
    tableId: tableId
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
};

const setTabsModal = (activeModal) => {
    return {
        type: 'SET_TABS_MODAL',
        activeModal: activeModal
    };
};

const updateTable = (newData, tableId) => {
    return {
        type: 'UPDATE_TABLE',
        newData,
        tableId
    };
};

const checkTableName = (renameIsError) => {
    return {
        type: 'CHECK_TABLE_NAME',
        renameIsError: renameIsError
    };
};

const addRecord = (tableId) => {
    return {
        type: 'ADD_RECORD',
        tableId
    };
};

export function addField(tableId) {
    return {
        type: 'ADD_FIELD',
        tableId: tableId
    };
}

const selectRecord = (recordId) => {
    return {
        type: 'SELECT_RECORD',
        recordId: recordId
    };
};

const activateRecord = (recordId) => {
    return {
        type: 'ACTIVATE_RECORD',
        recordId: recordId
    };
};

const changeRecord = (tableId, recordId, data, user) => {
    return {
        type: 'CHANGE_RECORD',
        tableId: tableId,
        recordId: recordId,
        data: data,
        user: user
    };
};

const blurRecord = (recordId) => {
    return {
        type: 'BLUR_RECORD',
        recordId: recordId
    };
};

const blurRecordComponent = (recordId) => {
    return {
        type: 'BLUR_RECORD_COMPONENT',
        recordId: recordId
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

const getCoworkersList = (coworkersByTables, tableId) => {
    return {
        type: 'GET_COWORKERS_LIST',
        coworkersByTables: coworkersByTables,
        tableId: tableId
    };
};

const disconnectSocket = () => {
    return {
        type: 'DISCONNECT_SOCKET'
    };
};

const changeSearch = (query, tableId) => {
    return {
        type: 'CHANGE_SEARCH',
        query: query,
        tableId: tableId
    };
};

const changeSearchFoundIndex = (value) => {
    return {
        type: 'CHANGE_SEARCH_FOUND_INDEX',
        value: value
    };
};

const toggleSearch = () => {
    return {
        type: 'TOGGLE_SEARCH'
    };
};

export function changeView(tableId, viewId) {
    return {
        type: 'CHANGE_VIEW',
        tableId,
        viewId
    };
}

export function addView(tableId, viewType) {
    return {
        type: 'ADD_VIEW',
        tableId: tableId,
        viewType: viewType,
    };
}

export function deleteView(tableId, viewId, viewType) {
    return {
        type: 'DELETE_VIEW',
        tableId: tableId,
        viewId: viewId,
        viewType: viewType,
    };
}

export function sortRecords(table, fieldId, sortOption) {
    return {
        type: 'SORT_TABLE',
        table: table,
        fieldId: fieldId,
        sortOption: sortOption
    };
}

export function filterRecords(tableId, viewId, viewType, fieldId, condition, filterQuery) {
    return {
        type: 'FILTER_TABLE',
        tableId: tableId,
        viewId: viewId,
        viewType: viewType,
        fieldId: fieldId,
        condition: condition,
        filterQuery: filterQuery,
    };
}

export function addFilter(tableId, viewId, viewType, fieldId) {
    return {
        type: 'ADD_FILTER',
        tableId: tableId,
        viewId: viewId,
        viewType: viewType,
        fieldId: fieldId,
    };
}

export function removeFilter(tableId, viewId, viewType, filterId) {
    return {
        type: 'REMOVE_FILTER',
        tableId: tableId,
        viewId: viewId,
        viewType: viewType,
        filterId: filterId,
    };
}

export function changeFieldType(tableId, fieldId, fieldType) {
    return {
        type: 'CHANGE_FIELD_TYPE',
        tableId: tableId,
        fieldId: fieldId,
        fieldType: fieldType
    };
}
export function changeFieldName(tableId, fieldId, fieldName) {
    return {
        type: 'CHANGE_FIELD_NAME',
        tableId: tableId,
        fieldId: fieldId,
        fieldName: fieldName,
    };
}
export function changeFieldOptions(tableId, fieldId, fieldOptions, value) {
    return {
        type: 'CHANGE_FIELD_OPTIONS',
        tableId: tableId,
        fieldId: fieldId,
        fieldOption: fieldOptions,
        currentValue: value
    };
}

export function deleteField(tableId, fieldId) {
    return {
        type: 'DELETE_FIELD',
        tableId: tableId,
        fieldId: fieldId,
    };
}

export function deleteRecord(tableId, recordId) {
    return {
        type: 'DELETE_RECORD',
        tableId: tableId,
        recordId: recordId
    };
}

const uploadAttachment = (data, typeOfFile, record_dataId, tableId) => {
	return {
		type: 'UPLOAD_FILES',
		data: data,
		typeOfFile: typeOfFile,
		record_dataId: record_dataId,
		tableId: tableId
	}
}

const deleteFile = (typeOfFile, record_dataId, tableId, fileNamesStr) => {
    return {
        type: 'DELETE_FILE',
        typeOfFile: typeOfFile,
        record_dataId: record_dataId,
        tableId: tableId,
        fileNamesStr: fileNamesStr
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
    addTableToBaseById,
    setTableIdToActiveModal,
    updateTable,
    addRecord,
    selectRecord,
    activateRecord,
    changeRecord,
    blurRecord,
    blurRecordComponent,
    deleteTable,
    openRecordDialog,
    addComment,
    getCoworkersList,
    disconnectSocket,
    changeSearch,
    changeSearchFoundIndex,
    toggleSearch,
	uploadAttachment,
	deleteFile
};
