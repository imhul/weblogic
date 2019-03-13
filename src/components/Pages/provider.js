import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UX_ACTIONS from '../../redux/actions/ux_actions';

// TODO: remove createContext: not supported anymore. Change it to React Intl! https://github.com/yahoo/react-intl
const LanguageContext = React.createContext();
export const LanguageConsumer = LanguageContext.Consumer;
export const Language = props => (
    <LanguageConsumer>
        {({ language }) => props.dictionary[language]}
    </LanguageConsumer>
);

class LanguageProvider extends Component {
    render() {
        const { lang } = this.props.ux;
        const { uxActions } = this.props;
        return (
            <LanguageContext.Provider value={{
                language: lang,
                updateLanguage: uxActions.langUpdate
            }}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
};

function mapDispatchToProps(dispatch) {
  return {
    uxActions: bindActionCreators(UX_ACTIONS, dispatch),
  }
};

function mapStateToProps(state) {
  return {
    ux: state.ux,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageProvider);
