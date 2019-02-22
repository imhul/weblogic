import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { Icon, message } from 'antd';
import { Language } from '../../../utils/language/provider';
import JsonLd from '../../../utils/microdata';
// import anime from 'lib';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import '../../../images/print.png';
import '../../../images/logo.png';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            styles: {},
            spin: true
        }
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this)
    };

    componentDidMount() {
        this.info();
        setTimeout(() => {          
            this.setState({
                styles: { transform: "scale(1)", opacity: 1 },
            })
        }, 500)
    };

    info() {
        message.info('Keep clicking anywhere on the screen around the header to check how strong your device is', 6)
    };

    handleMouseOver(event) {
        this.setState({ spin: false })
    };

    handleMouseOut(event) {
        this.setState({ spin: true })
    };

    render() {
        const hero = ['W', 'e', 'b', 'L', 'o', 'g', 'i', 'c', ' ', 'S', 't', 'u', 'd', 'i', 'o'];
        const microdata = {
            '@context': 'http://www.schema.org',
            '@type': ['WebPage'],
            name: 'WebLogic Studio',
            url: 'http://weblogiv.com.ua/',
            inLanguage: 'en-US',
            mainEntityOfPage: 'http://weblogiv.com.ua/',
            logo: '/app/logo.png',
            image: '/app/print.png',
            description: 'WebLogic Studio - Website development and creation, as well as SEO optimization and website promotion in Kiev',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Kiyv',
                addressRegion: 'Kiyv',
                postalCode: '03110',
                addressCountry: 'Ukraine',
            },
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+38 063 442-2537',
                contactType: 'customer support',
            },
            telephone: '+38 063 442-2537',
            aggregateRating: {
                '@context': 'http://www.schema.org',
                '@type': 'aggregateRating',
                name: 'WebLogic Studio Rating',
                reviewCount: 439,
                ratingValue: 91,
                bestRating: 100,
                worstRating: 1,
            },
        };
        return (
            <div 
                className="Home" 
                onMouseOver={() => this.handleMouseOver(this)} 
                onMouseLeave={() => this.handleMouseOut(this)}>
                <ContextMenuTrigger id="context-menu">

                    <Helmet>
                        <title>WebLogic Studio Home</title>
                        <link rel="canonical" href="http://weblogic.com.ua/" />
                    </Helmet>
                    
                    <Link to="/folio">
                        <h1 className="mobile-fix heading-hero" style={this.state.styles}>
                            { hero.map((symbol, index) => {
                                return (
                                    <span
                                        key={index}
                                        className={`span-${index}`}>
                                        {symbol}
                                    </span>)
                            })}
                            <span className="span-15">
                                <i className="icon-lamp">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0.5 150 150">
                                        <g>
                                            <path fill="#bcc8ce" d="M838 872q-3 -1 -7 -2t-6 -3q-6 -3 -7.5 -2.5t-30 -27.5t-29.5 -28t-2.5 -1.5t-4.5 -4t-7 -5.5q-5 -4 -9 -7t-5 -3q-2 0 -3 -2t-9.5 -6.5t-11.5 -4.5t-8 -3q-2 0 -7.5 -1.5t-11.5 -2.5q-28 -5 -38 -14q-4 -3 -4 -2t-10 -6.5t-11.5 -7.5t-7.5 -4.5t-6 -3.5t-3 -2
                                                q-3 -2 -10 -6t-15 -8t-16.5 -8t-13.5 -6l-5 -2q0 2 -3 -1q-1 -1 -4.5 -2t-9 -3t-15.5 -4q-20 -6 -67 -8q-23 -2 -57.5 -9.5t-41.5 -12.5q-2 -2 -2 -1t-8.5 -3t-18 -10t-12.5 -8l-9 -6q-2 0 -26.5 -24t-24.5 -26q0 -1 -2.5 -5t-5.5 -9q-7 -9 -10.5 -14t-6.5 -12q-3 -6 -5 -9
                                                q-2 -2 -11 -23t-10 -25q0 -1 -1 -5t-3 -8q-3 -10 -4.5 -20t-2.5 -12t-2 -14t-1.5 -28t0 -31.5t1.5 -27.5t2 -14l2 -7q1 -7 8 -30t9 -28q2 -3 4 -9l1 -1q3 -8 17 -32q0 -2 1 -2q4 -8 6.5 -10.5t3.5 -5.5q0 -1 4 -6.5t9 -11.5q13 -14 15 -18q3 -4 10 -11t9 -7t7 -6
                                                q2 -2 6 -5.5t8.5 -7.5t8.5 -7t7 -5l3 -2l7 -4q8 -6 8 -5l6 -4l8 -4q3 0 8 -4q26 -18 87.5 -28t100.5 -4q10 2 16 3t21 5q6 1 11 2.5t6 1.5q9 2 35 14t31 16q3 3 3 2l6 4q2 1 3.5 2t3 1.5l1.5 0.5q2 0 18 14l17 13l11 10q11 11 11 12.5t9 11.5q11 12 22 35l7.5 15t1.5 5t2 5
                                                q1 2 3 7.5t3 10t0.5 4.5t1.5 4t3 12t3 14q0 3 1 7.5t2 10.5t1.5 13t1 13.5t1.5 12.5q0 5 0.5 10.5l1 11t1.5 11t2 10t2 7.5t1 4q2 4 2 5q-2 5 12 35l8 18q5 10 10 17l4 8q-1 0 5 8l5 7q-2 0 6 10q3 4 5 7.5t2 4.5t4.5 7t4.5 7t4 10q2 4 3.5 7.5t1.5 5.5l7 28q2 7 4 11t2 5
                                                q1 9 18 28q9 11 9 12l4 4t10 11t13.5 14.5t13.5 14t9.5 10.5t3.5 5l1.5 2.5t2.5 5.5q18 30 4 72q-2 4 -3 13q-4 29 -12 39q-1 1 -1.5 2.5t-0.5 2.5q0 3 -7 8.5t-16.5 11t-17.5 6.5q-24 6 -31 7q-1 0 -5.5 1.5t-9.5 3.5q-22 8 -44 3zM686 739q4 -2 31 -29l27 -27l-43 -45
                                                l2 -8q3 -10 0.5 -12.5t-12.5 0.5q-8 3 -10.5 2t-17.5 -15q-10 -8 -11 -5q-3 14 -20 7q-9 -3 -16 -5q-21 -3 -38 -19q-9 -8 -23 -15.5t-21.5 -12t-18.5 -10.5q-21 -11 -35 -19q-8 -5 -15 -9q-14 -7 -18.5 -10t-6.5 -5q-4 -3 -1 -3q7 1 24 11q2 1 7.5 4t7.5 4q1 1 2.5 2l3 2
                                                t3.5 1.5t3.5 1.5t2.5 2q7 4 17 9q26 14 39 22q3 1 6 3t6 3.5l5 2.5q5 3 13 4q21 4 41 22q17 16 25 7q4 -5 -1 -15q-5 -7 -3.5 -14.5t7.5 -16t20 -21.5q14 -14 23.5 -17t20.5 2q16 8 15 -1q0 -7 -13 -20q-2 -3 -4 -5l-4 -4t-2.5 -3.5l-0.5 -1.5q0 -2 -5 -9q-1 -3 -2.5 -6.5
                                                t-2.5 -5.5q0 -6 -2 -8q-2 -3 -12 -20q-2 -4 -6 -10q-2 -2 -3 -4.5l-1 -2.5q0 -1 -10.5 -17t-10.5 -17l-1.5 -3t-4.5 -7t-5 -7t-2 -3.5t-1 -2.5t-3 -5q-5 -6 -5 -7t-0.5 -2t-1.5 -2.5t-3 -3.5q-4 -6 -4 -7t-7 -10l-6 -11l-5 -7q-5 -6 -5 -7t-12 -19q-5 -8 -8.5 -13.5
                                                l-3.5 -5.5q0 -1 -5.5 -8t-5.5 -8q0 -2 -9.5 -13.5t-15.5 -17.5q-10 -9 -22 -13t-23 -3t-20 7t-13 16q-3 5 -3 7t2 4t9 4q2 1 5.5 2.5t6 3t3.5 2.5l4 2l2 1q3 0 17 12.5t29.5 28.5t29.5 31t16 20q11 23 5 39.5t-22.5 16t-37.5 -17.5q-8 -7 -8 -5q1 1 3 4q0 2 1 4l1 2l4 10
                                                q7 19 -1 30.5t-27 8.5l-8 -1v8q0 13 -7.5 20t-18.5 7.5t-25 -6t-27 -18.5q-5 -6 -9.5 -11.5t-5.5 -6.5q0 -3 4 0l9 9q15 15 32 23q16 8 29 3t13 -19v-9l-29 -28q-10 -10 -17 -16t-13 -11t-12 -8.5t-12.5 -6t-15.5 -4.5q-15 -6 -14 -9q0 -1 5.5 0.5t13.5 4t16 6.5q11 4 12 3
                                                l-6 -8q-10 -12 -17 -28.5t-9 -30.5q-1 -9 -4 -9q-7 0 -18 7q-3 3 -4.5 1.5t0.5 -3.5t6.5 -4.5t9.5 -4.5q10 -4 11 -9q3 -17 19 -29.5t33 -12.5l10 1l4 -10q1 -3 3.5 -7t5.5 -7.5t6.5 -6.5t7 -4.5t6.5 -2.5q38 -5 64 21l3.5 3.5l2.5 2.5l2 2t1 2t6 9l6 9q-1 0 7.5 11t8.5 12
                                                t4 7q2 3 3.5 5t1.5 2.5t1.5 3t3.5 5.5q6 7 6 9l0.5 1t1.5 2.5l2 3t3 3.5q6 9 6 10.5t5 7.5q2 2 3 4.5t1 3t2 3.5t5 6q6 9 6 10.5t5 7.5q2 3 3.5 5t1.5 2.5t1.5 3.5t4.5 6q1 2 2.5 4t2.5 3.5t1.5 3t1.5 2.5q10 18 13 21t3 4.5t10 17.5t10 17l7 8q16 15 25 42q6 16 6.5 19.5
                                                t-4.5 8.5l-4 4l10 12q11 11 9 17q-3 14 -0.5 17t16.5 0q3 -1 5.5 0t6.5 5t16 15l21 21l22 -23l17 -17t8.5 -12.5t4.5 -10t-3 -11t-6.5 -14.5t-13.5 -20q-31 -46 -44.5 -83.5t-17.5 -85.5q-6 -76 -24.5 -117.5t-62.5 -77.5q-65 -53 -144.5 -63.5t-149 15.5t-123.5 87t-70 144
                                                q-3 15 -5 19q-3 3 -3.5 16t0 27t2 26.5t4 15.5t4.5 13t0 12q-4 7 21 58t33 51q2 0 18 17q34 38 76.5 54t124.5 22q73 6 157 64q23 15 32 18t20 -3zM767 668l13 -12l2 -25l7 -1q8 -1 8 -4t-15 -18q-16 -17 -28.5 -19t-27.5 8q-10 7 -13 7l-4 2q-1 2 -5 2q-5 0 -1 4l2 2
                                                q6 6 3 15q-2 5 2 11t18 20q18 18 22 19t17 -11zM692 611q7 -3 6 -6q-1 -1 0 -2l3 -3t6 -4q15 -10 14.5 -15.5t-15.5 -19.5q-24 -22 -7 -28l-5 -1q-9 1 -16.5 6.5t-13.5 9.5q-16 9 -18 21.5t10 23.5q18 16 23 18.5t13 -0.5zM720 596q3 -2 5.5 -4l2.5 -2q1 -1 0.5 -3t-8.5 4.5
                                                t-11.5 8.5t0 2t11.5 -6zM516 420q7 -5 1 -27.5t-17 -34.5q-1 -1 -1.5 -2.5t-0.5 -2.5t-3.5 -5t-8 -9.5t-10 -11l-10.5 -10.5l-8 -8q-28 -22 -61 -27l-9 -1v8q0 11 7.5 29t18.5 31q5 7 5 8.5t8 9.5t10 8t10.5 7.5t10 7.5t10.5 8.5t9 10.5q0 10 15.5 14.5t23.5 -3.5zM310 409
                                                l-5 -9l1 2l8 9v-1l1 -2q1 2 0 6q-2 0 -5 -5zM464 404q-4 -4 -7.5 -7t-4 -2.5t4.5 5.5t10 9.5t6 4.5t-9 -10zM308 400q-1 -2 -1.5 -4l-0.5 -2l4 4zM370 393v-2.5t-1 -1.5l-2 1q0 2 -7 -7q-4 -5 -4 -7l5 5l6 6l-1 -2.5t-3 -5.5q-5 -8 -5 -9l15 23l-2 2q-2 0 -1 -2zM571 382
                                                q11 -9 6 -27.5t-25 -39.5q-17 -17 -18 -20.5t-6 -6.5q-1 -1 -3.5 -2.5t-5 -4t-6 -5.5t-6.5 -6q-16 -14 -17.5 -14t-7.5 -5q-5 -4 -15.5 -9t-13.5 -5q-3 2 0 15.5t12 33.5t17 30q4 6 4 7.5t7 9.5q3 3 4.5 6t1.5 4q0 2 8.5 10.5t18 17.5t13.5 11q20 10 32 0zM468 305l-3.5 -7
                                                t-2.5 -4q-5 -7 -10 -24t-5 -26q0 -6 -0.5 -7.5t-5.5 -2.5q-13 -2 -27 6.5t-21 21.5q-4 9 -3 11.5t8 3.5q15 2 34.5 10.5t26.5 16.5l6 4q2 0 5 3q5 6 0 -3z"/>
                                        </g>
                                    </svg> */}
                                </i>
                                {/* { anime({
                                    targets: '.icon-lamp svg path',
                                    strokeDashoffset: [anime.setDashoffset, 0],
                                    easing: 'easeInOutSine',
                                    duration: 1500,
                                    delay: function(el, i) { return i * 250 },
                                    direction: 'alternate',
                                    loop: true
                                    }) 
                                } */}
                            </span>
                        </h1>
                    </Link>
                    <JsonLd data={microdata} />
                </ContextMenuTrigger>
                <ContextMenu id="context-menu">
                    <MenuItem>
                        <Link to="/folio"><Icon type="experiment" theme="outlined" /> About</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/linkedin" onClick={(e) => {
                            e.preventDefault();
                            window.open("https://www.linkedin.com/in/tkachuk-zakhar-04733892/")
                        }}>
                            <Icon type='linkedin' /> Summary</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/github" onClick={(e) => {
                            e.preventDefault();
                            window.open("https://github.com/imhul")
                        }}>
                            <Icon type="github" /> Github
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={this.info}>
                        <Icon type="question-circle" /> How-to
                    </MenuItem>
                </ContextMenu>
            </div>
        )
    }
};

export default Home;