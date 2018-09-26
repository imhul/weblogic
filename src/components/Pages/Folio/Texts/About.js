import React, { Component } from 'react';
import { Row, Col, Button, Icon, Timeline, message } from 'antd';
import { LanguageProvider, Language } from '../../../../utils/language/provider';

const summarySuccess = () => {
    message.info('Summary already downloaded');
};

const TimelineItem = Timeline.Item;

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            // ant-timeline-alternate
            <div className="About content">
                <Timeline pending="2018: REDUX..." mode="alternate">
                    <TimelineItem color="green">
                        <span>Nov 2009: </span>
                        I started learning CSS, HTML, Joomla CMS and the web design basics with Photoshop. I made the first site on pure html and one more on Joomla</TimelineItem>
                    <TimelineItem>
                        Got carried away by studying SEO
                        <span> :2011</span>
                    </TimelineItem>
                    <TimelineItem>
                        <span>2013: </span>
                        Put my first record: brought the site from development to Google Search top-3 in three days
                    </TimelineItem>
                    <TimelineItem>
                        By this time I have completed more than 50 individual orders for the site development based on Joomla CMS and decided to take courses in JavaScript
                        <span> :2015</span>
                    </TimelineItem>
                    <TimelineItem>
                        <span>2016: </span>
                        There was a little experience with Angular. Learned the basics of Git, Jira, GitBash
                    </TimelineItem>
                    <TimelineItem>
                        Started learning React
                        <span> :Dec 2017</span>
                    </TimelineItem>
                </Timeline>
            </div>
        )
    }
}

export default About