import {combineReducers} from 'redux';
import {
routerReducer
} from 'react-router-redux';
import categories from './categories';
import products from './products';
const rootReducer = combineReducers({
    routing: routerReducer,
    categories,
    products
});

export default rootReducer;