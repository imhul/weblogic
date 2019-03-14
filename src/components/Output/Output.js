import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { history } from '../../redux/store';
import * as UX_ACTIONS from '../../redux/actions/ux_actions';
import '../../fonts/fonts.css';
import '../../scss/index.scss';
import '../../utils/bg';
import { Layout } from 'antd';
import Stats from '../Stats';
import Home from '../Pages/Home';
import Folio from '../Pages/Folio';

const { Content } = Layout;

class Output extends Component {

    componentDidMount() {
        const { uxActions } = this.props;
        history.listen((location, action) => {
            uxActions.updateHistory(history.location.pathname)
        })
    };

    render() {

        const { isHome } = this.props.ux;

        return (
            <Layout className="LayoutMain">
                { isHome ? <Stats /> : null }
                <Layout className="Main">
                    <Content>
                        <Route exact path="/" component={ Home } />
                        <Route exact path="/folio" component={ Folio } />
                    </Content>
                </Layout>
            </Layout>
        )
    }
};

function mapDispatchToProps(dispatch) {
    return {
        uxActions: bindActionCreators(UX_ACTIONS, dispatch),
    }
};

function mapStateToProps(state) {
    return {
        ux: state.ux,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Output);
