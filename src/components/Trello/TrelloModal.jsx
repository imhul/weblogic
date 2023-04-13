import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UI_ACTIONS from '../../redux/actions/ui_actions';
import { Modal, Button } from 'antd';

// Trello API
// import { isTrelloAvailable, authenticateUser, getBoard } from '../../../utils/api';

class TrelloModal extends Component {
    // componentDidMount() {
    //     setTimeout(() => authenticateUser(), 1000)
    // };

    render() {
        const { trelloModalVisible } = this.props.ui;
        const { uiActions } = this.props;

        return (
            <div>
                <Button type="primary" onClick={uiActions.showModal}>
                    Trello API
                </Button>
                <Modal
                    title="Trello Board"
                    visible={trelloModalVisible}
                    onOk={uiActions.closeModal}
                    onCancel={uiActions.closeModal}
                >
                    {/* { console.log("trello board: ", getBoard('555c8e8438613a1b6f665efc')) } */}
                </Modal>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        uiActions: bindActionCreators(UI_ACTIONS, dispatch),
        uxActions: bindActionCreators(UX_ACTIONS, dispatch)
    };
}

function mapStateToProps(state) {
    return {
        ui: state.ui
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TrelloModal);
