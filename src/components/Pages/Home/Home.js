import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Wave } from 'react-preloading-component';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            styles: {}
        }
    }

    componentDidMount() {          
        setTimeout(() => this.setState({
            styles: { transform: "scale(1)", opacity: 1 },
        }), 2000)
    }

    render() {
        const hero = [ 'W','e','b','L','o','g','i','c',' ','S','t','u','d','i','o' ];
        return (
            <div className="Home">
                <Link to="/folio">
                    <h1 className="mobile-fix heading-hero" style={this.state.styles}>
                        { hero.map((symbol, index) => { return ( 
                            <span key={index} className={`span-${index}`}>
                                { symbol }
                            </span> )
                        } ) }
                        <span className="span-15">
                            <i className="icon-lamp"></i>
                        </span>
                    </h1>
                </Link>
            </div>
        );
    }
}

export default Home;