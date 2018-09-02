import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="Home" id="folio">
                <Link to="/folio">
                    <h1 className="mobile-fix heading-hero">
                        <span className="span-0">W</span>
                        <span className="span-1">e</span>
                        <span className="span-2">b</span>
                        <span className="span-3">L</span>
                        <span className="span-4">o</span>
                        <span className="span-5">g</span>
                        <span className="span-6">i</span>
                        <span className="span-7">c</span>
                        <span className="span-8"> </span>
                        <span className="span-9">S</span>
                        <span className="span-10">t</span>
                        <span className="span-11">u</span>
                        <span className="span-12">d</span>
                        <span className="span-13">i</span>
                        <span className="span-14">o</span>
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