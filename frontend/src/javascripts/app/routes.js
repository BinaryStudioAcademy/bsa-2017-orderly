import React from 'react';
import {Route, Redirect, IndexRoute} from 'react-router';
import axios from 'axios';
import {browserHistory} from 'react-router';

import App from './App';
import StartPage from '../components/StartPage';
import UserProfilePage from '../components/userProfile/userProfilePage';
import NotFound from '../components/notFound/notFound';
import Dashboard from '../components/dashboard/dashboard';
import SignUp from '../components/auth/signUp/signUp';
import Login from '../components/auth/login/login';
import Logout from '../components/auth/logout/logout';
import Auth from '../components/auth/auth';
import View from '../components/view/view';

export default (
    <Route path="/" component={App}>
        <Route path='user-page' component={UserProfilePage} />
        <IndexRoute component={StartPage}/>
        <Route path='/dashboard/:baseId/:tableId' components={Dashboard}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={Login}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/view" component={View}/>
        <Route path="404" component={NotFound}/>
        <Redirect from="*" to="404"/>
    </Route>
);

// Axios config
(function() {
    axios.defaults.baseURL = 'http://localhost:2020';

    const token = Auth.getToken();
    if (token) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    } else {
        axios.defaults.headers.common['Authorization'] = null;
    }

    // Add a response interceptor
    axios.interceptors.response.use(null,
        function (error) {
            if (error.response.status === 401) {
                if (token) {
                    Auth.deauthenticateUser();
                }
                browserHistory.push('/login');
            }
            return Promise.reject(error.response);
        });
})();