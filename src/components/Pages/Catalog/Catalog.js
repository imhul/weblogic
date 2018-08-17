import React, { Component } from 'react';
import { Wave } from 'react-preloading-component';

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const someStyles = {
            textAlign: 'center',
        };
        return (
            <div className="Catalog">
                <h1 style={someStyles}>Catalog Page</h1>
                <Wave />
            </div>
        );
    }
}

export default Catalog;