import R from 'ramda';

const initState = {
    base: '',
    tables: [{   //todo remove cap for new base
        _id: 0,
        name: '',
        isActive: false
    }],
    addPopupIsOpen: false
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
            R.dissoc('tables', state),
            {
                tables: R.map((table) => {
                    let tempObj = R.dissoc('isActive', table);
                    if (table._id === action.tableId) tempObj.isActive = true;
                    else tempObj.isActive = false;
                    return tempObj;
                })(state.tables)
            }
        ]);
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

    case 'GET_RECORDS_BY_TABLE_ID_SUCCEEDED': {
        console.log(action.payload, 'GET_TABLES_BY_TABLE_ID_SUCCEEDEDGET_TABLES_BY_TABLE_ID_SUCCEEDED')
        return state
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
            { addPopupIsOpen: false}
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
            R.dissoc('tables', state),
            {
                tables: R.map( (table) => {
                    let newObj = R.dissoc('isActive', table);
                    if (table._id === action._id) newObj.isActive = true;
                    else newObj.isActive = false;
                    return newObj;
                })(state.tables)
            }]);
    }

    case 'OPEN_EDIT_MENU': {
        return R.mergeAll([
            R.dissoc('tables', state),
            {
                tables: R.map( (table) => {
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
        
    default:
        return state;
    }
}

export default dashboardReducer;
