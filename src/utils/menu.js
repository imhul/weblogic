import React from 'react';
import {
  HomeOutlined,
  CrownOutlined,
  GithubOutlined,
  LinkedinOutlined,
  BarChartOutlined,
  ExperimentOutlined,
  DollarCircleOutlined
} from '@ant-design/icons';

const menu = [
  {
    id: 'Home',
    url: '/',
    icon: <HomeOutlined />,
    blank: false
  },
  {
    id: 'Game',
    url: '/game',
    icon: <CrownOutlined />,
    blank: false
  },
  {
    id: 'Folio',
    url: '/folio',
    icon: <ExperimentOutlined />,
    blank: false
  },
  {
    id: 'Github',
    url: 'https://github.com/imhul/',
    icon: <GithubOutlined />,
    blank: true
  },
  {
    id: 'Patreon',
    url: 'https://www.patreon.com/protomass',
    icon: <DollarCircleOutlined />,
    blank: true
  },
  {
    id: 'Codecedemy',
    url: 'https://www.codecademy.com/profiles/weblogicfront',
    icon: <BarChartOutlined />,
    blank: true
  },
  {
    id: 'Linkedin',
    url: 'https://www.linkedin.com/in/tkachuk-zakhar-04733892/',
    icon: <LinkedinOutlined />,
    blank: true
  }
];

export default menu;
