import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// actions
import * as UX_ACTIONS from '../../redux/actions/ux_actions';
// utils
import menu from '../../utils/menu';
// components
import { Menu } from 'antd/lib';

class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'Home'
        };
    }

    navigate = url => {
        const { uxActions } = this.props;
        uxActions.updateLocation(url);
    };

    onClick = e => {
        this.setState({ current: e.key });
        this.navigate(e.key);
    };

    render() {
        const { current } = this.state;

        const menuItems = menu
            .filter(item => !item.isBlank)
            .map(item => ({
                key: item.key,
                icon: item.icon,
                label: <span onClick={() => this.navigate(item.key)}>{item.key}</span>
            }));

        return (
            <Menu
                onClick={this.onClick}
                selectedKeys={[current]}
                className="Menu"
                mode="horizontal"
                items={menuItems}
                style={{
                    background: 'rgba(42, 65, 76, 0.6)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderBottom: '1px solid rgba(42, 65, 76, 0.4)',
                    color: '#bcc8ce',
                    zIndex: 1,
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4
                }}
            />
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
        ui: state.ui,
        ux: state.ux
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
