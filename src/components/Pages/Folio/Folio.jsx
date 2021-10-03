import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// actions
import * as UX_ACTIONS from '../../../redux/actions/ux_actions';
// utils
import translate from '../../../utils/translations';
// components
import { Helmet } from 'react-helmet';
import { Collapse } from 'antd';
import { Intro, Roadmap, Works, Contact } from './Texts';
import {
    MessageOutlined,
    RocketOutlined,
    PoweroffOutlined,
    CompassOutlined
} from '@ant-design/icons';

const Panel = Collapse.Panel;

class Folio extends Component {
    render() {
        const { active, lang } = this.props.ux;
        const { uxActions } = this.props;

        const texts = [
            {
                id: 'intro',
                name: (
                    <div>
                        {translate(lang, 'intro')}
                        <PoweroffOutlined />
                    </div>
                ),
                key: 1,
                text: <Intro />
            },
            {
                id: 'roadmap',
                name: (
                    <div>
                        {translate(lang, 'roadmap')}
                        <CompassOutlined />
                    </div>
                ),
                key: 2,
                text: <Roadmap />
            },
            {
                id: 'works',
                name: (
                    <div>
                        {translate(lang, 'works')}
                        <RocketOutlined />
                    </div>
                ),
                key: 3,
                text: <Works />
            },
            {
                id: 'contacts',
                name: (
                    <div>
                        {translate(lang, 'contacts')}
                        <MessageOutlined />
                    </div>
                ),
                key: 4,
                text: <Contact />
            }
        ];

        return (
            <div className="Folio" tabIndex="1">
                <Helmet>
                    <title>My Portfolio</title>
                    <link rel="canonical" href="http://weblogic.com.ua/" />
                </Helmet>
                <Collapse
                    accordion
                    destroyInactivePanel
                    defaultActiveKey={active}
                    onChange={uxActions.tabMod}
                    className={active ? 'active' : null}
                >
                    {texts.map(load => (
                        <Panel
                            id={load.id}
                            header={<div className="bg">{load.name}</div>}
                            key={load.key}
                            showArrow={false}
                        >
                            {load.text}
                        </Panel>
                    ))}
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
