const initState = {};

function dashboardReducer(state = initState, action) {
    switch (action.type) {
    case 'ADD': {
        return;
    }
    default:
        return state;
    }
}

export default dashboardReducer;