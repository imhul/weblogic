import React, { Component } from 'react';
import { connect } from 'react-redux';
// utils
import translate from '../../../utils/translations';
// components
import { Helmet } from 'react-helmet';
import { Row, Col } from 'antd';
import { CrownOutlined, GithubOutlined, DollarCircleOutlined } from '@ant-design/icons';
// images
// import preview from '../../../images/preview.png';

// TODO: fix horisontal styles
class Game extends Component {

  render() {
    const { lang } = this.props.ux;
    const videoId = 'nETaVY9GOao';

    return (
      <div className="Game">
          <Helmet>
            <title>{translate(lang, 'game_title')}</title>
            <link rel="canonical" href="http://weblogic.com.ua/" />
          </Helmet>

          <div className="container">
            <Row type="flex" justify="center" align="middle">
              <Col span={24}>
                <h1 className="center">{translate(lang, 'game_title')}</h1>
                <h2 className="center">{translate(lang, 'game_subtitle')}</h2>
                <div className="center">
                  <span>{translate(lang, 'game_description')}</span>
                </div>

                <div className="mobile-reverse">
                  <Row gutter={24} className="links-wrapper center mb-20 mt-20">
                    <Col xs={{ span: 24 }} sm={{ span: 8 }} className="mb-20 mt-20">
                      <a title="game netlify app" href="https://proto-mass.netlify.app/" target="_blank" rel="external">
                        <CrownOutlined /> {translate(lang, 'game_demo')}
                      </a>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 8 }} className="mb-20 mt-20">
                      <a title="game github page" href="https://github.com/imhul/proto-mass" target="_blank" rel="external">
                        <GithubOutlined /> {translate(lang, 'game_git')}
                      </a>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 8 }} className="mb-20 mt-20">
                      <a title="game patreon page" href="https://www.patreon.com/protomass" target="_blank" rel="external">
                        <DollarCircleOutlined /> {translate(lang, 'game_donate')}
                      </a>
                    </Col>
                  </Row>

                  <div className="preview-wrapper center">
                    <iframe
                      className="preview"
                      width="640"
                      height="360"
                      src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=0&autoplay=1?fs=1`}
                      title={translate(lang, 'game_title')}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ui: state.ui,
    ux: state.ux
  };
}

export default connect(mapStateToProps)(Game);