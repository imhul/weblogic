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
  }

  updateLanguage = e => { 
      this.setState({ language: e ? 'english' : 'russian' });
      this.sendLangToStore();
  }

  sendLangToStore() {
    store.setItem('lang', this.state.language);
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
    );
  }
}

const Language = props => (
    <LanguageConsumer>
        {({ language }) => props.dictionary[language]}
    </LanguageConsumer>
);

export { LanguageProvider, LanguageConsumer, Language }
