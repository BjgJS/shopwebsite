import {fromJS} from 'immutable';

const initialState = fromJS({
    productList: {
        loading: false,
        error: null,
        items: []
    },
    active: {
        loading: false,
        error: null,
        product: {}
    }
});

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCT_LIST_START':
            return state.updateIn(['productList', 'loading'], () => true);
        case 'GET_PRODUCT_LIST_SUCCESS':
            return state.merge({
                productList: {
                    loading: false,
                    error: null,
                    items: action.payload
                }
            });
        case 'GET_PRODUCT_LIST_ERROR':
            return state;
    
        case 'GET_PRODUCT_START':
            return state.updateIn(['active', 'loading'], () => true);
        case 'GET_PRODUCT_SUCCESS':
            return state.merge({
                active: {
                    loading: false,
                    error: null,
                    product: action.payload
                }
            });
        case 'GET_PRODUCT_ERROR':
            return state.updateIn(['active', 'error'], () => action.payload);
        default:
            return state;
    }
}