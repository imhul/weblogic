import React, { Component } from 'react';
import store from '../store/store';

const LanguageContext = React.createContext();
const LanguageConsumer = LanguageContext.Consumer;

class LanguageProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: "english"
        }
        this.updateLanguage = this.updateLanguage.bind(this)
    }

    componentDidMount() {
        store.setItem('lang', this.state.language)
    }

    componentDidUpdate(noused, prevState) {
        if(this.state.language !== prevState.language) {
            store.setItem('lang', this.state.language)
            console.log("::::store.lang in provider::::", store.lang)
        }
    }

    updateLanguage(e) {
        this.setState({ language: e ? 'english' : 'russian' })
    }

    render() {
        return (
            <LanguageContext.Provider
                value={{
                    language: this.state.language,
                    updateLanguage: this.updateLanguage
                }}
            >
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}

const Language = props => (
    <LanguageConsumer>
        {({ language }) => props.dictionary[language]}
    </LanguageConsumer>
);

export { LanguageProvider, LanguageConsumer, Language }
