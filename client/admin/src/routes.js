import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './containers/App';
import Category from './components/Category';
import Home from './components/Home';
import Product from './components/Product';
import ProductDetailPage from './components/Product/ProductDetailPage';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/categories" component={Category}/>
        <Route path="/products" component={Product}/>
        <Route path="/products/:slug" component={ProductDetailPage}/>
    </Route>
);

export default routes;