import React from 'react';
import {Route, Redirect} from 'react-router';

import App from './App';
import NotFound from '../components/notFound/notFound';

export default (
    <Route path="/" component={App}>
        <Route path="404" component={NotFound}/>
        <Redirect from="*" to="404"/>
    </Route>
);
