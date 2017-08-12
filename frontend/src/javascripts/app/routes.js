import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import StartPage from '../components/StartPage';
import SignUp from '../components/auth/login/signUp/signUp';
import SignIn from '../components/auth/login/signIn/signIn';
import UserProfile from '../components/userProfile/userProfile';
import Dashboard from '../components/dashboard/dashboard';
import NotFound from '../components/notFound/notFound';
import View from '../components/view/view';

export default (
    <Route path="/" component={App}>
        <Route path='user-page' component={UserProfile} />
        <IndexRoute component={StartPage}/>
        <Route path='/dashboard/:_id' components={Dashboard}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={SignIn}/>
        <Route path="404" component={NotFound}/>
        <Route path="view" component={View}/>
    </Route>
);
