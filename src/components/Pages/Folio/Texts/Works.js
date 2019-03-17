import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import translate from '../../translations';
import { Row, Col, Carousel, Button, Icon, message } from 'antd';
import * as UX_ACTIONS from '../../../../redux/actions/ux_actions';

// images
import puzzleImg from '../../../../images/works/puzzle.jpg';
import ektaImg from '../../../../images/works/ekta.jpg';
import calcImg from '../../../../images/works/calc.jpg';
import seezisImg from '../../../../images/works/seezis.jpg';
import silverImg from '../../../../images/works/silver.jpg';
// import TrelloModal from '../TrelloModal';
// Trello API
// import { isTrelloAvailable, authenticateUser, getBoard } from '../../../../utils/api';


class Works extends Component {
    
    componentDidMount() {
        setTimeout(() => this.props.uxActions.hideDesc(), 5000)
        //     console.log('ok?', isTrelloAvailable());
        //     setInterval(() => console.log('+1000. ok?', isTrelloAvailable()), 1000);
        //     setTimeout(() => console.log('+1000. ok?', authenticateUser()), 1000)
    };

    render() {

        const { lang, isDescShow } = this.props.ux;
        const base = window.location.origin;
        const links = [
            {
                name: translate( lang, 'work_1' ),
                type: translate( lang, 'demo' ),
                icon: <Icon type="experiment" theme="outlined" />,
                href: `${base}/Lab/Game/index.html`,
                back: `${puzzleImg}`,
            },
            {
                name: translate( lang, 'work_2' ),
                type: translate( lang, 'released' ),
                icon: <Icon type="link" theme="outlined" />,
                href: 'http://ekta.ua/',
                back: `${ ektaImg }`,
            },
            {
                name: translate( lang, 'work_3' ),
                type: translate( lang, 'demo' ),
                icon: <Icon type="experiment" theme="outlined" />,
                href: `${ base }/Lab/Calc/index.html`,
                back: `${ calcImg }`,
            },
            {
                name: translate( lang, 'work_4' ),
                type: translate( lang, 'released' ),
                icon: <Icon type="link" theme="outlined" />, 
                href: 'https://seezislab.com/',
                back: `${ seezisImg }`,
            },
            {
                name: translate( lang, 'work_6' ),
                type: translate( lang, 'released' ),
                icon: <Icon type="link" theme="outlined" />, 
                href: 'https://silverstemcannabis.com/',
                back: `${ silverImg }`,
            },
        ];

        const settings = {
            dots: true,
            autoplay: true,
            infinite: true,
            speed: 1000,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        const activeStyle = {
            bottom: 50,
            opacity: 1,
        };

        const hiddenStyle = {
            bottom: -120,
            opacity: 0,
        };

        return (
            <div className="Works content">
                <Carousel {...settings}>
                    { links.map(( item, index ) => (
                        <div key={ index }>
                            <a 
                                style={{ 
                                    backgroundImage: `url(${ item.back })`}} 
                                target="_blank" 
                                onMouseEnter={ () => {
                                    if (!isDescShow) {
                                        this.props.uxActions.showDesc();
                                        setTimeout(() => this.props.uxActions.hideDesc(), 5000)
                                    }
                                }} 
                                href={ item.href }>
                                <div className="title" style={ isDescShow ? activeStyle : hiddenStyle }>
                                    <h2>
                                        { translate( lang, 'project_desc' )}
                                        <span>:<br /></span>
                                        { item.name }
                                    </h2>
                                    <h2>
                                        { translate( lang, 'status' )}
                                        <span>:<br /></span>
                                        { item.type }
                                    </h2>
                                    <h2>
                                        { item.icon }
                                    </h2>
                                </div>
                            </a>
                        </div>
                    )) }
                </Carousel>


                {/* <TrelloModal /> */}
            </div>
        )
    }
};

function mapDispatchToProps(dispatch) {
    return {
        uxActions: bindActionCreators(UX_ACTIONS, dispatch),
    }
};

function mapStateToProps(state) {
    return {
        ux: state.ux,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Works);