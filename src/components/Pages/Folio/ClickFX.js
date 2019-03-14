import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UX_ACTIONS from '../../../redux/actions/ux_actions';
import { Ripple } from 'react-ripple-effect';
import { now } from 'right-now';
 
class ClickFX extends Component {

    handleClick(e) {
        let cursorPos = {
            top: e.clientY,
            left: e.clientX,
            time: now()
        };
        this.props.uxActions.clickFX(cursorPos)
    };
 
    render () {
        const { cursorPos } = this.props.ui;
        return (
            <button
                className="Ripple-parent"
                onMouseUp={ this.handleClick }
                onTouchend={ this.handleClick } >
                { this.props.children }
                <Ripple cursorPos={ this.props.ui.cursorPos } />
            </button>
        )
    }
};

function mapDispatchToProps(dispatch) {
  return {
    uxActions: bindActionCreators(UX_ACTIONS, dispatch),
  }
};

function mapStateToProps(state) {
  return {
    ux: state.ux,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClickFX);