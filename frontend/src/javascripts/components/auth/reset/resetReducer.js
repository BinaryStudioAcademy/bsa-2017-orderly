import { RESET_PASSWORD_RESPONSE, RESET_PASSWORD_ERROR } from './resetActions';

const initState = {
    error: ''
};

function forgotReducer(state = initState, action) {
    switch (action.type) {

        case RESET_PASSWORD_RESPONSE:{
            return {...state, ...{error: ''}, ...action.data};
        }

        case RESET_PASSWORD_ERROR:{
            return {...state, ...{error: ''}, ...action.error};
        }

        default:
            return state;
    }
}

export default forgotReducer;