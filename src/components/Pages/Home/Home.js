import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import JsonLd from '../../../utils/microdata';

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
        setTimeout(() => this.setState({
            styles: { transform: "scale(1)", opacity: 1 },
        }), 2000)
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
            '@type': ['Pharmacy', 'WebPage'],
            name: 'Silver Steam Fine Cannabis',
            url: 'https://silverstemcannabis.com/',
            inLanguage: 'en-US',
            mainEntityOfPage: 'https://silverstemcannabis.com/',
            logo: 'https://silverstemcannabis.com/uploads/gallery/2018/11/4473e7f3fed497bb0e3689f46dde2786/5be1720225246207594768.png',
            sameAs: [
                'https://plus.google.com/+SilverStemFineCannabisDenverSWDispensary',
                'https://twitter.com/silver_stem',
                'https://www.facebook.com/SilverStemCo/',
                'https://www.instagram.com/silverstemdispensaries',
            ],
            image: 'https://silverstemcannabis.com/uploads/gallery/2018/08/3139fbf5a2e6af7726dd4819057266c2/5b7fbfee3d4c9365988239.jpeg',
            description: 'Silver Stem offers the best quality marijuana and cannabis products - more than any other dispensaries in Colorado and Oregon',
            address: {
                '@type': 'PostalAddress',
                streetAddress: '1086 W Littleton Blvd',
                addressLocality: 'Littleton',
                addressRegion: 'Colorado',
                postalCode: '80120',
                addressCountry: 'USA',
            },
            openingHours: 'Mo, Tu, We, Th, Fr, Sa, Su 09:00-18:45 Th',
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1 (720) 627-5091',
                contactType: 'customer support',
            },
            telephone: '+1 (720) 627-5091',
            priceRange: '7-60$',
            significantLinks: [
                'https://silverstemcannabis.com/cannabis-products/full-menu',
                'https://silverstemcannabis.com/dispensaries',
                'https://silverstemcannabis.com/news-articles',
                'https://silverstemcannabis.com/specials',
                'https://silverstemcannabis.com/loyalty-program',
                'https://silverstemcannabis.com/order-now',
            ],
            aggregateRating: {
                '@context': 'http://www.schema.org',
                '@type': 'aggregateRating',
                name: 'Silver Stem Page Rating',
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
                
                <Link to="/folio">
                    <h1 className="mobile-fix heading-hero" style={this.state.styles}>
                        {hero.map((symbol, index) => {
                            return (
                                <span
                                    key={index}
                                    className={`span-${index}`}
                                >
                                    {symbol}
                                </span>)
                        })}
                        <span className="span-15">
                            <i className="icon-lamp"></i>
                        </span>
                    </h1>
                </Link>
                <JsonLd data={microdata} />
            </div>
        )
    }
};

export default Home;