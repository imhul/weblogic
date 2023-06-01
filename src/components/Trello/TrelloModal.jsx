import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import { Modal, Button } from 'antd/lib';

// Trello API
// import { isTrelloAvailable, authenticateUser, getBoard } from '../../../utils/api';

const TrelloModal = memo(() => {
    // useEffect(() => setTimeout(() => authenticateUser(), 1000));
    const { trelloModalVisible } = useSelector(s => s.ui);
    const dispatch = useDispatch();

    return (
        <div>
            <Button
                type="primary"
                onClick={() => dispatch({ type: 'SHOW_MODAL' })}
            >
                Trello API
            </Button>
            <Modal
                title="Trello Board"
                visible={trelloModalVisible}
                onOk={uiActions.closeModal}
                onCancel={uiActions.closeModal}
            >
                {/* { console.info("trello board: ", getBoard('555c8e8438613a1b6f665efc')) } */}
            </Modal>
        </div>
    );
});

export default TrelloModal;
