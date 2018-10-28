import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Stats from '../../Stats';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            styles: {},
            spin: true
        }
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    componentDidMount() {
        setTimeout(() => this.setState({
            styles: { transform: "scale(1)", opacity: 1 },
        }), 2000)
    }

    handleMouseOver(event) {
        // console.log("over", event);
        this.setState({ spin: false })
    }

    handleMouseOut(event) {
        // console.log("out", event);
        this.setState({ spin: true })
    }

    render() {
        const hero = ['W', 'e', 'b', 'L', 'o', 'g', 'i', 'c', ' ', 'S', 't', 'u', 'd', 'i', 'o'];
        return (
            <div 
                className="Home" 
                onMouseOver={() => this.handleMouseOver(this)} 
                onMouseLeave={() => this.handleMouseOut(this)}>
                
                <Link to="/folio">
                    <h1 className="mobile-fix heading-hero" style={this.state.styles}>
                        {hero.map((symbol, index) => {
                            return (
                                <span
                                    key={index}
                                    className={`span-${index}`}
                                >
                                    {symbol}
                                </span>)
                        })}
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

// style={ this.state.spin ? { 
//     transform: 'rotate(360deg)',
//     transitionDuration: '1s',
//     transitionDelay: 'now',
//     animationTimingFunction: 'linear',
//     animationIterationCount: 'infinite',
// } : null }