import { FORGOT_PASSWORD_RESPONSE, FORGOT_PASSWORD_ERROR } from './forgotActions';

const initState = {
    error: '',
    message: ''
};

function forgotReducer(state = initState, action) {
    switch (action.type) {

    case FORGOT_PASSWORD_RESPONSE:{
        return {...state, ...{error: '', message: ''}, ...action.data};
    }

    case FORGOT_PASSWORD_ERROR:{
        return {...state, ...{error: '', message: ''}, ...action.data};
    }
    default:
        return state;
    }
}

export default forgotReducer;