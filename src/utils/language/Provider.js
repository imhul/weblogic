import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UI_ACTIONS from '../../redux/actions/ui_actions';

const LanguageContext = React.createContext();
export const LanguageConsumer = LanguageContext.Consumer;
export const Language = props => (
    <LanguageConsumer>
        {({ language }) => props.dictionary[language]}
    </LanguageConsumer>
);

class LanguageProvider extends Component {
    render() {
        const { lang } = this.props.ui;
        const { uiActions } = this.props;
        return (
            <LanguageContext.Provider value={{
                language: lang,
                updateLanguage: uiActions.langUpdate
            }}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
};

function mapDispatchToProps(dispatch) {
  return {
    uiActions: bindActionCreators(UI_ACTIONS, dispatch),
  }
};

function mapStateToProps(state) {
  return {
    ui: state.ui,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageProvider);
