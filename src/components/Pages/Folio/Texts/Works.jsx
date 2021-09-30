import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UX_ACTIONS from '../../../../redux/actions/ux_actions';
import translate from '../../translations';
import { Row, Col, List, Avatar } from 'antd';
import { LinkOutlined, GithubOutlined, ExperimentOutlined } from '@ant-design/icons';

import puzzleImg from '../../../../images/works/puzzle.jpg';
import ektaImg from '../../../../images/works/ekta.jpg';
import calcImg from '../../../../images/works/calc.jpg';
import seezisImg from '../../../../images/works/seezis.jpg';
import silverImg from '../../../../images/works/silver.jpg';
import testomatioImg from '../../../../images/works/testomatio.png';
import uapayImg from '../../../../images/works/uapay.png';
import aliceImg from '../../../../images/works/alice.png';
import mailcheckImg from '../../../../images/works/mailcheck.png';
// import TrelloModal from '../TrelloModal';
// Trello API
// import { isTrelloAvailable, authenticateUser, getBoard } from '../../../../utils/api';

const ListItem = List.Item;
const ListMeta = ListItem.Meta;

class Works extends Component {
  // componentDidMount() {
  //     console.log('ok?', isTrelloAvailable());
  //     setInterval(() => console.log('+1000. ok?', isTrelloAvailable()), 1000);
  //     setTimeout(() => console.log('+1000. ok?', authenticateUser()), 1000)
  // };

  render() {
    const { lang } = this.props.ux;
    const base = window.location.origin;
    const links = [
      {
        name: translate(lang, 'work_1'),
        type: translate(lang, 'demo'),
        icon: <ExperimentOutlined />,
        href: `${base}/Lab/Game/index.html`,
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
        name: translate(lang, 'work_8'),
        type: translate(lang, 'released'),
        icon: <LinkOutlined />,
        href: 'https://seezislab.com/',
        back: `${seezisImg}`,
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

        {/* <TrelloModal /> */}
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
    ux: state.ux
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Works);
