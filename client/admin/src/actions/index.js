import agent from '../agent';
export function fetchAllCategories() {
    return dispatch => {
        dispatch({type: 'GET_CATEGORIES_START'});
        agent.Categories.all()
            .then(res => {
                dispatch({type: 'GET_CATEGORIES_SUCCESS', payload: res.categories});
            })
            .catch(err => {
                dispatch({type: 'GET_CATEGORIES_ERROR', payload: err});
            });
    }
}