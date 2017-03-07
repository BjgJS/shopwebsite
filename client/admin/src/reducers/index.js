import {combineReducers} from 'redux';
import {
routerReducer
} from 'react-router-redux';
import { reducer as form } from 'redux-form';

import categories from './categories';
import products from './products';
const rootReducer = combineReducers({
    routing: routerReducer,
    form,
    categories,
    products
});

export default rootReducer;