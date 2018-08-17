import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';

const { Sider } = Layout;
const MenuItem = Menu.Item

class LeftSider extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Sider className="LeftSider">
                <Menu
                    theme="dark"
                    mode="vertical"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <MenuItem key="1">
                        <Link className="menu-link" to={'/'}> Home </Link>
                    </MenuItem>
                    <MenuItem key="2">
                        <Link className="menu-link" to={'/catalog'}> Catalog </Link>
                    </MenuItem>
                </Menu>
            </Sider>
        );
    }
}

export default LeftSider;



