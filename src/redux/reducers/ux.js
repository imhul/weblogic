import { initStateUX as initState } from './initStateUX';
import { typesUX as types } from '../constants/types';
// import { push } from 'connected-react-router';
// import { history } from '../store';

export default (state = initState, action) => {
    switch (action.type) {

        case types.TAB_MODIFY:
            return { 
                ...state,
                active: action.payload,
            };

        case types.CHANGE_LANG:
            return { 
                ...state,
                lang: action.payload ? 'english' : 'russian',
            };

        case types.CLICK_FX:
            return {
                ...state,
                cursorPos: action.payload,
            };

        case types.SHOW_MODAL:
            return {
                ...state,
                trelloModalVisible: true,
            };

        case types.CLOSE_MODAL:
            return {
                ...state,
                trelloModalVisible: false,
            };

        case types.HISTORY_UPDATE:
            return {
                ...state,
                currentHistory: action.payload,
                isHome: action.payload === '/' ? true : false
            };

        default:
            return state;
    }
};