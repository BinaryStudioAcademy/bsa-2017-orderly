import { SIGN_UP_ACTION } from "./signUpActions";

const initState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
};

function signUpReducer(state = initState, action) {
    switch (action.type) {
    case SIGN_UP_ACTION: {
        console.log('REDUCER FIRE');
        console.log(action);
        const credentials = {
            firstName: action.firstName,
            lastName: action.lastName,
            email: action.email,
            password: action.password,
        };
        const newObj = {...state, ...credentials};
        console.log(newObj);
        return newObj;
    }
    default:
        return state;
    }
}

export default signUpReducer;