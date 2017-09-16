export const getBaseById = (_id, tableId) => ({
    type: 'GET_BASE',
    _id: _id,
    tableId: tableId
});

export const deleteTable = (tableId) => ({
    type: 'DELETE_TABLE',
    tableId: tableId
});

export const togglePopup = () => ({
    type: 'TOGGLE_POPUP'
});

export const setActive = (tableId) => ({
    type: 'SET_ACTIVE_TAB',
    tableId: tableId
});

export const setTableIdToActiveModal = (tableId) => ({
    type: 'SET_TABLE_ID_TO_ACTIVE_MODAL',
    tableId: tableId
});

export const addTable = ({table, baseId}) => ({
    type: 'ADD_TABLE',
    table: table,
    baseId: baseId
});

export const switchTable = (tableId) => ({
    type: 'SWITCH_TABLE',
    tableId: tableId
});

export const openMenu = (tableId) => ({
    type: 'OPEN_EDIT_MENU',
    tableId: tableId
});

export const closeMenu = () => ({
    type: 'CLOSE_EDIT_MENU'
});

export const setTabsModal = (activeModal) => {
    return {
        type: 'SET_TABS_MODAL',
        activeModal: activeModal
    };
};

export const updateTable = (newData, tableId) => {
    return {
        type: 'UPDATE_TABLE',
        newData,
        tableId
    };
};

export const checkTableName = (renameIsError) => {
    return {
        type: 'CHECK_TABLE_NAME',
        renameIsError: renameIsError
    };
};

export const addRecord = (tableId) => {
    return {
        type: 'ADD_RECORD',
        tableId
    };
};

export function addField(tableId, currentViewId) {
    return {
        type: 'ADD_FIELD',
        tableId: tableId,
        currentViewId: currentViewId,
    };
}

export const selectRecordItem = (recordId) => {
    return {
        type: 'SELECT_RECORD_ITEM',
        recordId: recordId
    };
};

export const activateRecord = (recordId) => {
    return {
        type: 'ACTIVATE_RECORD',
        recordId: recordId
    };
};

export const changeRecord = (tableId, recordId, data, user) => {
    return {
        type: 'CHANGE_RECORD',
        tableId: tableId,
        recordId: recordId,
        data: data,
        user: user
    };
};

export const blurRecord = (tableId, recordId) => {
    return {
        type: 'BLUR_RECORD',
        tableId: tableId,
        recordId: recordId
    };
};

export const blurRecordComponent = (tableId, recordId) => {
    return {
        type: 'BLUR_RECORD_COMPONENT',
        tableId: tableId,
        recordId: recordId
    };
};

export const openRecordDialog = (index) => {
    return {
        type: 'OPEN_RECORD_DIALOG',
        index: index,

    };
};

export const addComment = (userId, recordId, tableId, comment) => {
    return {
        type: 'ADD_COMMENT',
        userId: userId,
        recordId: recordId,
        tableId: tableId,
        comment: comment
    };
};

export const getCoworkersList = (coworkersByTables, tableId) => {
    return {
        type: 'GET_COWORKERS_LIST',
        coworkersByTables: coworkersByTables,
        tableId: tableId
    };
};

export const disconnectSocket = () => {
    return {
        type: 'DISCONNECT_SOCKET'
    };
};

export const changeSearch = (query, tableId) => {
    return {
        type: 'CHANGE_SEARCH',
        query: query,
        tableId: tableId
    };
};

export const changeSearchFoundIndex = (value) => {
    return {
        type: 'CHANGE_SEARCH_FOUND_INDEX',
        value: value
    };
};

export const toggleSearch = () => {
    return {
        type: 'TOGGLE_SEARCH'
    };
};

export function changeView(tableId, viewId, viewType) {
    return {
        type: 'CHANGE_VIEW',
        tableId,
        viewId,
        viewType,
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

export function addFilter(tableId, viewId, viewType, fieldId, fieldIndex) {
    return {
        type: 'ADD_FILTER',
        tableId: tableId,
        viewId: viewId,
        viewType: viewType,
        fieldId: fieldId,
        fieldIndex: fieldIndex,
    };
}

export function updateFilter(tableId, viewId, viewType, fieldId, fieldIndex, filterId, condition, filterQuery) {
    return {
        type: 'UPDATE_FILTER',
        tableId: tableId,
        viewId: viewId,
        viewType: viewType,
        fieldId: fieldId,
        fieldIndex: fieldIndex,
        filterId: filterId,
        condition: condition,
        filterQuery: filterQuery,
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

export function removeAllFilters(tableId, viewId, viewType) {
    return {
        type: 'REMOVE_ALL_FILTERS',
        tableId: tableId,
        viewId: viewId,
        viewType: viewType,
    };
}

export function addSort(tableId, viewId, viewType, fieldId, fieldType, sortOption) {
    return {
        type: 'ADD_SORT',
        tableId: tableId,
        viewId: viewId,
        viewType: viewType,
        fieldId: fieldId,
        fieldType: fieldType,
        sortOption: sortOption
    };
}

export function updateSort(tableId, viewId, viewType, fieldId, sortId, sortOption) {
    return {
        type: 'UPDATE_SORT',
        tableId: tableId,
        viewId: viewId,
        viewType: viewType,
        fieldId: fieldId,
        sortId: sortId,
        sortOption: sortOption,
    };
}

export function removeSort(tableId, viewId, viewType, sortId) {
    return {
        type: 'REMOVE_SORT',
        tableId: tableId,
        viewId: viewId,
        viewType: viewType,
        sortId: sortId,
    };
}

export function removeAllSorts(tableId, viewId, viewType) {
    return {
        type: 'REMOVE_ALL_SORTS',
        tableId: tableId,
        viewId: viewId,
        viewType: viewType,
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

export function changeFieldDisplay(tableId, fieldId, display) {
    return {
        type: 'CHANGE_FIELD_DISPLAY',
        tableId: tableId,
        fieldId: fieldId,
        display: display
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

export function deleteField(tableId, fieldId, currentView) {
    return {
        type: 'DELETE_FIELD',
        tableId: tableId,
        fieldId: fieldId,
        currentView: currentView
    };
}

export function deleteRecord(tableId, recordId) {
    return {
        type: 'DELETE_RECORD',
        tableId: tableId,
        recordId: recordId
    };
}

export const uploadAttachment = (data, typeOfFile, record_dataId, tableId) => {
    return {
        type: 'UPLOAD_FILES',
        data: data,
        typeOfFile: typeOfFile,
        record_dataId: record_dataId,
        tableId: tableId
    };
};

export const deleteFile = (typeOfFile, record_dataId, tableId, fileNamesStr) => {
    return {
        type: 'DELETE_FILE',
        typeOfFile: typeOfFile,
        record_dataId: record_dataId,
        tableId: tableId,
        fileNamesStr: fileNamesStr
    };
};

export const setSelectFieldRecordItems = (fieldIndex, tableId) => {
    return {
        type: 'SET_SELECT_FIELD_RECORD_ITEMS',
        fieldIndex: fieldIndex,
        tableId: tableId
    };
};

export const appendSelectFieldRecordItems = (fieldIndex, tableId) => {
    return {
        type: 'APPEND_SELECT_FIELD_RECORD_ITEMS',
        fieldIndex: fieldIndex,
        tableId: tableId
    };
};

export const setSelectAllRecordItems = (tableId) => {
    return {
        type: 'SET_SELECT_ALL_RECORD_ITEMS',
        tableId: tableId
    };
};

export const setSelectRecordItems = (firstSelectRecordItemId, lastSelectRecordItemId, tableId) => {
    return {
        type: 'SET_SELECT_RECORD_ITEMS',
        firstSelectRecordItemId: firstSelectRecordItemId,
        lastSelectRecordItemId: lastSelectRecordItemId,
        tableId: tableId
    };
};

export const shiftKeyDown = () => {
    return {
        type: 'SHIFT_KEY_DOWN'
    };
};

export const shiftKeyUp = () => {
    return {
        type: 'SHIFT_KEY_UP'
    };
};

export const clearSelectedRecordItemList = () => {
    return {
        type: 'CLEAR_SELECTED_RECORD_ITEM_LIST'
    };
};

export const mouseDownRecordItem = (tableId, recordItemId, recordIndex, fieldIndex) => {
    return {
        type: 'MOUSE_DOWN_RECORD_ITEM',
        tableId: tableId,
        recordItemId: recordItemId,
        recordIndex: recordIndex,
        fieldIndex: fieldIndex
    };
};

export const mouseUpRecordItem = (isRecordItemClicked) => {
    return {
        type: 'MOUSE_UP_RECORD_ITEM',
        isRecordItemClicked: isRecordItemClicked
    };
};

export const mouseOverRecordItem = (tableId, recordItemId, recordIndex, fieldIndex) => {
    return {
        type: 'MOUSE_OVER_RECORD_ITEM',
        tableId: tableId,
        recordItemId: recordItemId,
        recordIndex: recordIndex,
        fieldIndex: fieldIndex
    };
};

export const saveCurrentTeamRoles = (collaborators) => {
    return {
        type: 'SAVE_CURRENT_TEAM_ROLES',
        collaborators: collaborators
    };
};

export const getMembersByBaseId = (baseId) => {
    return {
        type: 'GET_MEMBERS_BY_BASE_ID',
        baseId: baseId
    };
};

export const addTableSucceed = (table, baseId) => {
    return {
        type: 'ADD_TABLE_SUCCEEDED',
        payload: {
            table: table,
            baseId: baseId,
            isWillActive: false
        }
    };
};

export const deleteTableSuccess = (tableId) => {
    return {
        type: 'DELETE_TABLE_SUCCEEDED',
        payload: {
            tableId: tableId
        }
    };
};

export const updateTableSuccess = (table) => {
    return {
        type: 'RENAME_TABLE_SUCCEEDED',
        changedTable: table,
        isWillNotActive: true
    };
};

export const addRecordSuccess = (table) => {
    return {
        type: 'ADD_RECORD_SUCCEEDED',
        payload: {
            tableId: table._id,
            table: table
        }
    };
};

export const updateFieldSucceeded = (table) => {
    return {
        type: 'UPDATE_FIELD_SUCCEEDED',
        table: table
    };
};

export const deleteFieldSuccess = (table) => {
    return {
        type: 'DELETE_FIELD_SUCCEEDED',
        table: table
    };
};

export const deleteRecordSuccess = (table) => {
    return {
        type: 'DELETE_RECORD_SUCCEEDED',
        table: table
    };
};
