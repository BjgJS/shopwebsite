import agent from '../agent';

export function fetchAllProducts() {
    return dispatch => {
        dispatch({type: 'GET_PRODUCT_LIST_START'});
        agent.Products.all()
            .then(res => {
                dispatch({type: 'GET_PRODUCT_LIST_SUCCESS', payload: res.products});
            })
            .catch(err => {
                console.log(err);
                dispatch({type: 'GET_PRODUCT_LIST_ERROR', payload: err});
            });
    }
}