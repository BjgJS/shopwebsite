import {fromJS, List} from 'immutable';
const initialState = fromJS({
    loading: false,
    error: null,
    items: [],
    active: null
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
        {
            const error = action.payload || {message: action.payload.message};
            return state.merge({
                loading: false,
                error: error,
                items: new List()
            });
        }
        case 'SELECT_CATEGORY':
        {
            return state.update('active', () => action.payload);
        }

        case 'UPDATE_CATEGORY_START':
        {
            return state;
        }
        case 'UPDATE_CATEGORY_SUCCESS':
        {
            return state.update('items', items => {
                return items.update(
                    items.findIndex(item => item.get('slug') === action.slug),
                    item => item.merge(action.payload)
                );
            });
        }
        case 'UPDATE_CATEGORY_ERROR':
        {
            return state;
        }
        default:
            return state;
    }
}