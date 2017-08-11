import { SIGN_UP_ACTION, CHANGE_SIGN_UP_FORM } from "./signUpActions";

const initState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
};

function signUpReducer(state = initState, action) {
    switch (action.type) {
    case SIGN_UP_ACTION: {
        const credentials = {
            firstName: action.firstName,
            lastName: action.lastName,
            email: action.email,
            password: action.password,
        };
        return {...state, ...credentials};
    }
    case CHANGE_SIGN_UP_FORM: {
        return {...state, ...action.field};
    }
    default:
        return state;
    }
}

export default signUpReducer;