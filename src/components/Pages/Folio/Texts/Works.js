import React, { Component } from 'react';
import { connect } from 'react-redux';
import translate from '../../translations';
import { Row, Col, List, Button, Icon, message } from 'antd';
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
                name: translate( lang, 'work_1' ),
                type: (<span className="mobile-flex">
                    { translate( lang, 'demo' )}
                    <Icon type="experiment" theme="outlined" /> </span>
                ),
                href: `${base}/Lab/Game/index.html`,
            },
            {
                name: translate( lang, 'work_2' ),
                type: (<span className="mobile-flex">
                    { translate( lang, 'released' )}
                <Icon type="link" theme="outlined" /> </span>),
                href: 'http://ekta.ua/'
            },
            {
                name: translate( lang, 'work_3' ),
                type: (<span className="mobile-flex">
                    { translate( lang, 'demo' )}
                <Icon type="experiment" theme="outlined" /> </span>),
                href: `${base}/Lab/Calc/index.html`,
            },
            {
                name: translate( lang, 'work_4' ),
                type: (<span className="mobile-flex">
                    { translate( lang, 'released' )}
                <Icon type="link" theme="outlined" /> </span>),
                href: 'https://seezislab.com/'
            },
            {
                name: translate( lang, 'work_5' ),
                type: (<span className="mobile-flex">
                    { translate( lang, 'demo' )}
                <Icon type="experiment" theme="outlined" /></span>),
                href: `${base}/Lab/Presentation/index.html`,
            },
            {
                name: translate( lang, 'work_6' ),
                type: (<span className="mobile-flex">
                    { translate( lang, 'released' )}
                <Icon type="link" theme="outlined" /> </span>),
                href: 'https://silverstemcannabis.com/',
            },
        ];

        const header = (
            <Row gutter={24}>
                <Col span={12} style={{ textAlign: 'left' }}>
                    { translate( lang, 'project_desc' )}
                </Col>
                <Col span={12} style={{ textAlign: 'right' }}>
                    { translate( lang, 'status' )}
                </Col>
            </Row>
        );

        return (
            <div className="Works content">
                <List
                    size="large"
                    header={header}
                    bordered
                    dataSource={links}
                    renderItem={item => (
                        <a target="_blank" href={item.href}>
                            <ListItem>
                                {item.type}
                                <ListMeta title={ item.name } />
                            </ListItem>
                        </a>
                    )}
                />

                {/* <TrelloModal /> */}
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        ux: state.ux,
    }
};

export default connect(mapStateToProps)(Works);