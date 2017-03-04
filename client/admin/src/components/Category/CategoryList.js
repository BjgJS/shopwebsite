import React from 'react';

class CategoryList extends React.Component {
    render() {
        const {categories, loading} = this.props;
        return (
            <div className="box">
                <div className="box-header with-border">
                    <h3 className="box-title">Category list</h3>
                </div>
                <div className="box-body">
                    {
                        loading ?
                            "Loading..." :
                            <table className="table table-bordered">
                                <tbody>
                                <tr>
                                    <th style={{width: 10}}>#</th>
                                    <th>Name</th>
                                </tr>
                                {categories && categories.map((c, i) => (
                                    <tr key={i}>
                                        <td>1.</td>
                                        <td>Update software</td>
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

export default CategoryList;