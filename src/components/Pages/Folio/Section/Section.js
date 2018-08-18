import React, { Component } from 'react';

export default class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            opened: false,
          };
    }

    sectionAction() {
        this.setState(prevState => ({
            collapsed: !prevState.collapsed,
            opened: !prevState.opened,
        }));
    }

    render() {
        return (
            <div 
            className={ this.state.collapsed ? "Section collapsed" : "Section opened" }
            onClick={ this.sectionAction }>
                Hello
            </div>
        );
    }
}