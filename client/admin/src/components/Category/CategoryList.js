import React from 'react';

class CategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.renderList = this.renderList.bind(this);

        this.selectCategory = this.selectCategory.bind(this);
        this.restructure = this.restructure.bind(this);
    }

    selectCategory(category) {
        const {onSelectedCategoryChanged} = this.props;
        if (onSelectedCategoryChanged) {
            onSelectedCategoryChanged(category);
        }
    }

    renderList(categories, list, index = {value: 0}) {
        const { active } = this.props;
        categories.forEach((c) => {
            list.push((
                <tr key={index.value++} className={active && c.get('slug') === active.get('slug') ? 'active' : null}>
                    <td>{index.value}</td>
                    <td onClick={() => this.selectCategory(c)}>
                        {"--".repeat(c.get('level'))}{" "}{c.get('name')}
                    </td>
                </tr>
            ));
            if (c.get('children')) {
                this.renderList(c.get('children'), list, index);
            }
        });
    }

    restructure(categories) {
        const list = {};
        categories.forEach(c => {
            console.log('hit')
            if (c.get('level') === 0) {
                list[c.get('slug')] = c;
                list.children = [];
                // return;
            }
            list[c.getIn('parent', 'slug')].children.push(c);
        });

        console.log(list);
    }

    render() {
        const {categories, loading, active} = this.props;

        return (
            <div className="box box-success">
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
                                {categories.map((c, i) => (
                                    <tr key={i} className={active && c.get('slug') === active.get('slug') ? 'active' : null}>
                                        <td>{i + 1}</td>
                                        <td onClick={() => this.selectCategory(c)}>
                                            {c.get('name')}
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

export default CategoryList;