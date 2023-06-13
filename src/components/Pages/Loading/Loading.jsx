import React from 'react';

const lamp = new URL(
    '../../../images/icon-lamp-animated.svg',
    import.meta.url
);

const Loading = () => {
    return (
        <div
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <img src="../../../images/icon-lamp-animated.svg" alt="lamp" className="animated-lamp" />
        </div>
    );
}

export default Loading;
