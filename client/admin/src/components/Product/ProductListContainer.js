import React from 'react';
import {connect} from 'react-redux';

import ProductList from './ProductList';

import {
    fetchAllProducts,
} from '../../actions';

class ProductListContainer extends React.Component {
    componentWillMount() {
        this.props.onLoad();
    }

    render() {
        const {products, loading}  = this.props;
        return (
            <ProductList
                products={products}
                loading={loading}
            />
        )
    }
}

const mapStateToProps = state => ({
    products: state.products.getIn(['productList', 'items']),
    loading: state.products.getIn(['productList', 'loading'])
});

const mapDispatchToProps = dispatch => ({
    onLoad: () => dispatch(fetchAllProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);