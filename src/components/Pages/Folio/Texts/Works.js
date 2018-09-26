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
        const links = [
            {
                name: ( <Language dictionary={{
                        english: "Puzzle game, JavaScript + Canvas",
                        russian: "Игра 'Пазлы', JavaScript + Canvas"
                    }}
                />),
                type: 'Live demo',
                href: '../../../../lab/game/index.html'
            },
            {
                name: ( <Language dictionary={{
                        english: "Corporate project, Joomla CMS 3.6.2",
                        russian: "Корпоративный сайт на базе Joomla CMS 3.6.2"
                    }}
                />),
                type: 'Released',
                href: 'http://ekta.ua/'
            },
            {
                name: ( <Language dictionary={{
                        english: "LED-screen calculator, Angular + Materialize",
                        russian: "Калькулятор LED панелей, Angular + Materialize"
                    }}
                />),
                type: 'Live demo',
                href: '../../../../lab/calc/index.html'
            },
            {
                name: 'Analytical project, js + python + Materialize',
                type: 'Released',
                href: 'https://seezislab.com/'
            },
            {
                name: 'Web presentation, Rreveal.js',
                type: 'Live demo',
                href: '../../../../lab/presentation/index.html'
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
                                <Icon
                                    type="link"
                                    style={{ color: item.type === 'Released' ? '#fdd835' : '#bcc8ce' }}
                                />
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