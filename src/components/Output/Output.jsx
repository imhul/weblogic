import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// actions
import * as UX_ACTIONS from '../../redux/actions/ux_actions';
// utils
import '../../utils/bg';
import JsonLd from '../../utils/microdata';
import menu from '../../utils/menu';
// components
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import { Layout } from 'antd/lib'
import Portal from '../Portal';
import MainMenu from '../MainMenu';
import Toolbar from '../Toolbar';
import HowTo from '../HowTo';
import Stats from '../Stats';
import Home from '../Pages/Home';
import Folio from '../Pages/Folio';
import Game from '../Pages/Game';

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
    componentDidMount() {
        const { uxActions } = this.props;
        const pathname = window.location.pathname;
        
        if (pathname !== '/') {
            const oldPath =  pathname.slice(1, 2).toUpperCase() + pathname.slice(2);
            uxActions.updateLocation(oldPath);
        }
    }

    render() {
        const { location } = this.props.ux;
        const { uxActions } = this.props;

        return (
            <Layout className="LayoutMain">
                <ContextMenuTrigger id="context-menu">
                    {location === 'Home' ? (
                        <Portal>
                            <Stats />
                        </Portal>
                    ) : null}
                    {location === 'Home' ? <HowTo /> : <Toolbar key={0} />}
                    <MainMenu />
                    <Layout className="Main">
                        <Content>
                            <Pages location={location} />
                        </Content>
                    </Layout>
                </ContextMenuTrigger>
                {menu?.length && <ContextMenu hideOnLeave id="context-menu">
                    <MenuItem key={menu[0].key} onClick={() => uxActions.updateLocation(menu[0].url)}>
                        {menu[0].icon} {menu[0].key}
                    </MenuItem>
                    <MenuItem key={menu[1].key} onClick={() => uxActions.updateLocation(menu[1].url)}>
                        {menu[1].icon} {menu[1].key}
                    </MenuItem>
                    <MenuItem key={menu[2].key} onClick={() => uxActions.updateLocation(menu[2].url)}>
                        {menu[2].icon} {menu[2].key}
                    </MenuItem>
                    <MenuItem key={menu[3].key} onClick={() => uxActions.updateLocation(menu[3].url)}>
                        {menu[3].icon} {menu[3].key}
                    </MenuItem>
                </ContextMenu>}
                <JsonLd />
            </Layout>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        uxActions: bindActionCreators(UX_ACTIONS, dispatch)
    };
}

function mapStateToProps(state) {
    return {
        ui: state.ui,
        ux: state.ux
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Output);
