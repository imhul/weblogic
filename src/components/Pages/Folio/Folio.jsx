import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import translate from '../../../utils/translations';
// components
import { Helmet } from 'react-helmet';
import { Collapse } from 'antd/lib';
import { Intro, Roadmap, Works, Contact } from '../../Tabs';
import {
    MessageOutlined,
    RocketOutlined,
    PoweroffOutlined,
    CompassOutlined
} from '@ant-design/icons';

const { Panel } = Collapse;

const Folio = memo(() => {
    const { safe, active, lang } = useSelector(s => s.ui);
    const dispatch = useDispatch();
    const renderTexts = [
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
                <link rel="canonical" href={safe.base} />
            </Helmet>
            <Collapse
                accordion
                destroyInactivePanel
                defaultActiveKey={active}
                onChange={key =>
                    dispatch({
                        type: 'TAB_MODIFY',
                        payload: key
                    })
                }
                className={active ? 'active' : null}
            >
                {renderTexts}
            </Collapse>
        </div>
    );
});

export default Folio;
