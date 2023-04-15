import React, { Component } from 'react';
import { connect } from 'react-redux';
import translate from '../../../../utils/translations';
import { Timeline } from 'antd/lib';

class Roadmap extends Component {
    render() {
        const { lang } = this.props.ux;
        const items = [
            {
                children: (
                    <span>
                        <span>{translate(lang, 'nov')} 2008:</span>
                        {translate(lang, 'step_2008')}
                    </span>
                )
            },
            {
                children: (
                    <span>
                        <span>2011: </span>
                        {translate(lang, 'step_2011')}
                    </span>
                )
            },
            {
                children: (
                    <span>
                        <span>2013: </span>
                        {translate(lang, 'step_2013')}
                    </span>
                )
            },
            {
                children: (
                    <span>
                        <span>2015: </span>
                        {translate(lang, 'step_2015')}
                    </span>
                )
            },
            {
                children: (
                    <span>
                        <span>2016: </span>
                        {translate(lang, 'step_2016')}
                    </span>
                )
            },
            {
                children: (
                    <span>
                        <span>{translate(lang, 'dec')} 2017: </span>
                        {translate(lang, 'step_2017')}
                    </span>
                )
            },
            {
                children: (
                    <span>
                        <span>{translate(lang, 'aug')} 2018: </span>
                        {translate(lang, 'step_2018')}
                    </span>
                )
            },
            {
                children: (
                    <span>
                        <span>2020: </span>
                        {translate(lang, 'step_2020')}
                    </span>
                )
            },
            {
                children: (
                    <span>
                        <span>{translate(lang, 'aug')} 2021: </span>
                        {translate(lang, 'step_2021')}
                    </span>
                )
            },
            {
                children: (
                    <span>
                        <span>{translate(lang, 'apr')} 2023: </span>
                        {translate(lang, 'step_2023')}
                    </span>
                )
            }
        ];

        const pending = (
            <div>
                <span>2024: </span>I believe in the victory of Ukraine! I believe in the Armed
                Forces!
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
