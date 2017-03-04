import React from 'react';
import {Link} from 'react-router';

class Sidebar extends React.Component {

    getStyleForPath(path) {
        return location.pathname === path ? 'active': '';
    }

    render() {
        return (
            <aside className="main-sidebar">
                {/* sidebar: style can be found in sidebar.less */}
                <section className="sidebar">
                    {/* Sidebar user panel */}
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="description"/>
                        </div>
                        <div className="pull-left info">
                            <p>Alexander Pierce</p>
                            <a href="#"><i className="fa fa-circle text-success"/> Online</a>
                        </div>
                    </div>
                    {/* search form */}
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                            <input type="text" name="q" className="form-control" placeholder="Search..."/>
                          <span className="input-group-btn">
                            <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i
                                className="fa fa-search"/>
                            </button>
                          </span>
                        </div>
                    </form>
                    {/* /.search form */}
                    {/* sidebar menu: : style can be found in sidebar.less */}
                    <ul className="sidebar-menu">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className={this.getStyleForPath('/')}>
                            <Link to="/" className="">
                                <i className="fa fa-th"></i> <span>Home</span>
                            </Link>
                        </li>
                        <li className={this.getStyleForPath('/categories')}>
                            <Link to="categories">
                                <i className="fa fa-th"></i> <span>Category</span>
                            </Link>
                        </li>
                        <li className={this.getStyleForPath('/products')}>
                            <Link to="products">
                                <i className="fa fa-th"></i> <span>Product</span>
                            </Link>
                        </li>
                    </ul>
                </section>
                {/* /.sidebar */}
            </aside>
        );
    }
}
export default Sidebar;