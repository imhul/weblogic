// core
import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import { Helmet } from 'react-helmet';
import CookiesModal from '../../CookiesModal';
// assets
import '../../../images/print.png';
import '../../../images/logo.png';

const Home = memo(() => {
    const { safe, hero, heroStyle, lang } = useSelector(
        state => state.ui
    );
    const dispatch = useDispatch();

    useEffect(() => {
        const timeout2 = setTimeout(() => {
            dispatch({ type: 'HERO_ANIMATE' });
            clearTimeout(timeout2);
        }, 1000);
        const timeout1 = setTimeout(() => {
            dispatch({
                type: 'NOTIFY',
                payload: { text: 'keep_clicking' }
            });
            clearTimeout(timeout1);
        }, 6000);

        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
        };
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
