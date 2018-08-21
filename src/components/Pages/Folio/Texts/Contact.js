import React, { Component } from 'react';
import { Row, Col, Button, Icon, message } from 'antd';
import { LanguageProvider, Language } from '../../../../utils/language/provider';
import Gravatar from 'react-gravatar';

const summarySuccess = () => {
    message.info('Summary already downloaded');
};

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="container">
           

            </div>
        )
    }
}

export default Contact