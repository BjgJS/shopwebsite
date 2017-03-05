import React from 'react';
import {connect} from 'react-redux';

import PageHeader from '../shared/PageHeader';
import CategoryListContainer from './CategoryListContainer';
import CategoryFormContainer from './CategoryFormContainer'

class Category extends React.Component {

    render() {

        return (
            <div>
                <PageHeader
                    pageTitle="Category"
                />
                <section className="content">
                    <div className="row">
                        <div className="col-md-5">
                            <CategoryListContainer />
                        </div>
                        <div className="col-md-7">
                            <CategoryFormContainer />
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

export default connect(mapStateToProps, mapDispatchToProps)(Category);