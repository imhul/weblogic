import React, { Component } from 'react';
import { Button, message } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

class HowTo extends Component {
    info() {
        message.info({
            content: 'Keep clicking anywhere!',
            duration: 3,
            style: {
                marginTop: '40px'
            }
        });
    }

    render() {
        return (
            <div className="HowTo" key="how-to">
                <Button
                    type="primary"
                    onClick={this.info}
                    shape="circle"
                    icon={<QuestionCircleOutlined />}
                    size="large"
                />
            </div>
        );
    }
}

export default HowTo;
