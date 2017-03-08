import React from 'react';
import {Router} from 'react-router';
import {Provider} from 'react-redux';

class Root extends React.Component {
    render() {
        const {store, routes, history} = this.props;
        return (
            <Provider store={store}>
                <Router history={history}>
                    {routes}
                </Router>
            </Provider>
        )
    }
}

export default Root;