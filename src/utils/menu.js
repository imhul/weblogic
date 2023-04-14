import React from 'react';
import {
    HomeOutlined,
    CrownOutlined,
    GithubOutlined,
    // LinkedinOutlined,
    // BarChartOutlined,
    ExperimentOutlined
    // DollarCircleOutlined
} from '@ant-design/icons';

const menu = [
    {
        key: 'Home',
        url: '/',
        icon: <HomeOutlined />,
        isBlank: false
    },
    {
        key: 'Game',
        url: '/game',
        icon: <CrownOutlined />,
        isBlank: false
    },
    {
        key: 'Folio',
        url: '/folio',
        icon: <ExperimentOutlined />,
        isBlank: false
    },
    {
        key: 'Github',
        url: 'https://github.com/imhul/',
        icon: <GithubOutlined />,
        isBlank: true
    }
    // {
    //     key: 'Patreon',
    //     url: 'https://www.patreon.com/protomass',
    //     icon: <DollarCircleOutlined />,
    //     isBlank: true
    // },
    // {
    //     key: 'Codecedemy',
    //     url: 'https://www.codecademy.com/profiles/weblogicfront',
    //     icon: <BarChartOutlined />,
    //     isBlank: true
    // },
    // {
    //     key: 'Linkedin',
    //     url: 'https://www.linkedin.com/in/tkachuk-zakhar-04733892/',
    //     icon: <LinkedinOutlined />,
    //     isBlank: true
    // }
];

export default menu;
