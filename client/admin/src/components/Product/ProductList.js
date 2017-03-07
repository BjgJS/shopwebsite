import React from 'react';
import {Link} from 'react-router';

class ProductList extends React.Component {
    render() {
        const {products, loading} = this.props;

        return (
            <div className="box box-success">
                <div className="box-header with-border">
                    <h3 className="box-title">Product list</h3>
                    <button className="btn btn-success pull-right"><i className="fa fa-plus"></i></button>
                </div>
                <div className="box-body">
                    {
                        loading ?
                            "Loading..." :
                            <table className="table table-bordered">
                                <tbody>
                                <tr>
                                    <th style={{width: 10}}>#</th>
                                    <th style={{width: 50}}>Image</th>
                                    <th>Name</th>
                                </tr>
                                {products.map((p, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td className="attachment-block">
                                            <img className="attachment-img"
                                                 src={"/product_images/" + p.getIn(['images', 'avatar', 'imageName'])}
                                                 alt={p.getIn(['images', 'avatar', 'description'])}
                                            />
                                        </td>
                                        <td>
                                            <Link to={`/products/${p.get('slug')}`}>
                                                {p.get('name')}
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                    }

                </div>
            </div>
        )
    }
}

export default ProductList;