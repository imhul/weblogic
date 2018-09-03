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
                name: 'Puzzle game, JavaScript',
                type: 'Live demo',
                href: '../../../../lab/game/index.html'
            },
            {
                name: 'Corporate project, CMS Joomla 3.6.2',
                type: 'Released',
                href: 'http://ekta.ua/'
            },
            {
                name: 'LED-screen calculator, Angular + Materialize',
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

        return (
            <div className="Works content">

                <Row gutter={24}>
                    <Col span={12}>
                        <Language
                            dictionary={{
                                english: "Project description",
                                russian: "Описание проекта"
                            }}
                        />
                    </Col>
                    <Col span={12}>
                        <Language
                            dictionary={{
                                english: "Status",
                                russian: "Статус"
                            }}
                        />
                    </Col>
                </Row>

                <List
                    size="large"
                    header={<h2 className="mobile-fix">
                        <Language
                            dictionary={{
                                english: "My works",
                                russian: "Мои работы"
                            }}
                        />
                    </h2>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={links}
                    renderItem={item => (
                        <ListItem>
                            <a href={item.href}>
                                {item.type}
                                <Icon
                                    type="link"
                                    style={{
                                        fontSize: '16px',
                                        color: item.type === 'Released' ? '#fdd835' : '#bcc8ce'
                                    }}
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