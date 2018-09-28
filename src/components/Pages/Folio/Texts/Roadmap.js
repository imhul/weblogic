import React, { Component } from 'react';
import { Timeline, message } from 'antd';
import { LanguageProvider, Language } from '../../../../utils/language/provider';

const TimelineItem = Timeline.Item;

class Roadmap extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const pending =(
            <div>
                <span>2018-2019: </span>
                Redux + connect, <a href="https://ant.design/docs/react/practical-projects" title="antd DVA docs" target="_blank">DVA</a>, SSR 
            </div>
        );
        return (
            // ant-timeline-alternate
            <div className="Roadmap content">
                <Timeline pending={pending} mode="alternate">
                    <TimelineItem>
                        <span>Nov 2009: </span>
                        I started learning CSS, HTML, Joomla CMS and the web design basics with Adobe Photoshop. I made the first site on pure html + css and one more on Joomla</TimelineItem>
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
                        There was a little experience with Angular. Learned the basics of Yarn, Git, Jira, GitBash, Webpack, Gulp, etc.
                    </TimelineItem>
                    <TimelineItem>
                        <span>Dec 2017: </span>
                        Started learning React
                    </TimelineItem>
                    <TimelineItem>
                        <span>Aug 2018: </span>
                        Started learning React-router + hystory. Was very pleasantly surprised by the Parcel!
                    </TimelineItem>
                </Timeline>
            </div>
        )
    }
}

export default Roadmap;