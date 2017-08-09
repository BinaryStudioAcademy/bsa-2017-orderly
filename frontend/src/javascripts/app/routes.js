import React from 'react';
import {Route, Redirect, IndexRoute} from 'react-router';

import App from './App';
import StartPage from '../components/StartPage';
import UserProfile from '../components/userProfile/userProfile';
import NotFound from '../components/notFound/notFound';
import Dashboard from '../components/dashboard/dashboard';

export default (
    <Route path="/" component={App}>
      <Route path='user-page' component={UserProfile} />
      <IndexRoute component={StartPage}/><Route path='/dashboard/:id' components={Dashboard}/>
        <Route path="404" component={NotFound}/>
        <Redirect from="*" to="404"/>
    </Route>
);
