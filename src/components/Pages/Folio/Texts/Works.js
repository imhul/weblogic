import React, { Component } from 'react';
import { Row, Col, List, Button, Icon, message } from 'antd';
import { Language } from '../../../../utils/language/provider';

const ListItem = List.Item;
const ListMeta = ListItem.Meta;

class Works extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const base = window.location.origin;
        console.info("base: ", base);
        // TODO: Require to copy Lab folder from the root to dist!!!
        const links = [
            {
                name: (<Language dictionary={{
                    english: "Puzzle game, JavaScript + Canvas + design",
                    russian: "Игра 'Пазлы', JavaScript + Canvas + design"
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
                    russian: "Корпоративный сайт, Joomla + design"
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
                    russian: "Калькулятор LED панелей, Angular + Materialize + design"
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
                    russian: "Аналитический ресурс, Angular + jQuery + Materialize + design"
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
                    russian: "Интернет-магазин', React + Redux + masonry + design"
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
                        <ListItem>
                            <a href={item.href}>
                                {item.type}
                            </a>

                            <ListMeta title={item.name} />
                        </ListItem>
                    )}
                />

            </div>
        )
    }
}

export default Works;