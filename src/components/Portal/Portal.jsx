import React, { memo, useEffect } from 'react';
import { createPortal } from 'react-dom';

const portal = document.getElementById('portal');

const Portal = memo(({ children }) => {
    const element = document.createElement('div');

    useEffect(() => {
        portal.appendChild(element);

        return () => {portal.removeChild(element)};
    });

    return createPortal(children, element, 'portal');
});

export default Portal;
