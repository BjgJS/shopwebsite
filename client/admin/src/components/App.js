import React, {Component} from 'react';

import Header from './shared/Header';
import Sidebar from './shared/Sidebar';
import Footer from './shared/Footer';
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
