import React from 'react';
import {render} from 'react-dom';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {AppContainer} from 'react-hot-loader';
import Redbox from 'redbox-react';

import Root from './Root';
import configureStore from './store/configureStore';

import 'semantic-ui-css/semantic.min.css';
import 'styles/style.scss';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const rootEl = document.getElementById('app');

render(
    <AppContainer errorReporter={Redbox}>
        <Root store={store} history={history}/>
    </AppContainer>,
    rootEl
);

if (module.hot) {
    const orgError = console.error;
    console.error = (message) => {
        if (message && message.indexOf('You cannot change <Router routes>;') === -1) {
            orgError.apply(console, [message]);
        }
    };

    module.hot.accept('./Root', () => {
        // If you use Webpack 2 in ES modules mode, you can
        // use <App /> here rather than require() a <NextApp />.
        const NextApp = require('./Root').default;

        render(
            <AppContainer errorReporter={Redbox}>
                <NextApp store={store} history={history}/>
            </AppContainer>,
            rootEl
        );
    });
}
