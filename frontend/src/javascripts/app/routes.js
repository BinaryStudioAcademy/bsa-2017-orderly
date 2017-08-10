import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import StartPage from '../components/StartPage';
import UserProfile from '../components/userProfile/userProfile';
import NotFound from '../components/notFound/notFound';
import SignUp from '../components/login/signUp/signUp';
import Dashboard from '../components/dashboard/dashboard';
export default (
    <Route path="/" component={App}>
      <Route path='user-page' component={UserProfile} />
      <IndexRoute component={StartPage}/>
        <Route path='/dashboard/:_id' components={Dashboard}/>
        <Route path="404" component={NotFound}/>
        <Route path="signup" component={SignUp}/>
    </Route>
);
