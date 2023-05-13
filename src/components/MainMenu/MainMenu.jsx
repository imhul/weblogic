// core
import React, { memo, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
// utils
import menu from '../../utils/menu';
// components
import { Menu } from 'antd/lib';

const MainMenu = memo(() => {
    const [currentPage, setCurrentPage] = useState('Home');
    const dispatch = useDispatch();

    const navigate = useCallback(e => {
        const key = e.key;
        setCurrentPage(key);
        dispatch({
            type: 'LOCATION_UPDATE',
            payload: key
        });
    });

    const menuItems = menu
        .filter(item => !item.isBlank)
        .map(item => ({
            key: item.key,
            icon: item.icon,
            label: <span className="mobile-hide">{item.key}</span>
        }));

    return (
        <Menu
            onClick={navigate}
            selectedKeys={[currentPage]}
            className="Menu"
            mode="horizontal"
            items={menuItems}
            style={{
                background: 'rgba(42, 65, 76, 0.6)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderBottom: '1px solid rgba(42, 65, 76, 0.4)',
                color: '#bcc8ce',
                zIndex: 1,
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4
            }}
        />
    );
});

export default MainMenu;
