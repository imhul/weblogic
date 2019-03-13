import React, { Component } from 'react';
import { Switch } from 'antd';
import { LanguageConsumer } from '../provider';

class Toolbar extends Component {

    render() {
        return (
            <div className="Toolbar">
                <LanguageConsumer>
                    {({ updateLanguage }) => (
                        <Switch 
                            defaultChecked={ true }
                            onChange={ updateLanguage } 
                            unCheckedChildren="ru" 
                            checkedChildren="en" 
                        />
                    )}
                </LanguageConsumer>
            </div>
        );
    }
}

export default Toolbar