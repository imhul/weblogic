// core
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
// components
import { Timeline } from 'antd/lib';
// utils
import translate from '../../utils/translations';

const Roadmap = memo(() => {
    const { lang } = useSelector(state => state.ui);
    const items = [
        {
            children: (
                <span>
                    <span>{translate('nov')} 2008:</span>
                    {translate('step_2008')}
                </span>
            )
        },
        {
            children: (
                <span>
                    <span>2011: </span>
                    {translate('step_2011')}
                </span>
            )
        },
        {
            children: (
                <span>
                    <span>2013: </span>
                    {translate('step_2013')}
                </span>
            )
        },
        {
            children: (
                <span>
                    <span>2015: </span>
                    {translate('step_2015')}
                </span>
            )
        },
        {
            children: (
                <span>
                    <span>2016: </span>
                    {translate('step_2016')}
                </span>
            )
        },
        {
            children: (
                <span>
                    <span>{translate('dec')} 2017: </span>
                    {translate('step_2017')}
                </span>
            )
        },
        {
            children: (
                <span>
                    <span>{translate('aug')} 2018: </span>
                    {translate('step_2018')}
                </span>
            )
        },
        {
            children: (
                <span>
                    <span>2020: </span>
                    {translate('step_2020')}
                </span>
            )
        },
        {
            children: (
                <span>
                    <span>{translate('aug')} 2021: </span>
                    {translate('step_2021')}
                </span>
            )
        },
        {
            children: (
                <span>
                    <span>{translate('apr')} 2023: </span>
                    {translate('step_2023')}
                </span>
            )
        }
    ];

    const pending = (
        <span>
            <span>2024: </span>I believe in the victory of Ukraine! I
            believe in the Armed Forces!
        </span>
    );

    return (
        <div className="Roadmap content">
            <Timeline
                pending={pending}
                mode="alternate"
                items={items}
            />
        </div>
    );
});

export default Roadmap;
