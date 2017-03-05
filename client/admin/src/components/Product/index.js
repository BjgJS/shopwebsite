import React from 'react';
import {connect} from 'react-redux';

import PageHeader from '../shared/PageHeader';
import ProductListContainer from './ProductListContainer';

class Product extends React.Component {

    render() {

        return (
            <div>
                <PageHeader
                    pageTitle="Product"
                />
                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <ProductListContainer />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);