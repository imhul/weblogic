import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="Home">
                <h1 className="mobile-fix heading-hero">
                    <span>WebLogic Studio</span>
                    <Link to="/folio">
                        <i className="icon-lamp"></i>
                    </Link>
                    <div>
                        <a 
                            href="https://github.com/imhul/weblogic" 
                            title="github project" 
                            className="github" 
                            target="_blank"
                        >
                            by Tkachuk Zakhar <Icon type="github" />
                        </a>
                    </div>
                </h1>
            </div>
        );
    }
}

export default Home;