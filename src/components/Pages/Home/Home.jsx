// core
import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import { Helmet } from 'react-helmet';
import CookiesModal from '../../CookiesModal';
// utils
import { message } from 'antd/lib';
import translate from '../../../utils/translations';
import { NOTIFY_OPTIONS } from '../../../utils/config';
// assets
import '../../../images/print.png';
import '../../../images/logo.png';

const Home = memo(() => {
    const { safe, hero, heroStyle, lang } = useSelector(
        state => state.ui
    );
    const dispatch = useDispatch();

    useEffect(() => {
        message.info({
            content: translate(lang, 'keep_clicking'),
            ...NOTIFY_OPTIONS
        });
        const timeout = setTimeout(() => {
            dispatch({ type: 'HERO_ANIMATE' });
            clearTimeout(timeout);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    const goFolio = () => {
        dispatch({
            type: 'LOCATION_UPDATE',
            payload: 'Folio'
        });
    };

    const renderHero = hero[lang].map((symbol, index) => {
        return (
            <span key={index} className={`span-${index}`}>
                {symbol}
            </span>
        );
    });

    return (
        <>
            <div className="Home" onClick={goFolio}>
                <Helmet>
                    <title>WebLogic Studio Home</title>
                    {safe && (
                        <link rel="canonical" href={safe.base} />
                    )}
                </Helmet>

                <h1
                    className="mobile-fix heading-hero"
                    style={heroStyle}
                >
                    {renderHero}
                    <span className="span-15">
                        <i className="icon-lamp" />
                    </span>
                </h1>
            </div>
            <CookiesModal />
        </>
    );
});

export default Home;
