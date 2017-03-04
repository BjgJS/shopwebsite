import React from 'react';

class PageHeader extends React.Component {
    render() {
        const {pageTitle, pageSubTitle} = this.props;
        const paths = location.pathname.split('/').filter(p => p !== '');
        return (
            <section className="content-header">
                <h1>
                    {pageTitle}
                    {pageSubTitle &&
                        <small>{pageSubTitle}</small>
                    }
                </h1>
                <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard"/> Home</a></li>
                    {paths.length > 0 ? paths.map((p, i) => (
                        <li key={i} className={i === paths.length - 1 ? 'active' : null} style={{textTransform:'capitalize'}}>{p}</li>
                    )) :
                        <li className="active" style={{textTransform:'capitalize'}}>Dashboard</li>
                    }
                </ol>
            </section>
        )
    }
}

export default PageHeader;