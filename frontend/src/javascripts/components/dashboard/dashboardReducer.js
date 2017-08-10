import R from 'ramda';

const initState = {
    tables: [
        {
            name: 'First',
            id: 1,
            isActive: false
        },
        {
            name: 'Second',
            id: 2,
            isActive: true
        },
        {
            name: 'Third',
            id: 3,
            isActive: false
        }
    ]
};

function dashboardReducer(state = initState, action) {
    switch (action.type) {
    case 'ADD_TABLE': {
        return {
            tables: R.concat(
                R.map(R.compose(R.assoc('isActive', false), R.dissoc('isActive')))(state.tables),
                [{
                    name: action.name,
                    id: action.id,
                    isActive: true
                }])
        };
    }
        
    case 'SWITCH_TABLE': {
        return Object.assign({}, {
            tables: R.map( (table) => {
                let newObj = R.dissoc('isActive', table);
                if (table.id === action.id) newObj.isActive = true;
                else newObj.isActive = false;
                return newObj;
            })(state.tables)});
    }
        
    default:
        return state;
    }
}

export default dashboardReducer;
