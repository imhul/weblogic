import React, { Component } from 'react';
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
        const base = window.location.origin;
        const links = [
            {
                name: (<Language dictionary={{
                    english: "Puzzle game, JavaScript + Canvas + design",
                    russian: "Игра 'Пазлы', JavaScript + Canvas + дизайн"
                }}
                />),
                type: (<span className="mobile-flex"><Language dictionary={{
                    english: "Demo",
                    russian: "Демо"
                }}
                /><Icon type="experiment" theme="outlined" /> </span>),
                href: `${base}/Lab/Game/index.html`,
            },
            {
                name: (<Language dictionary={{
                    english: "Corporate project, Joomla + design",
                    russian: "Корпоративный сайт, Joomla + дизайн"
                }}
                />),
                type: (<span className="mobile-flex"><Language dictionary={{
                    english: "Released",
                    russian: "Релиз"
                }}
                /><Icon type="link" theme="outlined" /> </span>),
                href: 'http://ekta.ua/'
            },
            {
                name: (<Language dictionary={{
                    english: "LED-screen calculator, Angular + Materialize + design",
                    russian: "Калькулятор LED панелей, Angular + Materialize + дизайн"
                }}
                />),
                type: (<span className="mobile-flex"><Language dictionary={{
                    english: "Demo",
                    russian: "Демо"
                }}
                /><Icon type="experiment" theme="outlined" /> </span>),
                href: `${base}/Lab/Calc/index.html`,
            },
            {
                name: (<Language dictionary={{
                    english: "Analytical resource, JavaScript + jQuery + Materialize + design",
                    russian: "Аналитический ресурс, JavaScript + jQuery + Materialize + дизайн"
                }}
                />),
                type: (<span className="mobile-flex"><Language dictionary={{
                    english: "Released",
                    russian: "Релиз"
                }}
                /><Icon type="link" theme="outlined" /> </span>),
                href: 'https://seezislab.com/'
            },
            {
                name: (<Language dictionary={{
                    english: "Web presentation, Rreveal.js",
                    russian: "Веб-презентация, Rreveal.js"
                }}
                />),
                type: (<span className="mobile-flex"><Language dictionary={{
                    english: "Demo",
                    russian: "Демо"
                }}
                /><Icon type="experiment" theme="outlined" /></span>),
                href: `${base}/Lab/Presentation/index.html`,
            },
            {
                name: (<Language dictionary={{
                    english: "e-commerce project, React + Redux + masonry + design",
                    russian: "Интернет-магазин, React + Redux + masonry + дизайн"
                }}
                />),
                type: (<span className="mobile-flex"><Language dictionary={{
                    english: "Released",
                    russian: "Релиз"
                }}
                /><Icon type="link" theme="outlined" /> </span>),
                href: 'https://silverstemcannabis.com/',
            },
        ];
        const header = (
            <Row gutter={24}>
                <Col span={12} style={{ textAlign: 'left' }}>
                    <Language
                        dictionary={{
                            english: "Project description",
                            russian: "Описание проекта"
                        }}
                    />
                </Col>
                <Col span={12} style={{ textAlign: 'right' }}>
                    <Language
                        dictionary={{
                            english: "Status",
                            russian: "Статус"
                        }}
                    />
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
}

export default Works;