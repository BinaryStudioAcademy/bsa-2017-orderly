import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import promiseMiddleware from 'redux-promise';
import createLogger from 'redux-logger';
import rootReducer from '../reducer';
import DevTools from '../DevTools';

const logger = createLogger();
const middlewares = [promiseMiddleware, logger, require('redux-immutable-state-invariant')()];

const getDebugSessionKey = function () {
    const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
    return (matches && matches.length) ? matches[1] : null;
};

const enhancer = compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
    persistState(getDebugSessionKey())
);

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancer);

    if (module.hot) {
        module.hot.accept('../reducer', () => {
            const nextReducer = require('../reducer').default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
