import React from 'react';
import {connect} from 'react-redux';

import CategoryList from './CategoryList';

import {
    fetchAllCategories,
    selectCategory
} from '../../actions';

class CategoryListContainer extends React.Component {
    componentWillMount() {
        this.props.onLoad();
    }

    render() {
        const {categories, loading, onSelectedCategoryChanged, active}  = this.props;
        return (
            <CategoryList
                categories={categories}
                loading={loading}
                active={active}
                onSelectedCategoryChanged={onSelectedCategoryChanged}
            />
        )
    }
}

const mapStateToProps = state => ({
    categories: state.categories.get('items'),
    loading: state.categories.get('loading'),
    active: state.categories.get('active')
});

const mapDispatchToProps = dispatch => ({
    onLoad: () => dispatch(fetchAllCategories(true)),
    onSelectedCategoryChanged: (category) => dispatch(selectCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListContainer);