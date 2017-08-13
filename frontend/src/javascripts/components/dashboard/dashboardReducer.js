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
		        tables: action.tables
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
        
    default:
        return state;
    }
}

export default dashboardReducer;
