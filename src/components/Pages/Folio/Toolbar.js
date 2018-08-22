import React, { Component } from 'react';
import { Switch, Icon } from 'antd';
import { LanguageConsumer } from '../../../utils/language/provider';
import store from '../../../utils/store/store';

class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
        this.toolbarIn = this.toolbarIn.bind(this);
        this.toolbarOut = this.toolbarOut.bind(this)
    }

    toolbarIn() {
        this.setState({
            active: true 
        });  
    }

    toolbarOut() {
        setTimeout(() => this.setState({
            active: false
        }), 4000)
    }

    render() {
        return (
            <div className={ this.state.active ? 'Toolbar active' : 'Toolbar' } onMouseOver={this.toolbarIn} onMouseOut={this.toolbarOut}>
                <a 
                    href="https://github.com/imhul/weblogic" 
                    title="github project" 
                    className="github" 
                    target="_blank"
                >
                    <Icon type="github" />
                </a>
                {console.log("::::store.lang::::", store.lang)}
                <LanguageConsumer>
                    {({ updateLanguage }) => (
                        <Switch 
                            size="small" 
                            defaultChecked={ true }
                            onChange={ updateLanguage } 
                            unCheckedChildren="ru" 
                            checkedChildren="en" 
                        />
                    )}
                </LanguageConsumer>
                <div>. . .</div>
            </div>
        );
    }
}

export default Toolbar