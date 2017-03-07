import React from 'react';
import {reduxForm, Field} from 'redux-form';
import slug from 'slug';
import classnames from 'classnames';

const renderInput = field => {
    return (
        <div className={classnames({
        'form-group': true,
        'has-error': field.meta.touched && field.meta.error
        })}>
            <label>{field.placeholder}</label>
            <input {...field.input} type={field.type} className="form-control"/>
            {field.meta.touched &&
            field.meta.error &&
            <span className="help-block">{field.meta.error}</span> }
        </div>
    )
};

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    }
    if (!values.slug) {
        errors.slug = 'Required';
    }
    return errors;
};

class ProductForm extends React.Component {
    render() {
        // const {handleSubmit} = this.props;
        return (
            <div className="box box-success">
                <div className="box-header with-border">
                    <h3 className="box-title">Product Form</h3>
                    <button className="btn btn-success pull-right"><i className="fa fa-plus"></i></button>
                </div>
                <form action="">
                    <div className="box-body">
                        <Field name="name" type="text" placeholder="Name" component={renderInput}/>
                        <Field name="slug" type="text" placeholder="Slug" component={renderInput}/>
                        <Field name="price" type="text" placeholder="Price" component={renderInput}/>
                    </div>
                    <div className="box-footer">
                        <button type="submit" className="btn btn-primary">Save</button>
                        <button type="button" className="btn btn-default pull-right">Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default reduxForm({
    form: 'productForm',
    validate,
    enableReinitialize: true
})(ProductForm)