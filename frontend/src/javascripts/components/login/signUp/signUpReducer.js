import { SIGN_UP_ACTION } from "./signUpActions";

const initState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
};

export default function signUpReducer(state = initState, action) {
    console.log('REDUCER FIRE');
    console.log(action);
    switch (action.type) {
    case SIGN_UP_ACTION: {
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
