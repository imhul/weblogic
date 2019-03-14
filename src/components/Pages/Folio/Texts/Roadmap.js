import React, { Component } from 'react';
import { connect } from 'react-redux';
import translate from '../../translations';
import { Timeline } from 'antd';

const TimelineItem = Timeline.Item;

class Roadmap extends Component {

    render() {

        const { lang } = this.props.ux;
        const pending = (
            <div>
                <span>2019: </span>
                <a href="https://ant.design/docs/react/practical-projects" title="antd DVA docs" target="_blank">
                    DVA
                </a>, SSR, Jest, ESLint, Flow, Webpack
            </div>
        );

        return (
            <div className="Roadmap content">
                <Timeline pending={pending} mode="alternate">
                    <TimelineItem>
                        <span>
                            { translate( lang, 'nov' )} 2009: 
                        </span>
                        { translate( lang, 'step_2009' )}
                        </TimelineItem>
                    <TimelineItem>
                        <span>2011: </span>
                        { translate( lang, 'step_2011' )}
                    </TimelineItem>
                    <TimelineItem>
                        <span>2013: </span>
                        { translate( lang, 'step_2013' )}
                    </TimelineItem>
                    <TimelineItem>
                        <span>2015: </span>
                        { translate( lang, 'step_2015' )}
                    </TimelineItem>
                    <TimelineItem>
                        <span>2016: </span>
                        { translate( lang, 'step_2016' )}
                    </TimelineItem>
                    <TimelineItem>
                        <span>{ translate( lang, 'dec' )} 2017: </span>
                        { translate( lang, 'step_2017' )}
                    </TimelineItem>
                    <TimelineItem>
                        <span>{ translate( lang, 'aug' )} 2018: </span>
                        { translate( lang, 'step_2018' )}
                    </TimelineItem>
                </Timeline>
            </div>
        )
    }
};

function mapStateToProps(state) {
  return {
    ux: state.ux,
  }
};

export default connect(mapStateToProps)(Roadmap);