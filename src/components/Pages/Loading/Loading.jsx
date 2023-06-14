import React from 'react';
import lamp from '~/src/images/icon-lamp-animated.svg';

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
            <img src={lamp} alt="loading" />
        </div>
    );
};

export default Loading;
