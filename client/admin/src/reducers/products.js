import {fromJS} from 'immutable';

const initialState = fromJS({
    productList: {
        loading: false,
        error: null,
        items: []
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
        default:
            return state;
    }
}