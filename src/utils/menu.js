import React from 'react';
import {
    HomeOutlined,
    CrownOutlined,
    GithubOutlined,
    LinkedinOutlined,
    BarChartOutlined,
    ExperimentOutlined,
    DollarCircleOutlined,
} from '@ant-design/icons';

const menu = [
    {
        id: 'Home',
        url: '/',
        icon: <HomeOutlined />,
    },
    {
        id: 'Game',
        url: '/game',
        icon: <CrownOutlined />,
    },
    {
        id: 'Portfolio',
        url: '/folio',
        icon: <ExperimentOutlined />,
    },
    {
        id: 'Github',
        url: 'https://github.com/imhul/weblogic',
        icon: <GithubOutlined />,
    },
    {
        id: 'Patreon',
        url: 'https://www.patreon.com/protomass',
        icon: <DollarCircleOutlined />,
    },
    {
        id: 'Codecedemy',
        url: 'https://www.codecademy.com/profiles/weblogicfront',
        icon: <BarChartOutlined />,
    },
    {
        id: 'Linkedin',
        url: 'https://www.linkedin.com/in/tkachuk-zakhar-04733892/',
        icon: <LinkedinOutlined />,
    }
];

export default menu
