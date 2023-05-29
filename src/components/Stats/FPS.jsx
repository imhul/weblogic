import React, { useEffect, useReducer, useRef } from 'react';

const FPS = () => {
    const [state, dispatch] = useReducer(
        state => {
            const currentTime = Date.now();
            if (currentTime > state.prevTime + 1000) {
                const nextFPS = [
                    ...new Array(
                        Math.floor(
                            (currentTime - state.prevTime - 1000) /
                                1000
                        )
                    ).fill(0),
                    Math.max(
                        1,
                        Math.round(
                            (state.frames * 1000) /
                                (currentTime - state.prevTime)
                        )
                    )
                ];
                return {
                    len: Math.min(state.len + nextFPS.length, 70),
                    fps: [...state.fps, ...nextFPS].slice(-70),
                    frames: 1,
                    prevTime: currentTime
                };
            } else {
                return { ...state, frames: state.frames + 1 };
            }
        },
        {
            len: 0,
            frames: 0,
            prevTime: Date.now(),
            fps: []
        }
    );

    const requestRef = useRef();
    const tick = () => {
        dispatch();
        requestRef.current = requestAnimationFrame(tick);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    const { fps, len } = state;

    return fps[len - 1];
};

export default FPS;
