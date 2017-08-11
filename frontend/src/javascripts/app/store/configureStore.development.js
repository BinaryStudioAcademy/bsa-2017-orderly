import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga/lib';
import rootReducer from '../reducer';
import DevTools from '../DevTools';
import rootSaga from "../saga";

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger, require('redux-immutable-state-invariant')()];

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
    store.runSaga = sagaMiddleware.run(rootSaga);

    return store;
}