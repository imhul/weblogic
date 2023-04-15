import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// actions
import * as UX_ACTIONS from '../../../redux/actions/ux_actions';
// utils
import translate from '../../../utils/translations';
// components
import { Helmet } from 'react-helmet';
import { Collapse } from 'antd/lib';
import { Intro, Roadmap, Works, Contact } from './Texts';
import {
    MessageOutlined,
    RocketOutlined,
    PoweroffOutlined,
    CompassOutlined
} from '@ant-design/icons';

const { Panel } = Collapse;

class Folio extends Component {
    render() {
        const { active, lang } = this.props.ux;
        const { uxActions } = this.props;

        const texts = [
            {
                icon: <PoweroffOutlined />,
                key: 'intro',
                text: <Intro />
            },
            {
                icon: <CompassOutlined />,
                key: 'roadmap',
                text: <Roadmap />
            },
            {
                icon: <RocketOutlined />,
                key: 'works',
                text: <Works />
            },
            {
                icon: <MessageOutlined />,
                key: 'contacts',
                text: <Contact />
            }
        ].map(load => (
            <Panel
                header={
                    <div className="bg">
                        <div>
                            {translate(lang, load.key)}
                            {load.icon}
                        </div>
                    </div>
                }
                key={load.key}
                showArrow={false}
            >
                {load.text}
            </Panel>
        ));

        return (
            <div className="Folio" tabIndex="1">
                <Helmet>
                    <title>My Portfolio</title>
                    <link rel="canonical" href="https://weblogic.netlify.app/" />
                </Helmet>
                <Collapse
                    accordion
                    destroyInactivePanel
                    defaultActiveKey={active}
                    onChange={uxActions.tabMod}
                    className={active ? 'active' : null}
                >
                    {texts}
                </Collapse>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Folio);
