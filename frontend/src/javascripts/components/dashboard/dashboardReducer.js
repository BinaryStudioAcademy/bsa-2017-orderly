import R from 'ramda';

const initState = {
    base: '',
    tables: [{
        _id: 0,
        name: '',
        isActive: false
    }]
};

function dashboardReducer(state = initState, action) {
    switch (action.type) {

    case 'GET_BASE_SUCCEEDED': {
        return R.mergeAll([
            R.dissoc('base', state),
            {
                base: action.base
            }
        ]);
    }

    case 'GET_TABLES_SUCCEEDED': {
        return R.mergeAll([
            R.dissoc('tables', state),
            {
                tables:  R.concat(
                    [ R.assoc('isActive', true)(action.tables[0]) ],
                    R.map(R.assoc('isActive', false))(R.slice(1, Infinity, action.tables))
                )
            }]);
    }

    case 'GET_TABLE_BY_ID_SUCCEEDED': {
        return R.mergeAll([
            R.dissoc('tables', state),
            {
                tables: R.concat(state.tables, action.table)
            }
        ]);
    }

    case 'ADD_TABLE_SUCCEEDED': {
        return {
            tables: R.concat(
                R.map(R.compose(R.assoc('isActive', false), R.dissoc('isActive')))(state.tables),
                R.map(R.assoc('isActive', true))(action.tables))
        };
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
