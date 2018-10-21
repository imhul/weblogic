import React, { Component } from 'react';
import { Row, Col, List, Button, Icon, message } from 'antd';
import { LanguageProvider, Language } from '../../../../utils/language/provider';

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
                name: ( <Language dictionary={{
                        english: "Puzzle game, JavaScript + Canvas",
                        russian: "Игра 'Пазлы', JavaScript + Canvas"
                    }}
                />),
                type: (<span><Language dictionary={{
                        english: "Live demo",
                        russian: "Демо"
                    }}
                /><Icon type="experiment" theme="outlined" /> </span>),
                href: `${base}/Lab/Game/index.html`,
            },
            {
                name: ( <Language dictionary={{
                        english: "Corporate project, Joomla CMS 3.6.2",
                        russian: "Корпоративный сайт, Joomla CMS 3.6.2"
                    }}
                />),
                type: (<span><Language dictionary={{
                        english: "Released",
                        russian: "Релиз"
                    }}
                /><Icon type="link" theme="outlined" /> </span>),
                href: 'http://ekta.ua/'
            },
            {
                name: ( <Language dictionary={{
                        english: "LED-screen calculator, Angular + Materialize",
                        russian: "Калькулятор LED панелей, Angular + Materialize"
                    }}
                />),
                type: (<span><Language dictionary={{
                        english: "Live demo",
                        russian: "Демо"
                    }}
                /><Icon type="experiment" theme="outlined" /> </span>),
               href: `${base}/Lab/Calc/index.html`,
            },
            {
                name: ( <Language dictionary={{
                        english: "Analytical resource, JavaScript + Python + Materialize",
                        russian: "Аналитический ресурс, Angular + Materialize"
                    }}
                />),
                type: (<span><Language dictionary={{
                        english: "Released",
                        russian: "Релиз"
                    }}
                /><Icon type="link" theme="outlined" /> </span>),
                href: 'https://seezislab.com/'
            },
            {
                name: ( <Language dictionary={{
                        english: "Web presentation, ",
                        russian: "Веб-презентация, Rreveal.js"
                    }}
                />),
                type: (<span><Language dictionary={{
                        english: "Live demo",
                        russian: "Демо"
                    }}
                    /><Icon type="experiment" theme="outlined" /></span>),
               href: `${base}/Lab/Presentation/index.html`,
            }
        ];
        const header = (<Row gutter={24}>
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
        </Row>);

        return (
            <div className="Works content">

                <List
                    size="large"
                    header={ header }
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