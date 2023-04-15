import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UX_ACTIONS from '../../redux/actions/ux_actions';
import { Switch } from 'antd/lib';

class Toolbar extends Component {
    render() {
        const { uxActions } = this.props;
        const { lang } = this.props.ux;
        return (
            <div className="Toolbar">
                <Switch
                    defaultChecked={lang === 'english' ? true : false}
                    onChange={data => uxActions.langUpdate(data)}
                    unCheckedChildren="en"
                    checkedChildren="ua"
                />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        uxActions: bindActionCreators(UX_ACTIONS, dispatch)
    };
}

function mapStateToProps(state) {
    return {
        ux: state.ux
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
