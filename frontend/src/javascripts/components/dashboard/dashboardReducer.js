import R from 'ramda'

const initState = {
    base: '',
    tables: [{
        _id: 0,
        name: '',
        isActive: false,
        currentView: null,
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
    selectedRecordItemList: [],
    isShiftKeyPressed: false,
    isMouseDownPressed: false,
    collaborators: {},
    members: {},
    lastMouseDownRecordId: null
};

function dashboardReducer(state = initState, action) {
    switch (action.type) {
    case 'GET_BASE_SUCCEEDED': {
        return R.merge(
            state,
            {base: action.payload.base}
        );
    }

    case 'GET_MEMBERS_BY_BASE_ID_SUCCESSED': {
        return R.merge(
            state,
            {members: R.map(R.dissoc('_id'))(action.members)}
        )
    }

    case 'SAVE_CURRENT_TEAM_ROLES': {
        return R.merge(
            state,
            {collaborators: action.collaborators}
        )
    }

    case 'CHANGE_BASE_PARAM_SUCCESS': {
        return R.merge(
            state,
            {base: action.base}
        );
    }

    case 'SET_ACTIVE_TAB': {
        return R.mergeAll([
            R.omit(['tables'], state),
            {
                tables: R.map((table) => {
                    let tempObj = R.dissoc('isActive', table);
                    tempObj.isActive = table._id === action.tableId;
                    tempObj.currentView = table.views[0].view._id;
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
                    (table) => R.assoc('currentView', R.path(['views', '0', 'view', '_id'], table), table),
                    R.assoc('addPopupIsOpen', false),
                    R.assoc('isMenuOpen', false))
                )(action.tables)
            }]);
    }

    case 'ADD_TABLE_SUCCEEDED': {
        const isWillActive = Boolean(action.payload.isWillActive)
	    if (!R.contains(action.payload.table._id, R.pluck('_id', state.tables))) {return R.mergeAll([
            R.omit(['tables', 'addPopupIsOpen'], state),
            {
                tables: R.concat(
                    R.map(R.compose(R.assoc('isActive', false), R.dissoc('isActive')))(state.tables),
                    [R.assoc('isActive', isWillActive, action.payload.table)]
                ),
            },
            {addPopupIsOpen: false}
        ]);
    } else return state
    }

    case 'ADD_FIELD_SUCCEEDED': {
        return R.mergeAll([
            R.dissoc('tables', state),
            {
                tables: R.map((table) => {
                    if (table._id === action.payload.tableId) {
                        let obj = R.omit(['fields', 'records', 'views', 'fillteredRecords'], table);
                        obj.fields = action.payload.table.fields;
                        obj.records = action.payload.table.records;
                        obj.views = action.payload.table.views;
                        obj.filteredRecords = action.payload.table.filteredRecords;
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
            R.omit(['tables'], state),
            {
                tables: R.map((table) => {
                    let newObj = R.omit(['isActive', 'currentView'], table);
                    newObj.isActive = table._id === action.tableId;
                    newObj.currentView = table.views[0].view._id;
                    return newObj;
                })(state.tables),
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
                        changedTable.isActive = R.isNil(action.isWillNotActive);
                        changedTable.currentView = table.currentView;
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

    case 'SELECT_RECORD_ITEM':
        return {...state, ...{selectedRecordItemId: action.recordId}};

    case 'ACTIVATE_RECORD':
        return {...state, ...{activeRecordItemId: action.recordId}};

    case 'PERFORM_CHANGE_RECORD': {
            return R.mergeAll([
            R.omit(['tables', 'lastMouseDownRecordId'], state),
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
                })(state.tables),
                lastMouseDownRecordId: action.recordId
            }]);
    }

    case 'BLUR_RECORD': {
        if (action.recordId === state.lastMouseDownRecordId) {
            return {...state, ...{lastMouseDownRecordId: null}};
        } else {
            const selectedRecordItemId = (action.recordId === state.selectedRecordItemId) ? null : state.selectedRecordItemId;
            const activeRecordItemId = (action.recordId === state.activeRecordItemId) ? null : state.activeRecordItemId;
            return {...state, ...{selectedRecordItemId: selectedRecordItemId,
                                  activeRecordItemId: activeRecordItemId,
                                  lastMouseDownRecordId: null}};
        }
    }

    case 'BLUR_RECORD_COMPONENT': {
        const selectedRecordItemId = (action.recordId === state.selectedRecordItemId) ? null : state.selectedRecordItemId;
        const activeRecordItemId = (action.recordId === state.activeRecordItemId) ? null : state.activeRecordItemId;
        return {...state, ...{selectedRecordItemId: selectedRecordItemId, activeRecordItemId: activeRecordItemId}};
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
                        let obj = R.omit(['fields', 'records', 'views'], table);
                        obj.fields = action.table.fields;
                        obj.records = action.table.records;
                        obj.views = action.table.views;
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
        lastMouseDownRecordId: action.recordItemId
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

    case 'CHANGE_VIEW_SUCCEEDED': {
        return R.mergeAll([
            R.omit(['tables'], state),
            {
                tables: R.map((table) => {
                    if (table._id === action.payload.tableId) {
                        let newTable = R.omit(['currentView', 'filteredRecords'], table);
                        newTable.currentView = action.payload.viewId;
                        newTable.filteredRecords = action.payload.table.filteredRecords;
                        return newTable;
                    } else {
                        return table;
                    }
                })(state.tables),
            }
        ]);
    }

    case 'ADD_VIEW_SUCCEEDED': {
        return R.mergeAll([
            R.omit(['tables'], state),
            {
                tables: R.map((table) => {
                    if (table._id === action.table._id) {
                        const viewsCount = action.table.views.length;
                        const newTable = action.table;
                        newTable.isActive = true;
                        newTable.currentView = action.table.views[viewsCount - 1].view._id;
                        return newTable;
                    }
                    return table;
                })(state.tables),
            }
        ]);
    }

    case 'DELETE_VIEW_SUCCEEDED': {
        return R.mergeAll([
            R.omit(['tables'], state),
            {
                tables: R.map((table) => {
                    if (table._id === action.table._id) {
                        const newTable = action.table;
                        newTable.isActive = true;
                        newTable.currentView = action.table.views[0].view._id;
                        return newTable;
                    }
                    return table;
                })(state.tables),
            }
        ]);
    }

    case 'ADD_FILTER_SUCCEEDED': {
        return R.mergeAll([
            R.omit(['tables'], state),
            {
                tables: R.map((table) => {
                    if (table._id === action.table._id) {
                        const newTable = R.omit(['views', 'records'], table);
                        newTable.views = action.table.views;
                        newTable.records = action.table.records;
                        return newTable;
                    }
                    return table;
                })(state.tables),
            },
        ]);
    }

    case 'FILTER_TABLE_SUCCEEDED': {
        return R.mergeAll([
            R.omit(['tables'], state),
            {
                tables: R.map((table) => {
                    if (table._id === action.table._id) {
                        const newTable = R.omit(['views', 'records'], table);
                        newTable.views = action.table.views;
                        newTable.records = action.table.records;
                        return newTable;
                    }
                    return table;
                })(state.tables),
            },
        ]);
    }

    case 'REMOVE_FILTER_SUCCEEDED': {
        return R.mergeAll([
            R.omit(['tables'], state),
            {
                tables: R.map((table) => {
                    if (table._id === action.table._id) {
                        const newTable = R.omit(['views', 'records'], table);
                        newTable.views = action.table.views;
                        newTable.records = action.table.records;
                        return newTable;
                    }
                    return table;
                })(state.tables),
            },
        ]);
    }

    case 'REMOVE_ALL_FILTERS_SUCCEEDED': {
        return R.mergeAll([
            R.omit(['tables'], state),
            {
                tables: R.map((table) => {
                    if (table._id === action.table._id) {
                        const newTable = R.omit(['views', 'records'], table);
                        newTable.views = action.table.views;
                        newTable.records = action.table.records;
                        return newTable;
                    }
                    return table;
                })(state.tables),
            },
        ]);
    }

    case 'ADD_SORT_SUCCEEDED': {
        return R.mergeAll([
            R.omit(['tables'], state),
            {
                tables: R.map((table) => {
                    if (table._id === action.table._id) {
                        const newTable = R.omit(['views', 'records'], table);
                        newTable.views = action.table.views;
                        newTable.records = action.table.records;
                        return newTable;
                    }
                    return table;
                })(state.tables),
            },
        ]);
    }

    case 'SORT_TABLE_SUCCEEDED': {
        return R.mergeAll([
            R.omit(['tables'], state),
            {
                tables: R.map((table) => {
                    if (table._id === action.table._id) {
                        const newTable = R.omit(['views', 'records'], table);
                        newTable.views = action.table.views;
                        newTable.records = action.table.records;
                        return newTable;
                    }
                    return table;
                })(state.tables),
            },
        ]);
    }

    case 'REMOVE_SORT_SUCCEEDED': {
        return R.mergeAll([
            R.omit(['tables'], state),
            {
                tables: R.map((table) => {
                    if (table._id === action.table._id) {
                        const newTable = R.omit(['views', 'records'], table);
                        newTable.views = action.table.views;
                        newTable.records = action.table.records;
                        return newTable;
                    }
                    return table;
                })(state.tables),
            },
        ]);
    }

    case 'REMOVE_ALL_SORTS_SUCCEEDED': {
        return R.mergeAll([
            R.omit(['tables'], state),
            {
                tables: R.map((table) => {
                    if (table._id === action.table._id) {
                        const newTable = R.omit(['views', 'records'], table);
                        newTable.views = action.table.views;
                        newTable.records = action.table.records;
                        return newTable;
                    }
                    return table;
                })(state.tables),
            },
        ]);
    }

    case 'SET_SELECT_FIELD_RECORD_ITEMS': {
        let selectedRecordItemList = [];
        state.tables.forEach((table) => {
            if (table._id === action.tableId) {
                table.records.forEach((record, recordIndex) => {
                    selectedRecordItemList.push({id: record.record_data[action.fieldIndex]._id,
                                                   fieldIndex: action.fieldIndex, recordIndex: recordIndex});
                })
            }
        });
        return{...state, ...{selectedRecordItemList: selectedRecordItemList,
               selectedRecordItemId: selectedRecordItemList[0].id}};
    }

    case 'APPEND_SELECT_FIELD_RECORD_ITEMS': {
        let selectedRecordItemList = [],
            maxSelectedFieldIndex,
            minSelectedFieldIndex,
            minFieldIndex,
            maxFieldIndex;

        if (state.selectedRecordItemList.length === 0) {
            let {firstSelectRecordItem} =
                getBoundarySelectedRecordItems(state.tables, action.tableId, state.selectedRecordItemId, null);
            minFieldIndex = firstSelectRecordItem.fieldIndex;
            maxFieldIndex = firstSelectRecordItem.fieldIndex;
        } else {
            minFieldIndex = R.prop('fieldIndex')(R.reduce(R.minBy( R.prop('fieldIndex') ), {fieldIndex: Infinity}, state.selectedRecordItemList));
            maxFieldIndex = R.prop('fieldIndex')(R.reduce(R.maxBy( R.prop('fieldIndex') ), {fieldIndex: -Infinity}, state.selectedRecordItemList));
        }

        if (action.fieldIndex > maxFieldIndex) {
            minSelectedFieldIndex = minFieldIndex;
            maxSelectedFieldIndex = action.fieldIndex;
        } else {
            if (action.fieldIndex < minFieldIndex) {
                minSelectedFieldIndex = action.fieldIndex;
                maxSelectedFieldIndex = maxFieldIndex;
            } else {
                minSelectedFieldIndex = minFieldIndex;
                maxSelectedFieldIndex = maxFieldIndex;
            }
        }

        state.tables.forEach((table) => {
            if (table._id === action.tableId) {
                table.records.forEach((record, recordIndex) => {
                    for (let i = minSelectedFieldIndex; i < maxSelectedFieldIndex + 1; i++) {
                        selectedRecordItemList.push({id: record.record_data[i]._id,
                            fieldIndex: i, recordIndex: recordIndex});
                    }
                })
            }
        });
        return{...state, ...{selectedRecordItemList: selectedRecordItemList} };
    }

    case 'SET_SELECT_ALL_RECORD_ITEMS': {
        let selectedRecordItemList = [];
        state.tables.forEach((table) => {
            if (table._id === action.tableId) {
                table.records.forEach((record, recordIndex) => {
                    for (let i = 0; i < table.fields.length; i++) {
                        selectedRecordItemList.push({id: record.record_data[i]._id,
                            fieldIndex: i, recordIndex: recordIndex});
                    }
                })
            }
        });
        return{...state, ...{selectedRecordItemList: selectedRecordItemList,
               selectedRecordItemId: selectedRecordItemList[0].id}};
    }

    case 'SET_SELECT_RECORD_ITEMS': {
        let {firstSelectRecordItem, lastSelectRecordItem} =
            getBoundarySelectedRecordItems(state.tables, action.tableId,
                                           action.firstSelectRecordItemId, action.lastSelectRecordItemId);
        let selectedRecordItemList = getSelectedRecordItemList (state.tables, action.tableId, firstSelectRecordItem, lastSelectRecordItem);

        return{...state, ...{selectedRecordItemList: selectedRecordItemList, isMouseDownPressed: true} };
    }

    case 'SHIFT_KEY_DOWN': {
        return {...state, isShiftKeyPressed: true};
    }

    case 'SHIFT_KEY_UP': {
        return {...state, isShiftKeyPressed: false};
    }

    case 'CLEAR_SELECTED_RECORD_ITEM_LIST': {
        return {...state, selectedRecordItemList: []};
    }

    case 'MOUSE_DOWN_RECORD_ITEM': {
        let selectedRecordItemList = [];
        /*selectedRecordItemList.push({
            id: action.recordItemId,
            fieldIndex: action.fieldIndex,
            recordIndex: action.recordIndex
        });*/
        return {...state, isMouseDownPressed: true,
            ...{selectedRecordItemId: action.recordItemId,
                selectedRecordItemList: selectedRecordItemList,
                lastMouseDownRecordId: action.recordItemId}};
    }

    case 'MOUSE_UP_RECORD_ITEM': {
        if (action.isRecordItemClicked) {
            return {...state, ...{isMouseDownPressed: false}};
        } else {
            return {...state, ...{isMouseDownPressed: false/*, selectedRecordItemId: null, selectedRecordItemList: []*/}};
        }
    }

    case 'MOUSE_OVER_RECORD_ITEM': {
        let {firstSelectRecordItem, lastSelectRecordItem} =
            getBoundarySelectedRecordItems(state.tables, action.tableId,
                state.selectedRecordItemId, action.recordItemId);
        let selectedRecordItemList = getSelectedRecordItemList (state.tables, action.tableId, firstSelectRecordItem, lastSelectRecordItem);

        return{...state, ...{selectedRecordItemList: selectedRecordItemList} };
    }

    default:
        return state;
    }
}

function getBoundarySelectedRecordItems (tables, tableId, firstSelectRecordItemId, lastSelectRecordItemId) {
    let firstSelectRecordItem = {},
        lastSelectRecordItem = {};

    tables.forEach((table) => {
        if (table._id === tableId) {
            table.records.forEach((record, recordIndex) => {
                record.record_data.forEach((recordItem, fieldIndex) => {
                    if (recordItem._id === firstSelectRecordItemId) {
                        firstSelectRecordItem.fieldIndex = fieldIndex;
                        firstSelectRecordItem.recordIndex = recordIndex;
                    } else {
                        if (recordItem._id === lastSelectRecordItemId) {
                            lastSelectRecordItem.fieldIndex = fieldIndex;
                            lastSelectRecordItem.recordIndex = recordIndex;
                        }
                    }
                });
            })
        }
    });
    return {firstSelectRecordItem, lastSelectRecordItem};
}

function getSelectedRecordItemList (tables, tableId, firstSelectRecordItem, lastSelectRecordItem) {
    let selectedRecordItemList = [];
    let maxSelectedFieldIndex,
        minSelectedFieldIndex,
        maxSelectedRecordIndex,
        minSelectedRecordIndex;

    if (firstSelectRecordItem.fieldIndex > lastSelectRecordItem.fieldIndex) {
        maxSelectedFieldIndex = firstSelectRecordItem.fieldIndex;
        minSelectedFieldIndex = lastSelectRecordItem.fieldIndex;
    } else {
        if (firstSelectRecordItem.fieldIndex < lastSelectRecordItem.fieldIndex) {
            maxSelectedFieldIndex = lastSelectRecordItem.fieldIndex;
            minSelectedFieldIndex = firstSelectRecordItem.fieldIndex;
        } else {
            minSelectedFieldIndex = firstSelectRecordItem.fieldIndex;
            maxSelectedFieldIndex = firstSelectRecordItem.fieldIndex;
        }
    }

    if (firstSelectRecordItem.recordIndex > lastSelectRecordItem.recordIndex) {
        maxSelectedRecordIndex = firstSelectRecordItem.recordIndex;
        minSelectedRecordIndex = lastSelectRecordItem.recordIndex;
    } else {
        if (firstSelectRecordItem.recordIndex < lastSelectRecordItem.recordIndex) {
            maxSelectedRecordIndex = lastSelectRecordItem.recordIndex;
            minSelectedRecordIndex = firstSelectRecordItem.recordIndex;
        } else {
            maxSelectedRecordIndex = firstSelectRecordItem.recordIndex;
            minSelectedRecordIndex = firstSelectRecordItem.recordIndex;
        }
    }

    tables.forEach((table) => {
        if (table._id === tableId) {
            table.records.forEach((record, recordIndex) => {
                if (recordIndex >= minSelectedRecordIndex && recordIndex <= maxSelectedRecordIndex) {
                    for (let i = minSelectedFieldIndex; i < maxSelectedFieldIndex + 1; i++) {
                        selectedRecordItemList.push({id: record.record_data[i]._id,
                            fieldIndex: i, recordIndex: recordIndex});
                    }
                }
            })
        }
    });
    return selectedRecordItemList;
}

export default dashboardReducer;