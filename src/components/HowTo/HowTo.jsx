import React, { memo, useState, useEffect, useRef } from 'react';
// components
import { Button, Tooltip, message } from 'antd/lib';
import { QuestionCircleOutlined, RedoOutlined } from '@ant-design/icons';

const HowTo = memo(() => {
    const [open, setOpen] = useState(false);
    const [repeats, setRepeats] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        if (repeats > 3) return;
        if (open) {
            ref.current.click();
        }
        const timeout = setTimeout(() => {
            setOpen(open => !open);
            setRepeats(prev => prev + 1);
        }, 500);

        return () => clearTimeout(timeout);
    });

    return (
        <div className="HowTo">
            <Tooltip placement="left" title="Reset" open={open}>
                <Button
                    ref={ref}
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
