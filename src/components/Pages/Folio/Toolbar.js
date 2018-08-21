import React, { Component } from 'react';
import { Switch, Icon } from 'antd';
import { LanguageConsumer } from '../../../utils/language/provider';

class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
        this.toolbarToggle = this.toolbarToggle.bind(this)
    }

    toolbarToggle() {
        this.setState({
            active: !this.state.active 
        });
        setTimeout(() => this.setState({
            active: false
        }), 99000)
    }

    render() {
        return (
            <div className={ this.state.active ? 'Toolbar active' : 'Toolbar' }>
                <a 
                    href="https://github.com/imhul/weblogic" 
                    title="github project" 
                    className="github" 
                    target="_blank"
                >
                    <Icon type="github" />
                </a>
                <LanguageConsumer>
                    {({ updateLanguage }) => (
                        <Switch size="small" defaultChecked onChange={ updateLanguage } unCheckedChildren="ru" checkedChildren="en" />
                    )}
                </LanguageConsumer>
                <div onClick={this.toolbarToggle}>. . .</div>
            </div>
        );
    }
}

export default Toolbar