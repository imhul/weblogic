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
    id: 'Portfolio',
    url: '/folio',
    icon: <ExperimentOutlined />,
    blank: false
  },
  {
    id: 'Github',
    url: '/github',
    icon: <GithubOutlined />,
    blank: true
  },
  {
    id: 'Patreon',
    url: '/patreon',
    icon: <DollarCircleOutlined />,
    blank: true
  },
  {
    id: 'Codecedemy',
    url: '/codecademy',
    icon: <BarChartOutlined />,
    blank: true
  },
  {
    id: 'Linkedin',
    url: '/linkedin',
    icon: <LinkedinOutlined />,
    blank: true
  }
];

export default menu;
