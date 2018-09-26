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
            <div className="About">
                <Timeline pending="2018: REDUX..." mode="alternate">
                    <TimelineItem color="green">
                        <span>Nov 2009: </span>
                        I started learning CSS, HTML, Joomla CMS and the web design basics with Photoshop. I made the first site on pure html and one more on Joomla</TimelineItem>
                    <TimelineItem>
                        <span>2011: </span>
                        Got carried away by studying SEO
                    </TimelineItem>
                    <TimelineItem>
                        <span>2013: </span>
                        Put my first record: brought the site from development to Google Search top-3 in three days
                    </TimelineItem>
                    <TimelineItem>
                        <span>2015: </span>
                        By this time I have completed more than 50 individual orders for the site development based on Joomla CMS and decided to take courses in JavaScript
                    </TimelineItem>
                    <TimelineItem>
                        <span>2016: </span>
                        There was a little experience with Angular. Learned the basics of Git, Jira, GitBash
                    </TimelineItem>
                    <TimelineItem>
                        <span>Dec 2017: </span>
                        Started learning React
                    </TimelineItem>
                </Timeline>
            </div>
        )
    }
}

export default About