import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';

import rootReducer from '../reducers';

const reduxRouterMiddleware = routerMiddleware(browserHistory);
const middleware = [
    reduxRouterMiddleware,
    thunk
];

function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(...middleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            /* eslint-disable global-require */
            const nextReducer = require('../reducers').default;
            /* eslint-enable global-require */
            store.replaceReducer(nextReducer);
        });
    }
    return store;
}

export default configureStore;