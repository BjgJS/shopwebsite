import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Category from './components/Category';
import Home from './components/Home';
import Product from './components/Product';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/categories" component={Category}/>
        <Route path="/products" component={Product}/>
    </Route>
);

export default routes;