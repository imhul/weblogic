import React, { memo, useState, useEffect } from 'react';
// components
import FPS from './FPS';

const Stats = memo(() => {
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
                <div className="text">parts</div>
            </div>
            <div className="right">
                <div className="FPS">
                    <FPS />
                </div>
                <div className="text">fps</div>
            </div>
        </div>
    );
});

export default Stats;
