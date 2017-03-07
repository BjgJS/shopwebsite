import React, {Component} from 'react';
import ProductFormContainer from './ProductFormContainer';
import PageHeader from '../shared/PageHeader';

class ProductDetailPage extends Component {
    render() {
        return (
            <div>
                <PageHeader
                    pageTitle="Product Detail"
                />
                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <ProductFormContainer />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default ProductDetailPage;