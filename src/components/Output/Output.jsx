// core
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import '../../utils/bg';
import JsonLd from '../../utils/microdata';
import menu from '../../utils/menu';
// components
import {
    ContextMenu,
    MenuItem,
    ContextMenuTrigger
} from 'react-contextmenu';
import { Layout } from 'antd/lib';
import Portal from '../Portal';
import Toolbar from '../Toolbar';
import HowTo from '../HowTo';
import Stats from '../Stats';
import Home from '../Pages/Home';
import Folio from '../Pages/Folio';
import Loading from '../Pages/Loading';
import Game from '../Pages/Game';
import Notify from '../Notify';
// hooks
import useInitialization from '../../hooks/useInitialization';
import useSafe from '../../hooks/useSafe';
import useIpify from '../../hooks/useIpify';
import useLang from '../../hooks/useLang';
// just for demo
// import useAllUsers from '../../hooks/useAllUsers';
// import useCookies from '../../hooks/useCookies';
// import useTip from '../../hooks/useTip';

const { Content } = Layout;

const Page = ({ location }) => {
    switch (location) {
        case 'Home':
            return <Home />;
        case 'Game':
            return <Game />;
        case 'Folio':
            return <Folio />;
        case 'Loading':
            return <Loading />;
        default:
            return <Loading />;
    }
};

const Output = () => {
    useInitialization();
    useSafe();
    const { safe, location } = useSelector(s => s.ui);
    useIpify(safe);
    useLang();
    // just for demo
    // useTip();
    // useAllUsers();
    // useCookies();

    const dispatch = useDispatch();

    useEffect(() => {
        // just for demo
        if (location === 'Loading') {
            const timer = setTimeout(() => {
                dispatch({
                    type: 'SET_LOCATION',
                    payload: 'Home'
                });
                clearTimeout(timer);
            }, 2000);
        }
    }, [location]);

    const navigate = key => {
        dispatch({
            type: 'SET_LOCATION',
            payload: key
        });
    };

    return (
        <Layout className="LayoutMain">
            {location === 'Home' ? (
                <Portal>
                    <Stats />
                    <HowTo />
                    <Notify />
                </Portal>
            ) : null}
            {location !== 'Loading' ? <Toolbar key={0} /> : null}
            <ContextMenuTrigger id="context-menu">
                <Layout className="Main">
                    <Content>
                        <Page location={location} />
                    </Content>
                </Layout>
            </ContextMenuTrigger>
            {menu?.length && (
                <ContextMenu hideOnLeave id="context-menu">
                    <MenuItem
                        key={menu[0].key}
                        onClick={() => navigate(menu[0].key)}
                    >
                        {menu[0].icon} {menu[0].key}
                    </MenuItem>
                    <MenuItem
                        key={menu[1].key}
                        onClick={() => navigate(menu[1].key)}
                    >
                        {menu[1].icon} {menu[1].key}
                    </MenuItem>
                    <MenuItem
                        key={menu[2].key}
                        onClick={() => navigate(menu[2].key)}
                    >
                        {menu[2].icon} {menu[2].key}
                    </MenuItem>
                    <MenuItem key={menu[3].key}>
                        <a
                            href={menu[3].url}
                            target="_blank"
                            title={menu[3].key}
                            rel="noopener noreferrer"
                        >
                            {menu[3].icon} {menu[3].key}
                        </a>
                    </MenuItem>
                </ContextMenu>
            )}
            <JsonLd />
        </Layout>
    );
};

export default Output;
