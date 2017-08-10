import { SIGN_UP_ACTION } from "./signUpActions";

const initState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
};

export default function signUpReducer(state = initState, action) {
    switch (action.type) {
    case SIGN_UP_ACTION: {
        const credentials = {
            firstName: action.firstName,
            lastName: action.lastName,
            email: action.email,
            password: action.password,
        };
        return Object.assign({}, state, credentials);
    }
    default:
        return state;
    }
}
