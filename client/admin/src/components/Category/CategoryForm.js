import React from 'react';
import {Map} from 'immutable';
class CategoryForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            category: this.props.category ? this.props.category : Map({name: '', slug: '', displayFlag: true})
        };
        this.onChange = this.onChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            category: nextProps.category ? nextProps.category : Map({name: '', slug: '', displayFlag: true})
        })
    }

    onChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState(({category}) => ({
            category: category.update(name, () => value)
        }));
    }

    handleSubmit(e) {
        e.preventDefault();
        let slug = null;
        if (this.props.category) {
            slug = this.props.category.get('slug')
        }
        this.props.onSubmit(slug, this.state.category);
    }

    render() {
        const {category} = this.state;
        return (
            <div className="box box-success">
                <div className="box-header with-border">
                    <h3 className="box-title">Category Details</h3>
                    <button className="btn btn-success pull-right"><i className="fa fa-plus"></i></button>
                </div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="box-body">

                        <div className="form-group">
                            <label htmlFor="categoryName">Name</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="name"
                                   value={category.get('name')}
                                   name="name"
                                   onChange={this.onChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="categorySlug">Slug</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="slug"
                                   value={category.get('slug')}
                                   name="slug"
                                   onChange={this.onChange}
                            />
                        </div>

                        <div className="checkbox">
                            <label>
                                <input
                                    type="checkbox"
                                    name="displayFlag"
                                    checked={category.get('displayFlag')}
                                    onChange={this.onChange}
                                />Display
                            </label>
                        </div>


                    </div>
                    <div className="box-footer">
                        <input type="submit" className="btn btn-primary" value="Submit"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default CategoryForm;