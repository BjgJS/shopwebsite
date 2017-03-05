import React from 'react';
import {connect} from 'react-redux';

import CategoryForm from './CategoryForm';

import {
    updateCategory
} from '../../actions';

class CategoryFormContainer extends React.Component {

    render() {
        const {activedCategory, onSubmit} = this.props;
        return (
            <CategoryForm
                category={activedCategory}
                onSubmit={onSubmit}
            />
        )
    }
}

const mapStateToProps = state => ({
    activedCategory: state.categories.get('active')
});

const mapDispatchToProps = dispatch => ({
    onSubmit: (slug, category) => dispatch(updateCategory(slug, category))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFormContainer);