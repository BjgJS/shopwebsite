import React from 'react';
import {connect} from 'react-redux';

import CategoryList from './CategoryList';

import {
    fetchAllCategories
} from '../../actions';

class CategoryListContainer extends React.Component {
    componentWillMount() {
        this.props.onLoad();
    }

    render() {
        const {categories, loading}  = this.props;
        return <CategoryList categories={categories} loading={loading}/>
    }
}

const mapStateToProps = state => ({
    categories: state.categories.get('items'),
    loading: state.categories.get('loading')

});

const mapDispatchToProps = dispatch => ({
    onLoad: () => dispatch(fetchAllCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListContainer);