import React from 'react';
import {render} from 'react-dom';
import configureStore from './store';

import {AppContainer} from 'react-hot-loader';
import Root from './containers/Root';
import routes from './routes';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
render(
    (
        <AppContainer>
            <Root store={store} routes={routes} history={history} />
        </AppContainer>
    ),
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept(['./containers/Root', './routes'], () => {
        const RootContainer = require('./containers/Root').default;
        const newRoutes = require('./routes').default;
        render(
            <AppContainer>
                <RootContainer store={store} routes={routes} history={history} />
            </AppContainer>,
            document.getElementById('root')
        )
    })
}
