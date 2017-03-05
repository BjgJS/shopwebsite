import agent from '../agent';

export function fetchAllCategories(flatten) {
    return dispatch => {
        dispatch({type: 'GET_CATEGORIES_START'});
        agent.Categories.all(flatten)
            .then(res => {
                dispatch({type: 'GET_CATEGORIES_SUCCESS', payload: res.categories});
            })
            .catch(err => {
                console.log(err);
                dispatch({type: 'GET_CATEGORIES_ERROR', payload: err});
            });
    }
}

export function selectCategory(category) {
    return {
        type: 'SELECT_CATEGORY',
        payload: category
    }
}

export function updateCategory(slug, category) {
    return dispatch => {
        dispatch({type: 'UPDATE_CATEGORY_START'});
        agent.Categories.update(slug, category.toJS())
            .then(res => {
                dispatch({type: 'UPDATE_CATEGORY_SUCCESS', slug, payload: category});
            })
            .catch(err => {
                console.log(err);   
                dispatch({type: 'UPDATE_CATEGORY_ERROR'});
            })
    }
}