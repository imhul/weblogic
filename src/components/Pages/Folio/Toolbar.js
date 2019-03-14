import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UX_ACTIONS from '../../../redux/actions/ux_actions';
import { Switch } from 'antd';

class Toolbar extends Component {
    render() {
        const { uxActions } = this.props;
        return (
            <div className="Toolbar">
                <Switch 
                    defaultChecked={ true }
                    onChange={ (data) => uxActions.langUpdate(data) } 
                    unCheckedChildren="ru" 
                    checkedChildren="en" 
                />
            </div>
        );
    }
};

function mapDispatchToProps(dispatch) {
    return {
        uxActions: bindActionCreators(UX_ACTIONS, dispatch),
    }
};

export default connect(null, mapDispatchToProps)(Toolbar);