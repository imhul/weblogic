import React, { Component } from 'react';
import { Timeline } from 'antd';
import { Language } from '../../provider';

const TimelineItem = Timeline.Item;

class Roadmap extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const pending = (
            <div>
                <span>2019: </span>
                <a href="https://ant.design/docs/react/practical-projects" title="antd DVA docs" target="_blank">
                    DVA
                </a>, SSR, Jest, ESLint, Flow, Webpack
            </div>
        );
        return (
            // ant-timeline-alternate
            <div className="Roadmap content">
                <Timeline pending={pending} mode="alternate">
                    <TimelineItem>
                        <span><Language dictionary={{
                            english: "Nov",
                            russian: "Ноябрь"
                        }}
                        /> 2009: </span>
                        <Language dictionary={{
                            english: "I started learning CSS, HTML, Joomla CMS and the web design basics with Adobe Photoshop. I made the first site on pure html + css and one more on Joomla",
                            russian: "Я начал изучать CSS, HTML, Joomla CMS а так же основы веб-дизайна и Adobe Photoshop. Вскоре я сделал свой первый заказ - сайт на чистом html + css. Второй сайт я сделал на Joomla"
                        }}
                        /></TimelineItem>
                    <TimelineItem>
                        <span>2011: </span>
                        <Language dictionary={{
                            english: "Got carried away by studying SEO",
                            russian: "Увлёкся изучением SEO"
                        }}
                        />
                    </TimelineItem>
                    <TimelineItem>
                        <span>2013: </span>
                        <Language dictionary={{
                            english: "Put my first record: brought the site from development to Google Search top-3 in three days",
                            russian: "Поставил свой первый рекорд: сделав сайт с нуля, вывел в топ-3 в поиске Google за три дня"
                        }}
                        />
                    </TimelineItem>
                    <TimelineItem>
                        <span>2015: </span>
                        <Language dictionary={{
                            english: "By this time I have completed more than 50 individual orders for the site development based on Joomla CMS and decided to take courses in JavaScript",
                            russian: "К этому времени на моём счету было около 50 выполненых заказов по разработке сайтов на Joomla CMS. Это подтолкнуло меня пойти на курсы по JavaScript"
                        }}
                        />
                    </TimelineItem>
                    <TimelineItem>
                        <span>2016: </span>
                        <Language dictionary={{
                            english: "There was a little experience with Angular. Learned the basics of Terminal, Yarn, Git, Jira, GitBash, Grunt, Gulp, etc.",
                            russian: "Был небольшой опыт работы с Angular. Выучил основы рабочего окружения, в т.ч. Terminal, Yarn, Git, Jira, GitBash, Grunt, Gulp"
                        }}
                        />
                    </TimelineItem>
                    <TimelineItem>
                        <span><Language dictionary={{
                            english: "Dec",
                            russian: "Декабрь"
                        }}
                        /> 2017: </span>
                        <Language dictionary={{
                            english: "Started learning React",
                            russian: "Начал изучать React"
                        }}
                        />
                    </TimelineItem>
                    <TimelineItem>
                        <span><Language dictionary={{
                            english: "Aug",
                            russian: "Август"
                        }}
                        /> 2018: </span>
                        <Language dictionary={{
                            english: "Learned React-router + hystory. Started Lectrum 2 month Redux Intensive courses and learned next libraries: Redux, Redux-Saga, immutable.js, socket.io. Was very pleasantly surprised by the Parcel!",
                            russian: "Изучил React-router + hystory. Прошел двухмесячный курс Lectrum Redux Intensive, где изучил такие библиотеки: Redux, Redux-Saga, immutable.js, socket.io. Был приятно удивлён появлением Parcel!"
                        }}
                        />
                    </TimelineItem>
                </Timeline>
            </div>
        )
    }
}

export default Roadmap;