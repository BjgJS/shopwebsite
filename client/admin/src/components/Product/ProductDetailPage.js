import React, {Component} from 'react';
import ProductForm from './ProductForm';
import PageHeader from '../shared/PageHeader';
import {fetchProductBySlug} from '../../actions';
import {connect} from 'react-redux';
class ProductDetailPage extends Component {

    componentWillMount() {
        const {dispatch} = this.props;
        const slug = this.props.params.slug;
        dispatch(fetchProductBySlug(slug));
    }

    render() {
        const {initialValues, error} = this.props;
        return (
            <div>
                <PageHeader
                    pageTitle="Product Management"
                    pageSubTitle="Edit or create new product"
                />
                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            {error ?
                                <h1>Not found</h1> :
                                <ProductForm initialValues={initialValues} error={error}/>
                            }
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialValues: state.products.getIn(['active', 'product']).toJS(),
        error: state.products.getIn(['active', 'error'])
    }
};

export default connect(mapStateToProps)(ProductDetailPage);
