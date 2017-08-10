const initState = {};

function loginReducer(state = initState, action) {
    switch (action.type) {
    case 'ADD': {
        return;
    }
    default:
        return state;
    }
}

export default loginReducer;