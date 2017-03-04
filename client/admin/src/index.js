import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

/**
 * import components
 */
import App from './components/App';
import Category from './components/Category';
import Home from './components/Home';

ReactDOM.render(
    (
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="categories" component={Category} />
            </Route>
        </Router>
    ),
    document.getElementById('root')
);
