import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UI_ACTIONS from '../../../redux/actions/ui_actions';
import { Ripple } from 'react-ripple-effect';
import { now } from 'right-now';
 
class ClickFX extends Component {

    handleClick(e) {
        let cursorPos = {
            top: e.clientY,
            left: e.clientX,
            time: now()
        };
        this.props.uiActions.clickFX(cursorPos)
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
    uiActions: bindActionCreators(UI_ACTIONS, dispatch),
    uxActions: bindActionCreators(UX_ACTIONS, dispatch),
  }
};

function mapStateToProps(state) {
  return {
    ui: state.ui,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClickFX);