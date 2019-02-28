import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';

import '../../fonts/fonts.css';
import '../../scss/index.scss';
import '../../utils/bg';

import Stats from '../Stats';
import Home from '../Pages/Home';
import Folio from '../Pages/Folio';

const { Content } = Layout;

class Output extends Component {
    render() {
        const { isHome } = this.props.ui;
        return (
            <Layout className="LayoutMain">
                { isHome ? <Stats /> : null }
                <Layout className="Main">
                    <Content>
                        { isHome ? <Home /> : <Folio /> }
                    </Content>
                </Layout>
            </Layout>
        )
    }
};

function mapStateToProps(state) {
    return {
        ui: state.ui,
    }
};

export default connect(mapStateToProps)(Output);
