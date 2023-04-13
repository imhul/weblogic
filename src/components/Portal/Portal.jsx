import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const portal = document.getElementById('portal');

class Portal extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        portal.appendChild(this.el);
    }

    componentWillUnmount() {
        portal.removeChild(this.el);
    }

    render() {
        return createPortal(this.props.children, this.el);
    }
}

export default Portal;
