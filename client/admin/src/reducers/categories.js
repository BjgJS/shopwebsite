import {fromJS, List} from 'immutable';
const initialState = fromJS({
    loading: false,
    error: null,
    items: []
});

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATEGORIES_START':
            return state.merge({
                loading: true,
                error: null,
                items: new List()
            });
        case 'GET_CATEGORIES_SUCCESS':
            return state.merge({
                loading: false,
                error: null,
                items: action.payload
            });
        case 'GET_CATEGORIES_ERROR':
            const error = action.payload || {message: action.payload.message};
            return state.merge({
                loading: false,
                error: error,
                items: new List()
            });
        default:
            return state;
    }
}