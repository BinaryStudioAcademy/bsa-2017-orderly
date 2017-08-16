import { LOGIN_USER, CHANGE_USER_DATA, LOGIN_USER_RESPONSE, LOGIN_USER_ERROR } from './loginActions';

const initState = {
    errors: {},
    message: '',
    success: true,
    token: '',
    user: {},
    email: '',
    password: ''
};

function loginReducer(state = initState, action) {
    switch (action.type) {
    case LOGIN_USER:
        return {...state, ...{
            email: action.email,
            password: action.password
        }};

    case CHANGE_USER_DATA:
        return {...state, ...action.data};

    case LOGIN_USER_RESPONSE:{
        return {...state, ...{password: '', errors: {}}, ...action.data};
    }

    case LOGIN_USER_ERROR:{
        return {...state, ...{
            errors: {},
            success: false,
            message: action.message
        }};
    }
    default:
        return state;
    }
}

export default loginReducer;