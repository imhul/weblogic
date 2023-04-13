import React, { Component } from 'react';
import { connect } from 'react-redux';
// utils
import '../../utils/bg';
import JsonLd from '../../utils/microdata';
import menu from '../../utils/menu';
// components
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import { Layout } from 'antd';
import Portal from '../Portal';
import Menu from '../Menu';
import Toolbar from '../Toolbar';
import HowTo from '../HowTo';
import Stats from '../Stats';
import Home from '../Pages/Home';
import Folio from '../Pages/Folio';
import Game from '../Pages/Game';
// styles
import '../../fonts/fonts.css';
import '../../scss/index.scss';

const { Content } = Layout;

const Pages = ({ location }) => {
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

class Output extends Component {
    render() {
        const { location } = this.props.ux;

        return (
            <Layout className="LayoutMain">
                <ContextMenuTrigger id="context-menu">
                    {location === 'Home' ? (
                        <Portal>
                            <Stats />
                        </Portal>
                    ) : null}
                    {location === 'Home' ? <HowTo /> : <Toolbar key={0} />}
                    <Menu />
                    <Layout className="Main">
                        <Content>
                            <Pages location={location} />
                        </Content>
                    </Layout>
                </ContextMenuTrigger>
                <ContextMenu hideOnLeave id="context-menu">
                    {menu.map(item => {
                        return (
                            <MenuItem key={item.id} onClick={() => history.push(item.url)}>
                                {item.icon} {item.id}
                            </MenuItem>
                        );
                    })}
                </ContextMenu>
                <JsonLd />
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {
        ui: state.ui,
        ux: state.ux
    };
}

export default connect(mapStateToProps)(Output);
