import React, { Component } from 'react';

const LanguageContext = React.createContext();

class LanguageProvider extends Component {
  state = {
    language: "english"
  };

  updateLanguage = e => this.setState({ language: e.target.value });

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

const TranslatableText = props => (
    <LanguageConsumer>
      {({ language }) => props.dictionary[language]}
    </LanguageConsumer>
);

export default LanguageProvider