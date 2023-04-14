import React, { Component } from 'react';
import { connect } from 'react-redux';
import translate from '../../../../utils/translations';
import { Timeline } from 'antd/lib';

const TimelineItem = Timeline.Item;

class Roadmap extends Component {
    render() {
        const { lang } = this.props.ux;
        const items = [
            <span>
                <span>{translate(lang, 'nov')} 2009:</span>
                {translate(lang, 'step_2009')}
            </span>,
            <span>
                <span>2011: </span>
                {translate(lang, 'step_2011')}
            </span>,
            <span>
                <span>2013: </span>
                {translate(lang, 'step_2013')}
            </span>,
            <span>
                <span>2015: </span>
                {translate(lang, 'step_2015')}
            </span>,
            <span>
                <span>2016: </span>
                {translate(lang, 'step_2016')}
            </span>,
            <span>
                <span>{translate(lang, 'dec')} 2017: </span>
                {translate(lang, 'step_2017')}
            </span>,
            <span>
                <span>{translate(lang, 'aug')} 2018: </span>
                {translate(lang, 'step_2018')}
            </span>,
            <span>
                <span>{translate(lang, 'aug')} 2020-2021: </span>
                {translate(lang, 'step_2021')}
            </span>
        ];

        const pending = (
            <div>
                <span>2022: </span>
                <a
                    href="https://ant.design/docs/react/practical-projects"
                    title="antd DVA docs"
                    target="_blank"
                >
                    DVA
                </a>
                , GraphQL, mongoDb, Firebase, express.js, socket.io
            </div>
        );

        return (
            <div className="Roadmap content">
                <Timeline pending={pending} mode="alternate" items={items} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ux: state.ux
    };
}

export default connect(mapStateToProps)(Roadmap);
