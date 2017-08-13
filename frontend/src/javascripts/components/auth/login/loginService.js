import {browserHistory} from 'react-router';
import { getCurrentUser } from './loginApi';
import Auth from '../auth';

export let loginService = {
    login(data) {
        if (data && data.token) {
            // save the token
            Auth.authenticateUser(data.token);
            // change the current URL to /
            browserHistory.push('/');
        }
    },

    redirectLoggedInUser() {
        if (Auth.isUserAuthenticated()) {
            getCurrentUser()
                .then(() => browserHistory.push('/'))
                .catch((error) => console.error(error));
        }
    }
};