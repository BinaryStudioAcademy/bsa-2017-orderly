import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import StartPage from '../components/StartPage';
import NotFound from '../components/notFound/notFound';
import SignUp from '../components/login/signUp/signUp';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={StartPage}/>
        <Route path="404" component={NotFound}/>
        <Route path="signup" component={SignUp}/>
    </Route>
);
