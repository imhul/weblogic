import React, { memo } from 'react';
import { useSelector } from 'react-redux';
// components
import { Row, Col, List, Avatar } from 'antd/lib';
import {
    LinkOutlined,
    // GithubOutlined,
    ExperimentOutlined
} from '@ant-design/icons';
// import TrelloModal from '../TrelloModal';
// utils
import translate from '../../../../utils/translations';
// Trello API
// import { isTrelloAvailable, authenticateUser, getBoard } from '../../../../utils/api';
// assets
import puzzleImg from '../../../../images/works/puzzle.jpg';
import ektaImg from '../../../../images/works/ekta.jpg';
import calcImg from '../../../../images/works/calc.jpg';
import silverImg from '../../../../images/works/silver.jpg';
import testomatioImg from '../../../../images/works/testomatio.png';
import uapayImg from '../../../../images/works/uapay.png';
import aliceImg from '../../../../images/works/alice.png';
import mailcheckImg from '../../../../images/works/mailcheck.png';

const ListItem = List.Item;
const ListMeta = ListItem.Meta;

const Works = memo(() => {
    const { lang } = useSelector(state => state.ux);
    const links = [
        {
            name: translate(lang, 'work_1'),
            type: translate(lang, 'demo'),
            icon: <ExperimentOutlined />,
            href: 'https://puzzle-demo-game.netlify.app/',
            back: `${puzzleImg}`,
            demo: true
        },
        {
            name: translate(lang, 'work_2'),
            type: translate(lang, 'released'),
            icon: <LinkOutlined />,
            href: 'http://ekta.ua/',
            back: `${ektaImg}`,
            demo: false
        },
        {
            name: translate(lang, 'work_3'),
            type: translate(lang, 'released'),
            icon: <LinkOutlined />,
            href: 'http://ekta.ua/projects/calc',
            back: `${calcImg}`,
            demo: false
        },
        {
            name: translate(lang, 'work_4'),
            type: translate(lang, 'released'),
            icon: <LinkOutlined />,
            href: 'https://marketplace.atlassian.com/apps/1224120/testomatio',
            back: `${testomatioImg}`,
            demo: false
        },
        {
            name: translate(lang, 'work_5'),
            type: translate(lang, 'released'),
            icon: <LinkOutlined />,
            href: 'https://uapay.ua/',
            back: `${uapayImg}`,
            demo: false
        },
        {
            name: translate(lang, 'work_6'),
            type: translate(lang, 'released'),
            icon: <LinkOutlined />,
            href: 'https://silverstemcannabis.com/',
            back: `${silverImg}`,
            demo: false
        },
        {
            name: translate(lang, 'work_7'),
            type: translate(lang, 'released'),
            icon: <LinkOutlined />,
            href: 'https://www.youtube.com/watch?v=BVdyHZSsD3Y',
            back: `${aliceImg}`,
            demo: false
        },
        {
            name: translate(lang, 'work_9'),
            type: translate(lang, 'released'),
            icon: <LinkOutlined />,
            href: 'https://mailcheck.co/',
            back: `${mailcheckImg}`,
            demo: false
        }
    ];

    const Header = () => (
        <Row gutter={24}>
            <Col span={12} style={{ textAlign: 'left' }}>
                {translate(lang, 'project_desc')}
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
                {translate(lang, 'status')}
            </Col>
        </Row>
    );

    const Footer = () => (
        <div>
            <div>{translate(lang, 'demo_status_desc')}</div>
            <div>{translate(lang, 'released_status_desc')}</div>
        </div>
    );

    return (
        <div className="Works content">
            <List
                size="large"
                header={<Header />}
                footer={<Footer />}
                bordered
                dataSource={links}
                renderItem={item => (
                    <a target="_blank" className="link" href={item.href}>
                        <ListItem>
                            <ListMeta
                                avatar={<Avatar src={item.back} />}
                                title={item.type}
                                description={item.name}
                            />
                            {item.icon}
                        </ListItem>
                    </a>
                )}
            />
            <div className="helper" />

            {/* <TrelloModal /> */}
        </div>
    );
});

export default Works;
