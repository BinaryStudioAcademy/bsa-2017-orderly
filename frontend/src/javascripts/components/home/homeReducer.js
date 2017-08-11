const initState = {};

function homeReducer(state = initState, action) {
    switch (action.type) {
    case 'ADD': {
        return;
    }
    default:
        return state;
    }
}

export default homeReducer;