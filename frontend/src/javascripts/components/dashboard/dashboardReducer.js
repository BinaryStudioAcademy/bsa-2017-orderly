import R from 'ramda';

const initState = {
    base: '',
    tables: [{   //todo remove cap for new base
        _id: 0,
        name: '',
        isActive: false
    }],
    currentTable: {},
    fieldsRecords: [],
    expandRecords: [],
    addPopupIsOpen: false,
    activeModal: '',
    renameIsError: true,
    selectedRecordId: null,
    activeRecordId: null
};

function dashboardReducer(state = initState, action) {
    switch (action.type) {
    case 'GET_BASE_SUCCEEDED': {
        return R.merge(
            state,
            {base: action.payload.base}
        );
    }

    case 'SET_ACTIVE_TAB': {
        return R.mergeAll([
            R.omit(['tables', 'currentTable'], state),
            {
                tables: R.map((table) => {
                    let tempObj = R.dissoc('isActive', table);
                    if (table._id === action.tableId) tempObj.isActive = true;
                    else tempObj.isActive = false;
                    return tempObj;
                })(state.tables)
            },
            {
                currentTable: R.find(R.propEq('_id', action.tableId))(state.tables)
            }
        ]);
    }

    case 'SET_TABS_MODAL': {
        return R.merge(state, {activeModal: action.activeModal});
    }

    case 'CHECK_TABLE_NAME': {
        return R.merge(state, {renameIsError: action.renameIsError})
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
            R.omit(['tables', 'currentTable', 'addPopupIsOpen'], state),
            {
                tables: R.concat(
                    R.map(R.compose(R.assoc('isActive', false), R.dissoc('isActive')))(state.tables),
                    [R.assoc('isActive', true, action.payload.table)]
                )
            },
            {
                currentTable: action.payload.table
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
            R.omit(['tables', 'currentTable'], state),
            {
                tables: R.map((table) => {
                    let newObj = R.dissoc('isActive', table);
                    if (table._id === action._id) newObj.isActive = true;
                    else newObj.isActive = false;
                    return newObj;
                })(state.tables)
            },
            {
                currentTable: R.find(R.propEq('_id', action._id))(state.tables)
            }]);
    }

    case 'OPEN_EDIT_MENU': {
        return R.mergeAll([
            R.dissoc('tables', state),
            {
                tables: R.map((table) => {
                    let newObj = R.dissoc('isMenuOpen', table);
                    if (table._id === action.tableId) newObj.isMenuOpen = true;
                    else newObj.isMenuOpen = false;
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
                    if (table._id === action.changedTable._id) return action.changedTable;
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
        return {...state, ...{selectedRecordId: action.recordId}};

    case 'ACTIVATE_RECORD':
        return {...state, ...{activeRecordId: action.recordId}};

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
                                    return R.mergeAll([
                                        R.dissoc('record_data', record),
                                        {
                                            record_data: R.map((recordItem) => {
                                                if (recordItem._id === action.recordId) {
                                                    let newObj = R.dissoc('data', recordItem);
                                                    newObj.data = action.data;
                                                    return newObj;
                                                } else {
                                                    return recordItem;
                                                }
                                            })(record.record_data)
                                        }]);
                                })(table.records)
                            }]);
                    }
                    return table;
                })(state.tables)
            }]);
    }

    case 'BLUR_RECORD': {
        return {...state, ...{selectedRecordId: null}};
    }

    case 'BLUR_RECORD_COMPONENT': {
        return {...state, ...{activeRecordId: null}};
    }

    case 'DELETE_TABLE_SUCCEEDED': {
        return R.mergeAll([
            R.dissoc('tables', state),
            {
                tables: R.reject(R.propEq('_id', action.payload.tableId))(state.tables)
            }]);
    }

    case 'CHANGE_FIELD_TYPE': {
        return {...state};
    }

    case 'UPDATE_TABLE_DATA': {
        return R.mergeAll([
            R.omit(['fieldsRecords'], state),
            {
                fieldsRecords: action.fieldsRecords
            },
            {
                expandRecords: action.expandRecords
            }]);
    }

    default:
        return state;
    }
}

export default dashboardReducer;
