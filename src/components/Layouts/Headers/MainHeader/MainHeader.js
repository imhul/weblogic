import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';

const { Header } = Layout;

class MainHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Header className="MainHeader">
                <Row type="flex" justify="space-between" align="middle" gutter={16} className="MainHeader_container">
                    <Col span={6}>
                        logo
                    </Col>
                    <Col span={12}>
                        top menu
                    </Col>
                    <Col span={6}>
                        search, login
                    </Col>
                </Row>
            </Header>
        );
    }
}

export default MainHeader

