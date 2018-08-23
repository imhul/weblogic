import React, { Component } from 'react';
import { Switch, Icon } from 'antd';
import { LanguageConsumer } from '../../../utils/language/provider';
import store from '../../../utils/store/store';

class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
       
        };
    }

    render() {
        return (
            <div className="Toolbar">
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
            </div>
        );
    }
}

export default Toolbar