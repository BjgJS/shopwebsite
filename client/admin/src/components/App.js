import React, {Component} from 'react';

import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';
class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Sidebar />
                <div className="content-wrapper">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
