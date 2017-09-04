import R from 'ramda';

const initState = {
    base: '',
    tables: [{
        _id: 0,
        name: '',
        isActive: false
    }],
    addPopupIsOpen: false,
    activeModal: '',
    tableIdActiveModal: '',
    renameIsError: true,
    selectedRecordItemId: null,
    activeRecordItemId: null,
    recordDialogIndex: null,
    coworkers: {},
    searchMatchedRecordItemIdList: [],
    searchFoundIndex: '',
    searchBlockOpen: false,
    currentView: null,
    filteredRecords: null,
};

function dashboardReducer(state = initState, action) {
    switch (action.type) {
    case 'GET_BASE_SUCCEEDED': {
        return R.merge(
            state,
            {base: action.payload.base}
        );
    }
    case 'CHANGE_BASE_PARAM_SUCCESS': {
        return R.merge(
            state,
            {base: action.base}
        );
    }

    case 'SET_ACTIVE_TAB': {
        return R.mergeAll([
            R.dissoc('tables', state),
            {
                tables: R.map((table) => {
                    let tempObj = R.dissoc('isActive', table);
                    tempObj.isActive = table._id === action.tableId;
                    return tempObj;
                })(state.tables),
            },
        ]);
    }

    case 'SET_TABS_MODAL': {
        return R.merge(state, {activeModal: action.activeModal});
    }

    case 'SET_TABLE_ID_TO_ACTIVE_MODAL': {
        return R.merge(state, {tableIdActiveModal: action.tableId});
    }

    case 'CHECK_TABLE_NAME': {
        return R.merge(state, {renameIsError: action.renameIsError});
    }

    case 'GET_TABLES_BY_IDS_SUCCEEDED': {
        return R.mergeAll([
            R.dissoc('tables', state),
            {
                tables: R.map(R.compose(
                    R.assoc('addPopupIsOpen', false),
                    R.assoc('isMenuOpen', false))
                )(action.tables)
            }]);
    }

    case 'ADD_TABLE_SUCCEEDED': {
        return R.mergeAll([
            R.omit(['tables', 'addPopupIsOpen'], state),
            {
                tables: R.concat(
                    R.map(R.compose(R.assoc('isActive', false), R.dissoc('isActive')))(state.tables),
                    [R.assoc('isActive', true, action.payload.table)]
                )
            },
            {addPopupIsOpen: false}
        ]);
    }

    case 'ADD_FIELD_SUCCEEDED': {
        return R.mergeAll([
            R.dissoc('tables', state),
            {
                tables: R.map((table) => {
                    if (table._id === action.payload.tableId) {
                        let obj = R.dissoc('fields', table);
                        obj = R.dissoc('records', obj);
                        obj.fields = action.payload.table.fields;
                        obj.records = action.payload.table.records;
                        return obj;
                    } else {
                        return table;
                    }
                })(state.tables)
            }
        ]);
    }

    case 'TOGGLE_POPUP': {
        return R.mergeAll([
            R.dissoc('addPopupIsOpen', state),
            {
                addPopupIsOpen: !state.addPopupIsOpen
            }
        ]);
    }

    case 'SWITCH_TABLE': {
        return R.mergeAll([
            R.dissoc('tables', R.dissoc('currentView', state)),
            {
                tables: R.map((table) => {
                    let newObj = R.dissoc('isActive', table);
                    newObj.isActive = table._id === action.tableId;
                    return newObj;
                })(state.tables),
                currentView: null,
            },
        ]);
    }

    case 'OPEN_EDIT_MENU': {
        return R.mergeAll([
            R.dissoc('tables', state),
            {
                tables: R.map((table) => {
                    let newObj = R.dissoc('isMenuOpen', table);
                    newObj.isMenuOpen = table._id === action.tableId;
                    return newObj;
                })(state.tables)
            }
        ]);
    }

    case 'CLOSE_EDIT_MENU': {
        return R.mergeAll([
            R.dissoc('tables', state),
            {
                tables: R.map(R.compose(
                    R.assoc('isMenuOpen', false),
                    R.dissoc('isMenuOpen'))
                )(state.tables)
            }
        ]);
    }

    case 'RENAME_TABLE_SUCCEEDED': {
        return R.mergeAll([
            R.dissoc('tables', state),
            {
                tables: R.map((table) => {
                    if (table._id === action.changedTable._id) {
                        const changedTable = action.changedTable;
                        changedTable.isActive = true;
	                    return changedTable;
                    }
                    return table;
                })(state.tables)
            }
        ]);
    }

    case 'ADD_RECORD_SUCCEEDED': {
        return R.mergeAll([
            R.dissoc('tables', state),
            {
                tables: R.map((table) => {
                    if (table._id === action.payload.tableId) {
                        let obj = R.dissoc('records', table);
                        obj.records = action.payload.table.records;
                        return obj;
                    } else {
                        return table;
                    }
                })(state.tables)
            }
        ]);
    }

    case 'SELECT_RECORD':
        return {...state, ...{selectedRecordItemId: action.recordId}};

    case 'ACTIVATE_RECORD':
        return {...state, ...{activeRecordItemId: action.recordId}};

    case 'PERFORM_CHANGE_RECORD': {
        return R.mergeAll([
            R.dissoc('tables', state),
            {
                tables: R.map((table) => {
                    if (table._id === action.tableId) {
                        return R.mergeAll([
                            R.dissoc('records', table),
                            {
                                records: R.map((record) => {
                                    let changes = null;
                                    const recordData = R.addIndex(R.map)((recordItem, fieldIndex) => {
                                        if ((recordItem._id === action.recordId) && (recordItem.data !== action.data)) {
                                            changes = {
                                                'field_id': table.fields[fieldIndex]._id,
                                                'record_id': recordItem._id,
                                                'changed_from': recordItem.data,
                                                'changed_to': action.data
                                            };

                                            let newObj = R.dissoc('data', recordItem);
                                            newObj.data = action.data;
                                            return newObj;
                                        } else {
                                            return recordItem;
                                        }
                                    })(record.record_data);

                                    let history = {};
                                    if (changes) {
                                        history = {
                                            history: R.concat(record.history, [{
                                                collaborator: action.user,
                                                changes: changes
                                            }])
                                        };
                                    }

                                    return R.mergeAll([
                                        R.dissoc('record_data', record),
                                        {
                                            record_data: recordData
                                        },
                                        history
                                    ]);
                                })(table.records)
                            }]);
                    }
                    return table;
                })(state.tables)
            }]);
    }

    case 'BLUR_RECORD': {
        return {...state, ...{selectedRecordItemId: null}};
    }

    case 'BLUR_RECORD_COMPONENT': {
        return {...state, ...{activeRecordItemId: null}};
    }

    case 'DELETE_TABLE_SUCCEEDED': {
        return R.mergeAll([
            R.dissoc('tables', state),
            {
                tables: R.reject(R.propEq('_id', action.payload.tableId))(state.tables)
            }]);
    }

    case 'UPDATE_FIELD_SUCCEEDED': {
        return R.mergeAll([
            R.dissoc('tables', state),
            {
                tables: R.map((table) => {
                    if (table._id === action.table._id) {
                        let obj = R.dissoc('fields', table);
                        obj = R.dissoc('records', obj);
                        obj.fields = action.table.fields;
                        obj.records = action.table.records;
                        return obj;
                    } else {
                        return table;
                    }
                })(state.tables)
            }
        ]);
    }

    case 'DELETE_FIELD_SUCCEEDED': {
        return R.mergeAll([
            R.dissoc('tables', state),
            {
                tables: R.map((table) => {
                    if (table._id === action.table._id) {
                        let obj = R.dissoc('fields', table);
                        obj = R.dissoc('records', obj);
                        obj.fields = action.table.fields;
                        obj.records = action.table.records;
                        return obj;
                    } else {
                        return table;
                    }
                })(state.tables)
            }
        ]);
    }

    case 'DELETE_RECORD_SUCCEEDED': {
        return R.mergeAll([
            R.dissoc('tables', state),
            {
                tables: R.map((table) => {
                    if (table._id === action.table._id) {
                        let obj = R.dissoc('fields', table);
                        obj = R.dissoc('records', obj);
                        obj.fields = action.table.fields;
                        obj.records = action.table.records;
                        return obj;
                    } else {
                        return table;
                    }
                })(state.tables)
            }
        ]);
    }

    case 'OPEN_RECORD_DIALOG': {
        return {...state, ...{recordDialogIndex: action.index}};
    }

    case 'PERFORM_ADD_COMMENT': {
        return R.mergeAll([
            R.dissoc('tables', state),
            {
                tables: R.map((table) => {
                    if (table._id === action.tableId) {
                        return R.mergeAll([
                            R.dissoc('records', table),
                            {
                                records: R.map((record) => {
                                    if ((record._id === action.recordId) && (action.comment)) {
                                        return R.mergeAll([
                                            R.dissoc('comments', record),
                                            {
                                                comments: R.concat(record.comments, [{
                                                    collaborator: action.userId,
                                                    message: action.comment
                                                }])
                                            }
                                        ]);
                                    }
                                    return record;
                                })(table.records)
                            }]);
                    }
                    return table;
                })(state.tables)
            }]);
    }

    case 'GET_COWORKERS_LIST': {
        if (action.coworkersByTables[action.tableId]) {
            return {...state, ...{coworkers: action.coworkersByTables[action.tableId]}};
        }
        return state;
    }

    case 'CHANGE_SEARCH': {
        let searchMatchedRecordItemIdList = [];

        if (action.query !== '') {
            state.tables.forEach((table) => {
                if (table._id === action.tableId) {
                    table.records.forEach((record) => {
                        record.record_data.forEach((recordItem) => {
                            if (recordItem.data.toLowerCase().indexOf(action.query.toLowerCase()) !== -1) {
                                searchMatchedRecordItemIdList.push(recordItem._id);
                            }
                        })
                    })
                }
            });
        }
        return{...state, ...{searchMatchedRecordItemIdList: searchMatchedRecordItemIdList, searchFoundIndex: 0}};
    }

    case 'CHANGE_SEARCH_FOUND_INDEX': {
        if (action.value >= state.searchMatchedRecordItemIdList.length) {
            action.value -= state.searchMatchedRecordItemIdList.length
        }
        if (action.value < 0) {
            action.value += state.searchMatchedRecordItemIdList.length
        }

        return {...state, ...{searchFoundIndex: action.value}};
    }

    case 'TOGGLE_SEARCH': {
        return{...state, ...{searchMatchedRecordItemIdList: [], searchFoundIndex: '', searchBlockOpen: !state.searchBlockOpen}};
    }

    case 'CHANGE_VIEW': {
        return {...state, currentView: action.viewId};
    }

    case 'ADD_VIEW_SUCCEEDED':
    case 'DELETE_VIEW_SUCCEEDED':
    case 'FILTER_RECORDS_SUCCEEDED': {
        return R.mergeAll([
            R.dissoc('tables', state),
            {
                tables: R.map((table) => {
                    if (table._id === action.table._id) {
                        const newTable = action.table;
                        newTable.isActive = true;
                        return newTable;
                    }
                    return table;
                })(state.tables)
            }
        ]);
    }

    case 'SORT_RECORDS': {
        console.log('DASH REDUCER SORT RECORDS');
        console.log(action);
        console.log('-------------------------');
        return {...state};
    }

    case 'REMOVE_FILTER': {
        return {...state, filteredRecords: null};
    }

    default:
        return state;
    }
}

export default dashboardReducer;