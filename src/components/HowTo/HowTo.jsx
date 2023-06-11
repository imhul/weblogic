import React, { memo, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// components
import { Button, Tooltip, message } from 'antd/lib';
import {
    QuestionCircleOutlined,
    RedoOutlined
} from '@ant-design/icons';
// utils
import translate from '../../utils/translations';
import { NOTIFY_OPTIONS } from '../../utils/config';

const HowTo = memo(() => {
    const { lang } = useSelector(state => state.ui);
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
                        content: translate(lang, 'keep_clicking'),
                        ...NOTIFY_OPTIONS
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
