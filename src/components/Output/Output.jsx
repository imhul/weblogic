// core
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import '../../utils/bg';
import JsonLd from '../../utils/microdata';
import menu from '../../utils/menu';
// components
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import { Layout } from 'antd/lib';
import Portal from '../Portal';
import MainMenu from '../MainMenu';
import Toolbar from '../Toolbar';
import HowTo from '../HowTo';
import Stats from '../Stats';
import Home from '../Pages/Home';
import Folio from '../Pages/Folio';
import Game from '../Pages/Game';
// hooks
import useInitialization from '../../hooks/useInitialization';

const { Content } = Layout;

const Page = ({ location }) => {
    switch (location) {
        case 'Home':
            return <Home />;
        case 'Game':
            return <Game />;
        case 'Folio':
            return <Folio />;
        default:
            return <Home />;
    }
};

const Output = () => {
    const { location } = useSelector(state => state.ux);
    const dispatch = useDispatch();
    useInitialization();

    const navigate = key => {
        dispatch({
            type: 'LOCATION_UPDATE',
            payload: key
        });
    };

    return (
        <Layout className="LayoutMain">
            {location === 'Home' ? (
                <Portal>
                    <Stats />
                </Portal>
            ) : null}
            {location === 'Home' ? <HowTo /> : <Toolbar key={0} />}
            <ContextMenuTrigger id="context-menu">
                <MainMenu />
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
