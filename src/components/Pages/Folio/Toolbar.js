import React, { Component } from 'react';
import { Switch } from 'antd';

class Toolbar extends Component {
    render() {

        const { uxActions } = this.props;

        return (
            <div className="Toolbar">
                <Switch 
                    defaultChecked={ true }
                    onChange={ uxActions.langUpdate } 
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

export default connect(mapDispatchToProps)(Toolbar);