import {browserHistory} from 'react-router';
import Auth from '../auth';

export let signInService = {
    tryLogin(data) {
        if (data.token) {
            // save the token
            Auth.authenticateUser(data.token);
            // change the current URL to /
            browserHistory.push('/');
        }
    },
    isLoggedIn() {
        return Auth.isUserAuthenticated();
    }
};