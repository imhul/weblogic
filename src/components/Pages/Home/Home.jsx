// core
import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import { Helmet } from 'react-helmet';
// hooks
import useSafe from '../../../hooks/useSafe';
// utils
import { getMongoDB } from '../../../utils/api';
import { MONGO_ACTIONS } from '../../../utils/config';
// assets
import '../../../images/print.png';
import '../../../images/logo.png';

const Home = memo(() => {
    useSafe();
    const { safe, hero, heroStyle } = useSelector(state => state.ui);
    const { lang } = useSelector(state => state.ux);
    const dispatch = useDispatch();

    useEffect(() => {
        if (safe) {
            mongoCheck();
        } else return;
        async function mongoCheck() {
            const connected = await getMongoDB(
                `${safe.getMongo}/?=${encodeURIComponent(
                    JSON.stringify({
                        action: MONGO_ACTIONS.FIND,
                        db: safe.authdb,
                        collection: safe.authCollection,
                        query: {}
                    })
                )}`,
                lang
            );
            console.info('::: connected: ', connected);
            console.info('::: connected: ', connected.body);
        }
    }, [safe, lang]);

    const goFolio = () => {
        dispatch({
            type: 'LOCATION_UPDATE',
            payload: 'Folio'
        });
    };

    const renderHero = hero.map((symbol, index) => {
        return (
            <span key={index} className={`span-${index}`}>
                {symbol}
            </span>
        );
    });

    return (
        <div className="Home" onClick={goFolio}>
            <Helmet>
                <title>WebLogic Studio Home</title>
                {safe && <link rel="canonical" href={safe.base} />}
            </Helmet>

            <h1 className="mobile-fix heading-hero" style={heroStyle}>
                {renderHero}
                <span className="span-15">
                    <i className="icon-lamp" />
                </span>
            </h1>
        </div>
    );
});

export default Home;
