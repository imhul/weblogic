import React, { memo, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// components
import FPS from './FPS';
// utils
import translate from '../../utils/translations';

const Stats = memo(() => {
    const { lang } = useSelector(s => s.ui);
    const [parts, setParts] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setParts(window.bgJSDom[0].bgJS.parts.array.length);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="Stats" id="stats">
            <div className="left">
                <div className="parts">{parts}</div>
                <div className="text">{translate(lang, 'parts')}</div>
            </div>
            <div className="right">
                <div className="FPS">
                    <FPS />
                </div>
                <div className="text">{translate(lang, 'fps')}</div>
            </div>
        </div>
    );
});

export default Stats;
