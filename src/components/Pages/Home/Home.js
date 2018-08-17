import React, { Component } from 'react';
import { Wave } from 'react-preloading-component';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const someStyles = {
            textAlign: 'center',
        };
        return (
            <div className="Home">
                <h1 style={someStyles}>Home Page</h1>
                <Wave />
            </div>
        );
    }
}

export default Home;