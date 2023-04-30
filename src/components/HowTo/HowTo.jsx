import React, { memo } from 'react';
// components
import { Button, Tooltip, message } from 'antd/lib';
import { QuestionCircleOutlined, RedoOutlined } from '@ant-design/icons';

const HowTo = memo(() => {
    return (
        <div className="HowTo">
            <Tooltip placement="left" title="Reset">
                <Button
                    type="primary"
                    onClick={() => window.bgJSDom[0].bgJS.fn.particlesRefresh()}
                    shape="circle"
                    icon={<RedoOutlined />}
                    size="large"
                />
            </Tooltip>
            <Button
                type="primary"
                onClick={() =>
                    message.info({
                        content: 'Keep clicking anywhere!',
                        duration: 3,
                        style: {
                            marginTop: '40px'
                        }
                    })
                }
                shape="circle"
                icon={<QuestionCircleOutlined />}
                size="large"
            />
        </div>
    );
});

export default HowTo;
