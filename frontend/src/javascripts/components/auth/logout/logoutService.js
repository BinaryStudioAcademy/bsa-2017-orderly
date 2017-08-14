import {browserHistory} from 'react-router';
import Auth from '../auth';

export let logoutService = {
    logout() {
        if (Auth.getToken()) {
            // Deauthenticate a user. Remove a token from Local Storage.
            Auth.deauthenticateUser();
        }
        browserHistory.push('/login');
    }
};