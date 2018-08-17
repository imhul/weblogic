import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';

const { Footer } = Layout;

class MainFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Footer className="MainFooter">
                <Row type="flex" justify="space-between" align="middle" gutter={16} className="MainFooter_container">
                    <Col span={6}>
                        footer logo
                    </Col>
                    <Col span={12}>
                        footer menus
                    </Col>
                    <Col span={6}>
                        social icons
                    </Col>
                </Row>
            </Footer>
        );
    }
}

export default MainFooter
