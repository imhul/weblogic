import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UX_ACTIONS from '../../../../redux/actions/ux_actions';
import { Row, Col, Form, Input, Button, Statistic, message } from 'antd';
import {
  MailOutlined,
  GithubOutlined,
  BarChartOutlined,
  CopyOutlined,
  PhoneOutlined,
  EllipsisOutlined,
  EditOutlined
} from '@ant-design/icons';
import translate from '../../translations';
import safe from '../../../../utils/safe';
import Clipboard from 'react-clipboard.js';
import Captcha from './Captcha';

const { TextArea } = Input;

class Contact extends Component {
  onSuccess(e) {
    const { lang } = this.props.ux;
    switch (e.text) {
      case safe.mCode:
        return message.success({
          content: `${translate(lang, 'message_success_email')}`,
          duration: 3,
          style: {
            marginTop: '40px'
          }
        });
      case safe.fCode:
        return message.success({
          content: `${translate(lang, 'message_success_phone')}`,
          duration: 3,
          style: {
            marginTop: '40px'
          }
        });
      default:
        return message.error({
          content: `${translate(lang, 'message_error_wrong')}`,
          duration: 3,
          style: {
            marginTop: '40px'
          }
        });
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const { lang, isFilled, tgMessage } = this.props.ux;

    if (isFilled) {
      fetch(`${safe.tCode}${tgMessage}'`)
        .then(response => response.json())
        .then(result => {
          if (result.ok) {
            message.success({
              content: `${translate(lang, 'message_success')}`,
              duration: 3,
              style: {
                marginTop: '40px'
              }
            });
          } else {
            message.error({
              content: `${translate(lang, 'message_error')}`,
              duration: 3,
              style: {
                marginTop: '40px'
              }
            });
          }
        })
        .catch(error =>
          message.error({
            content: `${translate(lang, 'message_error')}: ${error}`,
            duration: 3,
            style: {
              marginTop: '40px'
            }
          })
        );
    } else {
      message.error({
        content: `${translate(lang, 'message_error_phone')}`,
        duration: 3,
        style: {
          marginTop: '40px'
        }
      });
    }
  };

  render() {
    const { lang, tgMessage } = this.props.ux;
    const { currentUser } = this.props.ui;
    const { uxActions } = this.props;
    const maxSize = 4096;

    return (
      <div className="Contact content">
        {currentUser.isRobot ? (
          <Captcha />
        ) : (
          <Row gutter={24} type="flex" justify="center" align="middle">
            <Col md={12} sm={24} xs={24} className="mb-20 align-left mobile-center">
              <a
                className="link"
                href="https://www.codecademy.com/profiles/weblogicfront"
                title={`${translate(lang, 'codecademy')}`}
                target="_blank"
              >
                <BarChartOutlined /> codecedemy
              </a>
            </Col>

            <Col md={12} sm={24} xs={24} className="mb-20 align-right mobile-center">
              <a
                href="https://github.com/imhul/weblogic"
                className="link"
                title={`${translate(lang, 'github')}`}
                target="_blank"
              >
                <GithubOutlined /> github
              </a>
            </Col>

            <Col span={24}>
              <Form onSubmit={this.handleSubmit}>
                <Row gutter={24} type="flex" justify="center" align="middle">
                  <Col span={12} className="mb-10">
                    <h2 className="white">
                      <EditOutlined /> {translate(lang, 'contact_form')}
                    </h2>
                  </Col>

                  <Col span={12} className="mb-10 align-right">
                    <Statistic
                      className="white"
                      suffix={`/ ${maxSize}`}
                      value={`${tgMessage.length}`}
                    />
                  </Col>

                  <Col span={24}>
                    <TextArea
                      rows={4}
                      cols={30}
                      tabIndex="1"
                      placeholder={`${translate(lang, 'placeholder')}`}
                      onChange={uxActions.textareaUpdate}
                    />
                  </Col>
                  <Col span={16}>
                    <Button size="large" type="primary" htmlType="submit">
                      {translate(lang, 'submit')}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>

            <Col span={24} className="mt-20 center">
              {translate(lang, 'or')}
            </Col>

            <Col span={24} className="mb-20 center">
              <h2>{translate(lang, 'copy_contacts')}</h2>
            </Col>

            <Col
              md={12}
              sm={24}
              xs={24}
              className="mb-20 align-left left mobile-center"
              title={translate(lang, 'copy_email')}
            >
              <Clipboard
                className="ant-btn ant-btn-background-ghost"
                option-text={() => safe.mCode}
                onSuccess={this.onSuccess}
              >
                <MailOutlined />
                <EllipsisOutlined />
                <CopyOutlined />
              </Clipboard>
            </Col>

            <Col
              md={12}
              sm={24}
              xs={24}
              className="mb-20 align-right right mobile-center"
              title={translate(lang, 'copy_phone')}
            >
              <Clipboard
                className="ant-btn ant-btn-background-ghost"
                option-text={() => safe.fCode}
                onSuccess={this.onSuccess}
              >
                <PhoneOutlined />
                <EllipsisOutlined />
                <CopyOutlined />
              </Clipboard>
            </Col>

            <Col span={24} className="center mb-20">
              <h2>{translate(lang, 'cooperation_ready')}</h2>
            </Col>
          </Row>
        )}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    uxActions: bindActionCreators(UX_ACTIONS, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    ux: state.ux,
    ui: state.ui
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
