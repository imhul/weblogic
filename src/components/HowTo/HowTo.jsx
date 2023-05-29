import React, { memo, useState, useEffect } from 'react';
// components
import { Button, Tooltip, message } from 'antd/lib';
import {
    QuestionCircleOutlined,
    RedoOutlined
} from '@ant-design/icons';
// utils
import { messageOptions } from '../../utils/config';

const HowTo = memo(() => {
    const [open, setOpen] = useState(false);
    const [repeats, setRepeats] = useState(0);

    useEffect(() => {
        if (repeats > 10) return;
        const timeout = setTimeout(() => {
            setOpen(open => (repeats < 7 ? false : !open));
            setRepeats(prev => prev + 1);
        }, 500);

        return () => clearTimeout(timeout);
    });

    return (
        <div className="HowTo">
            <Tooltip placement="left" title="Reset" open={open}>
                <Button
                    type="primary"
                    onClick={() =>
                        window.bgJSDom[0].bgJS.fn.particlesRefresh()
                    }
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
                        ...messageOptions
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
