import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UX_ACTIONS from '../../../../redux/actions/ux_actions';
import translate from '../../translations';
import { Row, Col, List, Button, Icon, Avatar, message } from 'antd';

import puzzleImg from '../../../../images/works/puzzle.jpg';
import ektaImg from '../../../../images/works/ekta.jpg';
import calcImg from '../../../../images/works/calc.jpg';
import seezisImg from '../../../../images/works/seezis.jpg';
import silverImg from '../../../../images/works/silver.jpg';
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
                type: translate( lang, 'demo' ),
                icon: <Icon type="experiment" theme="outlined" />,
                href: `${base}/Lab/Game/index.html`,
                back: `${puzzleImg}`,
                demo: true,
            },
            {
                name: translate( lang, 'work_2' ),
                type: translate( lang, 'released' ),
                icon: <Icon type="link" theme="outlined" />,
                href: 'http://ekta.ua/',
                back: `${ ektaImg }`,
                demo: false,
            },
            {
                name: translate( lang, 'work_3' ),
                type: translate( lang, 'demo' ),
                icon: <Icon type="experiment" theme="outlined" />,
                href: `${ base }/Lab/Calc/index.html`,
                back: `${ calcImg }`,
                demo: true,
            },
            {
                name: translate( lang, 'work_4' ),
                type: translate( lang, 'released' ),
                icon: <Icon type="link" theme="outlined" />, 
                href: 'https://seezislab.com/',
                back: `${ seezisImg }`,
            },
            {
                name: translate( lang, 'work_6' ),
                type: translate( lang, 'released' ),
                icon: <Icon type="link" theme="outlined" />, 
                href: 'https://silverstemcannabis.com/',
                back: `${ silverImg }`,
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

        const footer = (
            <div>
                <div>
                    { translate( lang, 'demo_status_desc' )}
                </div>
                <div>
                    { translate( lang, 'released_status_desc' )}
                </div>
            </div>
        );

        return (
            <div className="Works content">
                <List
                    size="large"
                    header={header}
                    footer={footer}
                    bordered
                    dataSource={links}
                    renderItem={item => (
                        <a target="_blank" className="link" href={item.href}>
                            <ListItem>
                                <ListMeta 
                                    
                                    avatar={ <Avatar src={item.back} /> }
                                    title={ item.type }
                                    description={item.name}
                                />
                                    {item.icon}
                            </ListItem>

                        </a>
                    )}
                />

                {/* <TrelloModal /> */}
            </div>
        )
    }
};

function mapDispatchToProps(dispatch) {
    return {
        uxActions: bindActionCreators(UX_ACTIONS, dispatch),
    }
};

function mapStateToProps(state) {
    return {
        ux: state.ux,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Works);